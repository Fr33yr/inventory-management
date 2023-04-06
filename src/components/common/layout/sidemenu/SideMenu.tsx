import { MenuLink } from "../../../index";
import { IRoute, ROUTES } from "../../../../models/index";
import styles from "./SideMenu.module.css";

function SideMenu() {
  const routes: IRoute[] = Object.keys(ROUTES).map((key: any) => ({
    path: ROUTES[key].path,
    name: ROUTES[key].name,
  }));

  return (
    <div className={styles.sidemenu}>
      <ul>
        {routes.map((route) => (
          <MenuLink path={route.path} name={route.name} />
        ))}
      </ul>
    </div>
  );
}

export default SideMenu;
