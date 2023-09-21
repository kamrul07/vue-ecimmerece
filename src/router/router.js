import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import products from "../components/products.vue";
import category from "../components/category.vue";
import product from "../components/product.vue";
const routes = [
  { path: "/", component: products, name: "Home" },
  { path: "/products", component: products, name: "products" },
  { path: "/category/:slug", component: category, name: "category" },
  { path: "/product/:id", component: product, name: "product" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
