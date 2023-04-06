export const ROUTES = {
    DASHBOARD: {
        path: '/dashboard',
        name: "Dashboard"
    },
    INVENTORY: {
        path: '/inventory',
        name: "Inventory"
    },
    ORDERS: {
        path: '/orders',
        name: "Orders"
    },
    CUSTOMERS: {
        path: '/customers',
        name: "Customers"
    },
}

export interface IROUTES {
    path: string,
    name: string
}