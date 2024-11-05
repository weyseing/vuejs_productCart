<template>
    <div class="my-component">
        <h1>For Loop</h1>

        <!-- for loop -->
        <div v-for="(input, index) in inputs" :key="index">
            <label :for="input.label">{{ input.label }}</label>
            <input :id="input.label" :type="input.type"/>
        </div>
    </div>
</template>


<script setup>
import {ref} from 'vue';

const inputs = ref(
    [
        {label: "email", type: "email"},
        {label: "user", type: "text"},
        {label: "password", type: "password"}
    ]
);

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


