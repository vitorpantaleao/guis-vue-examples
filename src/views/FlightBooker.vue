<template>
    <div>
        <h1 class="text-3xl font-bold">Flight Booker</h1>
        <p> Um simulador de reserva de voos, onde é possível escolher a data de ida e volta. </p>
        <div class="flex items-center gap-5 mt-8">
            <div>
                <label class="text-base block">Tipo de vôo</label>
                <select id="tipoVoo" v-model="tipoVoo" class="w-44 h-10 flex text-xl px-2">
                    <option value="ida" class="text-xl">Vôo de ida</option>
                    <option value="volta">Vôo de volta</option>
                </select>
            </div>
            <div>
                <label class="text-base block">Data de partida</label>
                <input id="dataPartida" type="date" v-model="dataPartida" class="w-44 h-10 flex text-xl px-2">
            </div>
            <div>
                <label class="text-base block">Data de retorno</label>
                <input id="dataRetorno" type="date" v-model="dataRetorno" :disabled="!isVolta" class="w-44 h-10 flex text-xl px-2">
            </div>
        </div>
        <div v-if="!podeReservar" class="text-red-500 text-sm mt-2">A data de retorno deve ser posterior à data de partida.</div>

        <div v-if="reservado" class="max-w-fit pr-16 mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold block">Agendamento realizado!</strong>
            <span class="block sm:inline">Você reservou um voo de {{ isVolta ? 'ida e volta' : 'ida' }} saindo em {{ dataPartida }} {{ isVolta ? 'e retornando em ' + dataRetorno : '' }}.</span>
        </div>

        <button :disabled="!podeReservar" @click="reservar" :class="['mt-4 bg-primary-color hover:bg-secondary-color text-white font-bold py-2 px-4 rounded', {'disabled bg-primary-color/40 hover:bg-primary-color/40': !podeReservar}]">Reservar</button>

    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const tipoVoo = ref('ida')
const dataPartida = ref(dataParaString(new Date()))
const dataRetorno = ref(dataPartida.value)
const reservado = ref(false)

const isVolta = computed(() => tipoVoo.value === 'volta')

const podeReservar = computed(() =>
    !isVolta.value || stringParaData(dataRetorno.value) > stringParaData(dataPartida.value)
)

function reservar() {
    reservado.value = true

    setTimeout(() => {
        reservado.value = false
    }, 5000)
}

function stringParaData(str) {
    const [a, m, d] = str.split('-')
    return new Date(+a, m - 1, +d)
}

function dataParaString(data) {
    return (
        data.getFullYear() + '-' + pad(data.getMonth() + 1) + '-' + pad(data.getDate())
    )
}

function pad(n, s = String(n)) {
    return s.length < 2 ? `0${s}` : s
}
</script>