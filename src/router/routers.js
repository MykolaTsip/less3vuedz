import HelloWorld from "../components/HelloWorld";
import Users from "../components/users/Users";
import BadPath from "../components/BadPath";


export const routes = [
    {
        path: '/hello',
        component: HelloWorld,
        name: 'hi'
    },
    {
        path: '/users',
        component: Users,
        name: 'users'
    },
    {
        path: '*',
        component: BadPath
    }
]
