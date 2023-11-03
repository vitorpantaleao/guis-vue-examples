<template>
    <div>
        <h1 class="text-3xl font-bold">Temperature Converter</h1>
        <p> Um conversor de temperatura que converte entre Celsius e Fahrenheit. </p>
        <div class="flex items-center gap-2 mt-8">
            <div>
                <label class="text-base block text-center">Celsius</label>
                <input id="celsius" type="number" class="border border-gray-300 rounded p-2 w-52 h-20 flex items-center text-center text-3xl" :value="celsius" @input="setCelsius" />
            </div>
            <span class="text-3xl font-bold block pt-4">=</span>
            <div>
                <label class="text-base block text-center">Fahrenheit</label>
                <input id="fahrenheit" type="number" class="border border-gray-300 rounded p-2 w-52 h-20 flex items-center text-center text-3xl" :value="fahrenheit" @input="setFahrenheit" />
            </div>
        </div>
        <button id="reset" class="mt-4 bg-primary-color hover:bg-secondary-color text-white font-bold py-2 px-4 rounded" @click="celsius = 0; fahrenheit = 32">Reset</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

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