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
  const [guests, setGuests] = useState<Guest[]>([]);
  const [error, setError] = useState(false);
  const [filters, setFilters] = useState<{
    roles: string[];
    categories: string[];
  }>({
    roles: [],
    categories: [],
  });
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState(orderOptionsEnum.NEWEST);

  useEffect(() => {    
    const fetchGuests = async () => {
      setError(false);
      try {
        const guests = await getGuests();
        setGuests(guests.reverse());
      } catch (error) {
        setError(true);
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
      />
      <GuestGrid
        guests={searchedGuests}
        searchValue={search}
        orderValue={order}
        handleOrderChange={handleOrderChange}
        handleSearchChange={handleSearchChange}
      />
    </div>
  );
};

export default GuestContainer;
