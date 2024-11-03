<!-- 
-- reference: https://vuejs.org/guide/essentials/lifecycle
-->

<template>
    <h1>Lifecycle Hook</h1>
    <p>{{ message }}</p>
</template>

<script setup>
import { ref, onMounted } from 'vue';

let message = ref("ORIGINAL TEXT");

// on mounted
onMounted(() => {
    console.log('Component has been mounted!');
    message.value = "MOUNTED TEXT";
});

</script>