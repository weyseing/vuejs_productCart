<template>
    <div>
        <h1>Home Page</h1>
        <button @click="logMessage">Click Me</button>
        <p>{{ message }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let message = ref('');

const logMessage = () => {
    message.value = 'Button was clicked!';
};
</script>