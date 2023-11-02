<template>
    <div>
        <h1 class="text-3xl font-bold">Circle Drawer</h1>
        <p class="text-[#bbb]">Clique na tela para adicionar um círculo. Clique em um círculo para selecioná-lo. Clique com o botão direito em um círculo para ajustar seu raio.</p>
        <svg @click="adicionarCirculo" class="w-full h-[80vh]" ref="svgContainer">
            <circle v-for="circulo in circulos" :cx="circulo.cx" :cy="circulo.cy" :r="circulo.r"
                :fill="circulo === circuloSelecionado ? '#ccc' : '#fff'" @click="adicionarCirculo(circulo)"
                @contextmenu.prevent="ajustarRaio(circulo)" class="stroke-black">
            </circle>
        </svg>

        <div class="controls fixed bottom-4 left-0 right-0 text-center">
            <button @click="desfazer" :disabled="indice <= 0" class="mr-2 bg-blue-500 hover:bg-secondary-color text-white font-bold py-2 px-4 rounded cursor-pointer">Desfazer</button>
            <button @click="refazer" :disabled="indice >= historico.length - 1" class="bg-primary-color hover-bg-secondary-color text-white font-bold py-2 px-4 rounded cursor-pointer">Refazer</button>
        </div>

        <div v-if="ajustando" @click.stop
            class="dialog w-[400px] h-[100px] fixed top-2/4 left-2/4 flex flex-col items-center justify-center inset-0 bg-white transform -translate-x-1/2 -translate-y-1/2">
            <p>Ajuste o raio do círculo na posição ({{ circuloSelecionado.cx }}, {{ circuloSelecionado.cy }})</p>
            <input type="range" v-model="circuloSelecionado.r" min="1" max="400" class="block w-[200px] px-8" />
        </div>
    </div>
</template>
  
<script setup>
import { ref, shallowReactive, onMounted } from 'vue'

const svgContainer = ref(null);
const historico = shallowReactive([[]])
const indice = ref(0)
const circulos = ref([])
const circuloSelecionado = ref()
const ajustando = ref(false)

function adicionarCirculo(event) {
    if (ajustando.value) {
        ajustando.value = false;
        circuloSelecionado.value = null;
        adicionarAoHistorico();
        return;
    }

    if (svgContainer.value) {
        const svgRect = svgContainer.value.getBoundingClientRect();
        const x = event.clientX - svgRect.left;
        const y = event.clientY - svgRect.top;

        if (!isNaN(x) && !isNaN(y)) {
            circuloSelecionado.value = [...circulos.value].reverse().find(({ cx, cy, r }) => {
                const dx = cx - x;
                const dy = cy - y;
                return Math.sqrt(dx * dx + dy * dy) <= r;
            });

            if (!circuloSelecionado.value) {
                circulos.value.push({ cx: x, cy: y, r: 50 });
                adicionarAoHistorico();
            }
        }
    }
}


function ajustarRaio(circulo) {
    circuloSelecionado.value = circulo
    ajustando.value = true
}

function adicionarAoHistorico() {
    historico.length = ++indice.value
    historico.push(clonarCirculos(circulos.value))
    console.log(clonarCirculos(historico))
}

function desfazer() {
    circulos.value = clonarCirculos(historico[--indice.value])
}

function refazer() {
    circulos.value = clonarCirculos(historico[++indice.value])
}

function clonarCirculos(circulos) {
    return circulos.map((c) => ({
        ...c
    }))
}

onMounted(() => {
    const svg = svgContainer.value;
    svg.addEventListener('contextmenu', (event) => {
        event.preventDefault();
    });
});
</script>
