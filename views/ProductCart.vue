<template>
    <TopMenu v-model:showSidebar="showSidebar" :toggleSideBar="toggleSideBar"/>

    <div class="splash-container">
        <div class="splash">
            <h1>Splendid Food</h1>
        </div>
    </div>

    <main class="wrapper">
        <h2>Recommended</h2>

        <div class="recommended">
            <div class="card">
                <div class="card-title">Carrots</div>
                <div class="card-body">
                    <i class="icofont-10x icofont-carrot"></i>
                    <form>
                        <div class="row">
                            <div class="cell">
                                <label>Type:</label>
                            </div>
                            <div class="cell">
                                <em>Vegetable</em>
                            </div>
                        </div>
                        <div class="row">
                            <div class="cell">
                                <label>Price:</label>
                            </div>
                            <div class="cell">$4.82</div>
                        </div>
                        <div class="row">
                            <div class="cell">
                                <label>Quantity:</label>
                            </div>
                            <div class="cell">
                                <input type="number" v-model.number="inventory.carrots" />
                            </div>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <button @click="addToCart('carrots')" class="btn btn-light">
                        Add to cart
                    </button>
                </div>
            </div>

            <div class="card">
                <div class="card-title">Pineapples</div>
                <div class="card-body">
                    <i class="icofont-10x icofont-pineapple"></i>
                    <form>
                        <div class="row">
                            <div class="cell">
                                <label>Type:</label>
                            </div>
                            <div class="cell">
                                <em>Fruit</em>
                            </div>
                        </div>
                        <div class="row">
                            <div class="cell">
                                <label>Price:</label>
                            </div>
                            <div class="cell">$1.62</div>
                        </div>
                        <div class="row">
                            <div class="cell">
                                <label>Quantity:</label>
                            </div>
                            <div class="cell">
                                <input type="number" v-model.number="inventory.pineapples" />
                            </div>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <button @click="addToCart('pineapples')" class="btn btn-light">Add to cart</button>
                </div>
            </div>

            <div class="card">
                <div class="card-title">Cherries</div>
                <div class="card-body">
                    <i class="icofont-10x icofont-cherry"></i>
                    <form>
                        <div class="row">
                            <div class="cell">
                                <label>Type:</label>
                            </div>
                            <div class="cell">
                                <em>Fruit</em>
                            </div>
                        </div>
                        <div class="row">
                            <div class="cell">
                                <label>Price:</label>
                            </div>
                            <div class="cell">$1.04</div>
                        </div>
                        <div class="row">
                            <div class="cell">
                                <label>Quantity:</label>
                            </div>
                            <div class="cell">
                                <input type="number" v-model.number="inventory.cherries" />
                            </div>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <button @click="addToCart('cherries')" class="btn btn-light">Add to cart</button>
                </div>
            </div>
        </div>
    </main>

    <SideMenu v-model:showSidebar="showSidebar"  :toggleSideBar="toggleSideBar" :cart="cart"/>

    <footer></footer>
</template>

<script>
import SideMenu from '../src/components/SideMenu.vue';
import TopMenu from '../src/components/TopMenu.vue';

export default {
    data() {
        return {
            inventory: {
                carrots: 1,
                pineapples: 1,
                cherries: 1
            },
            cart: [
                {item: 'carrots', price: 1, qty: 0},
                {item: 'pineapples', price: 2, qty: 0},
                {item: 'cherries', price: 3, qty: 0},
            ],
            showSidebar: false,
        }
    },

    components: {
        SideMenu,
        TopMenu,
    },

    methods: {
        addToCart(type) {
            const cartItem = this.cart.find(cartItem => cartItem.item === type);
            cartItem.qty += this.inventory[type];
        },
        
        toggleSideBar() {
            this.showSidebar = !this.showSidebar;
        }
    },
}
</script>