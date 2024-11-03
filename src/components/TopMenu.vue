<template>
    <header class="top-bar spread">
        <nav class="top-bar-nav">
            <a href="#" class="top-bar-link">
                <i class="icofont-spoon-and-fork"></i>
                <span>Home</span>
            </a>
            <a href="views/products.html" class="top-bar-link">
                <span>Products</span>
            </a>
            <a href="views/past-orders.html" class="top-bar-link">
                <span>Past Orders</span>
            </a>
        </nav>
        <a href="#" class="top-bar-cart-link">
            <i class="icofont-cart-alt icofont-1x"></i>
            <span @click="toggleSideBar()">Cart (0)</span>
        </a>
    </header>
</template>


<script>
export default {
    props: ["showSidebar", "toggleSideBar"],
}
</script>