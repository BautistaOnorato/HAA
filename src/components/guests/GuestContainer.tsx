import { useEffect, useMemo, useRef, useState } from "react";
import Filters from "./Filters";
import GuestGrid from "./GuestGrid";
import { orderOptionsEnum } from "../../constants/select-options";
import { getGuests } from "../../services/guests";
import type { CategoryEnum, Guest, RoleEnum } from "../../types/guest";
import styles from "./guests.module.css";
import { useObserver } from "../../hooks/useObserver";
import { useClickOutside } from "../../hooks/useClickOutside";

const setObserverThreshold = () => {
  const width = window.innerWidth;
  if (width > 870) {
    return 0.35
  } else if (width < 871 && width > 670) {
    return 0.2
  } else if (width < 671 && width > 471) { 
    return 0.13
  } else {
    return 0.05
  }
}

const GuestContainer = () => {
  const { showMenu, handleMenu, menuRef} = useClickOutside();
  // const [openFilters, setOpenFilters] = useState(false);
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
  const [page, setPage] = useState(0);
  const { elRef: gridRef, isVisible } = useObserver({ threshold: setObserverThreshold() });

  const handlePage = (value: number) => setPage(value);

  const handleOpenFilters = () => {
    if (showMenu) {
      document.body.classList.remove(styles.no_scroll);
    } else {
      document.body.classList.add(styles.no_scroll);
    }
    handleMenu(!showMenu);
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
    };

    fetchGuests();
  }, []);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth > 871 && observerOptions.threshold !== 0.3) {
  //       setObserverOptions({...observerOptions, threshold: 0.3})
  //     } else if (window.innerWidth < 871 && observerOptions.threshold !== 0.2) {
  //       setObserverOptions({...observerOptions, threshold: 0.2})
  //     }
  //   }

  //   window.addEventListener('resize', handleResize)

  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [])

  const handleSearchChange = (value: string) => {
    setPage(0);
    setSearch(value);
  };

  const handleRoleChange = (value: string) => {
    setPage(0);
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
    setPage(0);
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
    setPage(0);
    setFilters({
      roles: [],
      categories: [],
    });
  };

  const handleOrderChange = (value: orderOptionsEnum) => {
    setPage(0);
    setOrder(value);
  };

  const filteredGuests = useMemo(() => {
    if (filters.roles.length === 0 && filters.categories.length === 0) {
      return guests;
    }
    return guests.filter((guest) => {
      const hasRole =
        filters.roles.length === 0 ||
        filters.roles.some((role) => guest.roles.includes(role as RoleEnum));
      const hasCategory =
        filters.categories.length === 0 ||
        filters.categories.find((category) =>
          guest.categories.includes(category as CategoryEnum)
        );

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
  }, [order, filteredGuests]);

  const searchedGuests = useMemo(() => {
    return orderedGuests.filter((guest) =>
      guest.name.toLowerCase().startsWith(search.toLowerCase())
    );
  }, [orderedGuests, search]);

  return (
    <div className={styles.grid_container} ref={gridRef}>
      {error ? (
        <img src="error.png" alt="error" className={styles.error_image} />
      ) : (
        <>
          <Filters
            categories={filters.categories}
            roles={filters.roles}
            onCategoryChange={handleCategoryChange}
            onRoleChange={handleRoleChange}
            onReset={handleResetFilters}
            openFilters={showMenu}
            handleOpenFilters={handleOpenFilters}
            isVisible={isVisible} 
            menuRef={menuRef as React.RefObject<HTMLDivElement>}
          />
          <GuestGrid
            guests={searchedGuests}
            searchValue={search}
            orderValue={order}
            handleOrderChange={handleOrderChange}
            handleSearchChange={handleSearchChange}
            openFilters={showMenu}
            handleOpenFilters={handleOpenFilters}
            isLoading={loading}
            page={page}
            handlePage={handlePage}
          />
        </>
      )}
    </div>
  );
};

export default GuestContainer;
