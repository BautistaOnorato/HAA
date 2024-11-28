import { ROUTES } from "../../constants/routes";
import CrossIcon from "../../icons/CrossIcon";
import MenuIcon from "../../icons/MenuIcon";
import styles from "./menu.module.css";
import { useClickOutside } from "../../hooks/useClickOutside";

const Menu = () => {
  const { showMenu, handleMenu, menuRef } = useClickOutside()

  const openCloseMenu = (value: boolean) => {
    if (value) {
      document.body.classList.add(styles.no_scroll);
    } else {
      document.body.classList.remove(styles.no_scroll);
    }
    handleMenu(value);
  }

  return (
    <nav className={styles.menu_container} ref={menuRef}>
      <div className={styles.menu_toggle}>
        {showMenu ? <CrossIcon size={36} onClick={() => openCloseMenu(false)}/> :<MenuIcon size={36} onClick={() => openCloseMenu(true)} />}
      </div>
      <ul className={`${styles.menu} ${showMenu ? styles.active : ""}`}>
        {ROUTES.map((route) => (
          <li className={styles.menu_item} key={route.path}>
            <a href={route.path}>{route.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
