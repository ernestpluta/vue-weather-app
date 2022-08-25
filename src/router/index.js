import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Weather from '../views/Weather.vue'
const routes = [
    { path: '/', component: Home, name: "Home"},
    { path: '/weather', component: Weather, name: "Weather"},
]

const router = createRouter({
    history: createWebHistory(), routes
})
export default router