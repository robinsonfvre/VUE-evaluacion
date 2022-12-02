import { createWebHistory, createRouter } from "vue-router";
import Studen from "./components/Studen.vue";
import Teachers from "./components/Teacher.vue";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue"
const routes = [

    {
        path: "/",
        name: Login,
        component: Login
    },

    {
        path: "/home/",
        name: "Home",
        component: Home,

        children: [
            {
                path: "",
                component: Teachers
            },
            {
                path: "studen",
                component: Studen
            },

        ]
    },
]

const _router = createRouter({
    history: createWebHistory(),
    routes,
});
export default _router;