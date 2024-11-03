<template>
    <aside class="cart-container" v-if="showSidebar">
        <div class="cart">
            <h1 class="cart-title spread">
                <span>
                    Cart
                    <i class="icofont-cart-alt icofont-1x"></i>
                </span>
                <button class="cart-close" @click="toggleSideBar()">&times;</button>
            </h1>

            <div class="cart-body">
                <table class="cart-table">
                    <thead>
                        <tr>
                            <th><span class="sr-only">Product Image</span></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                            <th><span class="sr-only">Actions</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in cart_removed_zero" :key="index">
                            <td>{{ index + 1 }}.</td>
                            <td><i class="icofont-carrot icofont-3x"></i></td>
                            <td>{{ item.item }}</td>
                            <td>${{ item.price }}.00</td>
                            <td class="center">{{ item.qty }}</td>
                            <td>${{ (item.price * item.qty).toFixed(2) }}</td>
                            <td class="center">
                                <button class="btn btn-light cart-remove">
                                    &times;
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p class="center"><em>No items in cart</em></p>
                <div class="spread">
                    <span><strong>Total:</strong> ${{ totalPrice.toFixed(2) }}</span>
                    <button class="btn btn-light">Checkout</button>
                </div>
            </div>
        </div>
    </aside>

</template>

<script>
export default {
    props: ["showSidebar", "toggleSideBar", "cart"],
    methods: {
    },
    computed: {
        cart_removed_zero() {
            let result = [];
            this.cart.forEach((element, index) => {
                if (element.qty > 0) 
                    result.push({ item: element.item, price: element.price, qty: element.qty})
            });
            return (result);
        },
        totalPrice() {
            let result = 0;
            this.cart.forEach((element, index) => {
                result += (element.price * element.qty);
            });
            return result;
        }
    }
}
</script>