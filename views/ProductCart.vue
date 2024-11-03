<template>
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

    <SideMenu/>
</template>

<script>
import SideMenu from '../src/components/SideMenu.vue';

export default {
    data() {
        return {
            inventory: {
                carrots: 100,
                pineapples: 200,
                cherries: 300
            },
            cart: {
                carrots: 0,
                pineapples: 0,
                cherries: 0
            },
        }
    },

    components: {
        SideMenu,
    },

    methods: {
        addToCart(type, quantity) {
            this.cart[type] += this.inventory[type];
            console.log(this.cart);
        }
    },
}
</script>