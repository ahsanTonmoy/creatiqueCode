export const menuItems = [
    {
        route: 'home',
        path: '/',
    },
    {
        route: 'about',
        path: '/about',
    },
    {
        route: 'product',
        path: '/product',
    },
    {
        route: 'services',
        path: '/services',
        children: [
            {
                route: 'web design',
                path: '/web-design',
            },
            {
                route: 'web design',
                path: '/web-design',
            },
            {
                route: 'web design',
                path: '/web-design',
            },
            {
                route: 'web design',
                path: '/web-design',
            },
        ]
    },
    {
        route: 'contact',
        path: '/contact',
    },
    {
        route: 'portfolio',
        path: '/portfolio',
    },
]