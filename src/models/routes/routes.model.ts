export interface IRoute {
  path: string;
  name: string;
}

export interface IRoutes {
  [key: string]: IRoute;
}

export const ROUTES: IRoutes = {
  DASHBOARD: {
    path: "/dashboard",
    name: "Dashboard",
  },
  INVENTORY: {
    path: "/inventory",
    name: "Inventory",
  },
  ORDERS: {
    path: "/orders",
    name: "Orders",
  },
  PROVIDERS: {
    path: "/providers",
    name: "Providers",
}
};
