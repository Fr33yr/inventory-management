import { MenuLink } from "../../../index";
import { IRoute, ROUTES } from "../../../../models/index";

function SideMenu() {
  
  const routes: IRoute[] = Object.keys(ROUTES).map((key: any) => ({
    path: ROUTES[key].path,
    name: ROUTES[key].name,
  }));

  return (
    <div className="sidemenu">
      {routes.map((route) => (
        <MenuLink path={route.path} name={route.name} />
      ))}
    </div>
  );
}

export default SideMenu;
