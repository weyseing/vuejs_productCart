<template>
    <div class="my-component">
        <strong>Title: {{ propTitle }}</strong><br>
        <p>Description: {{ propDesc }}</p>

        <p>{{ props.contentA }}</p>
        <p>{{ props.contentB }}</p>

        <input v-model="childMsg" />
    </div>
</template>


<script setup>
import { ref, computed } from 'vue'
import { defineProps } from 'vue';

const emit = defineEmits(['update:contentA']);

// props
const props = defineProps({
    propTitle: {
        type: String,
        required: true
    },
    propDesc: {
        type: String,
        required: true
    },
    contentA: {
        type: String
    },
    contentB: {
        type: String
    }
});

// getter & setter
let childMsg = computed({
    get() {
        return props.contentA;
    },
    set(newValue) {
        emit('update:contentA', newValue);
    }
})

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