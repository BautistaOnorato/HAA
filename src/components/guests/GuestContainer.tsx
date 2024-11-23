import { useEffect, useMemo, useState } from "react";
import Filters from "./Filters";
import GuestGrid from "./GuestGrid";
import {
  orderOptionsEnum
} from "../../constants/select-options";
import { getGuests } from "../../services/guests";
import type { CategoryEnum, Guest, RoleEnum } from "../../types/guest";
import styles from "./guests.module.css";

const GuestContainer = () => {
  const [openFilters, setOpenFilters] = useState(false);
  const [guests, setGuests] = useState<Guest[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<{
    roles: string[];
    categories: string[];
  }>({
    roles: [],
    categories: [],
  });
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState(orderOptionsEnum.NEWEST);

  const handleOpenFilters = () => {
    if (openFilters) {
      document.body.classList.remove(styles.no_scroll);
    } else {
      document.body.classList.add(styles.no_scroll);
    }
    setOpenFilters(!openFilters)
  };

  useEffect(() => {    
    const fetchGuests = async () => {
      setError(false);
      setLoading(true);
      try {
        const guests = await getGuests();
        setGuests(guests.reverse());
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }  

    fetchGuests();
  }, [])

  const handleSearchChange = (value: string) => setSearch(value);

  const handleRoleChange = (value: string) => {
    if (filters.roles.includes(value)) {
      setFilters({
        ...filters,
        roles: filters.roles.filter((role) => role !== value),
      });
    } else {
      setFilters({ ...filters, roles: [...filters.roles, value] });
    }
  };

  const handleCategoryChange = (value: string) => {
    if (filters.categories.includes(value)) {
      setFilters({
        ...filters,
        categories: filters.categories.filter((category) => category !== value),
      });
    } else {
      setFilters({ ...filters, categories: [...filters.categories, value] });
    }
  };

  const handleResetFilters = () => {
    setFilters({
      roles: [],
      categories: [],
    });
  }

  const handleOrderChange = (value: orderOptionsEnum) => {
    setOrder(value);
  };

  const filteredGuests = useMemo(() => {
    if (filters.roles.length === 0 && filters.categories.length === 0) {
      return guests;
    }
    return guests.filter((guest) => {
      const hasRole = filters.roles.length === 0 || filters.roles.some((role) => guest.roles.includes(role as RoleEnum));
      const hasCategory = filters.categories.length === 0 || filters.categories.find((category) => guest.categories.includes(category as CategoryEnum));

      return hasRole && hasCategory;
    });
  }, [filters, guests]);

  const orderedGuests = useMemo(() => {
    switch (order) {
      case orderOptionsEnum.NEWEST:
        return filteredGuests;
      case orderOptionsEnum.OLDEST:
        return [...filteredGuests].reverse();
      case orderOptionsEnum.AZ:
        return [...filteredGuests].sort((a, b) => a.name.localeCompare(b.name));
      case orderOptionsEnum.ZA:
        return [...filteredGuests].sort((a, b) => b.name.localeCompare(a.name));
      default:
        return filteredGuests;
    }
  }, [order, filteredGuests])

  const searchedGuests = useMemo(() => {
    return orderedGuests.filter((guest) => guest.name.toLowerCase().startsWith(search.toLowerCase()));
  }, [orderedGuests, search]);

  return (
    <div className={styles.grid_container}>
      <Filters
        categories={filters.categories}
        roles={filters.roles}
        onCategoryChange={handleCategoryChange}
        onRoleChange={handleRoleChange}
        onReset={handleResetFilters}
        openFilters={openFilters}
        handleOpenFilters={handleOpenFilters}
      />
      <GuestGrid
        guests={searchedGuests}
        searchValue={search}
        orderValue={order}
        handleOrderChange={handleOrderChange}
        handleSearchChange={handleSearchChange}
        openFilters={openFilters}
        handleOpenFilters={handleOpenFilters}
        isLoading={loading}
      />
    </div>
  );
};

export default GuestContainer;
