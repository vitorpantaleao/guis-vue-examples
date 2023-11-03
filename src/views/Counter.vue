<template>
    <div>
        <h1 class="text-3xl font-bold">Counter</h1>
        <p>Um contador simples que permite aumentar e diminuir um número.</p>
        <div class="flex items-center gap-2 mt-8">
            <button @click="decrement" id="decrement" class="bg-red-500 text-white px-4 py-2 rounded">-</button>
            <div class="text-3xl font-bold">{{ count }}</div>
            <button @click="increment" id="increment" class="bg-green-500 text-white px-4 py-2 rounded">+</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
    count.value++
}

function decrement() {
    count.value--
}
</script>