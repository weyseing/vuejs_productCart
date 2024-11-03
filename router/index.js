import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '/app/views/HomePage.vue';
import AboutPage from '/app/views/AboutPage.vue';
import ComponentVModel from '/app/views/ComponentVModel.vue';
import ForLoop from '/app/views/ForLoop.vue';
import LifecyleHook from '/app/views/LifecyleHook.vue';
import ProductCart from '/app/views/ProductCart.vue';

const routes = [
    { path: '/home', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/about/:id', component: AboutPage },
    { path: '/component_vmodel', component: ComponentVModel },
    { path: '/for_loop', component: ForLoop },
    { path: '/lifecycle_hook', component: LifecyleHook },
    { path: '/productcart', component: ProductCart }
];

const router = createRouter({
history: createWebHistory(),
    routes
});

export default router;