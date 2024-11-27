import { ROUTES } from "../../constants/routes";
import CrossIcon from "../../icons/CrossIcon";
import MenuIcon from "../../icons/MenuIcon";
import styles from "./menu.module.css";
import { useClickOutside } from "../../hooks/useClickOutside";

const Menu = () => {
  const { showMenu, handleMenu, menuRef } = useClickOutside()

  return (
    <nav className={styles.menu_container} ref={menuRef}>
      <div className={styles.menu_toggle}>
        {showMenu ? <CrossIcon size={36} onClick={() => handleMenu(false)}/> :<MenuIcon size={36} onClick={() => handleMenu(true)} />}
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
