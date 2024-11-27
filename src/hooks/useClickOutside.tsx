import { useEffect, useRef, useState } from "react";

export const useClickOutside = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<undefined | HTMLElement>();

  useEffect(() => {
    const handler = (e: any) => {
      if (!menuRef.current) return
      if (menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return {
    menuRef,
    showMenu,
    setShowMenu,
  };
};
