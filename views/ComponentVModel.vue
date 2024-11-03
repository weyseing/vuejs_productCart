<template>
    <div>
        <h1>Component: v-model</h1>
        <p>Content A: {{ contentA }}</p>

        <CardComp 
            prop-title="Title 1" 
            prop-desc="Description..." 
            v-model:contentA="contentA"
            v-model:contentB="contentB" 
        />
        <button @click="setContentA">SET CONTENT A</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import CardComp from '../src/components/CardComp.vue';

let contentA = ref("Parent - content A")
let contentB = ref("Parent - content B")

const setContentA = () => {
    contentA.value = "Parent - " + new Date().toLocaleString();
}

</script>


<style scoped>
.my-component {
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
}

button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}

button:hover {
    background-color: #004a99;
}
</style>