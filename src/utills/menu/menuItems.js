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
        route: 'products',
        path: '/products',
    },
    
    {
        route: 'services',
        path: '/services',
        submenu:[
            {
                route:'web solution',
                path:'/websolution',
            },
            {
                route:'exmaple 2',
                path:'/websolution',
            },
        ]
    },
    {
        route: 'artical',
        path: '/artical',
    },
    {
        route: 'contact',
        path: '/contact',
    },
    
]