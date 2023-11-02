<template>
    <div>
        <h1 class="text-3xl font-bold">Temperature Converter</h1>
        <div class="flex items-end gap-2 mt-4">
            <div>
                <label class="text-sm block">Graus Celsius</label>
                <input type="number" class="border border-gray-300 rounded px-4 py-2" :value="celsius" @input="setCelsius" />
            </div>
            <!-- <p class="text-xl font-bold">Celsius</p> -->
            <span class="text-3xl font-bold">=</span>
            <div>
                <label class="text-sm block">Graus Fahrenheit</label>
                <input type="number" class="border border-gray-300 rounded px-4 py-2" :value="fahrenheit" @input="setFahrenheit" />
            </div>
            <!-- <p class="text-xl font-bold">Fahrenheit</p> -->
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const celsius = ref(0)
const fahrenheit = ref(32)

const setCelsius = (event) => {
    celsius.value = event.target.value
    fahrenheit.value = (celsius.value * 9 / 5) + 32
}

const setFahrenheit = (event) => {
    fahrenheit.value = event.target.value
    celsius.value = (fahrenheit.value - 32) * 5 / 9
}
</script>