import { useMemo, useState } from "react";
import Filters from "./Filters";
import GuestGrid from "./GuestGrid";
import { chunkArray } from "../../funcs/chunk-array";
import { GUESTS, type Guest } from "../../constants/guests";
import {
  categoryOptionsEnum,
  orderOptionsEnum,
  roleOptionsEnum,
} from "../../constants/select-options";

const GuestContainer = () => {
  const [filters, setFilters] = useState<{
    roles: string[];
    categories: string[];
  }>({
    roles: [],
    categories: [],
  });
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState(orderOptionsEnum.NEWEST);

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

  const handleOrderChange = (value: orderOptionsEnum) => {
    setOrder(value);
  };

  const filteredGuests = useMemo(() => {
    console.log(filters)
    if (filters.roles.length === 0 && filters.categories.length === 0) {
      return GUESTS;
    }
    return GUESTS.filter((guest) => {
      const hasRole = filters.roles.length === 0 || filters.roles.some((role) => guest.roles.includes(role as roleOptionsEnum));
      const hasCategory = filters.categories.length === 0 || filters.categories.some((category) => guest.categories.includes(category as categoryOptionsEnum));

      return hasRole && hasCategory;
    });
  }, [filters]);

  return (
    <>
      <Filters
        categories={filters.categories}
        roles={filters.roles}
        onCategoryChange={handleCategoryChange}
        onRoleChange={handleRoleChange}
      />
      <GuestGrid
        guests={filteredGuests}
        searchValue={search}
        orderValue={order}
        handleOrderChange={handleOrderChange}
        handleSearchChange={handleSearchChange}
      />
    </>
  );
};

export default GuestContainer;
