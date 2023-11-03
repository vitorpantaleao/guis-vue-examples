<template>
    <h1 class="text-3xl font-bold">Timer</h1>
    <p>Um cronômetro simples que permite escolher a duração e dar um reset na contagem.</p>
    <div class="bg-gray-200 p-4 rounded-lg max-w-md mt-8">
        <div>
            <label class="block text-base">Tempo decorrido:</label>
            <progress id="progresso" class="w-full" :value="progresso" max="1"></progress>
            <div class="text-center">{{ (tempoDecorrido / 1000).toFixed(1) }} segundos</div>
        </div>
        <div class="mt-4">
            <label class="block">Escolha a duração:</label>
            <input id="duracaoContagem" type="range" v-model="duracaoContagem" min="1" max="30000" class="w-full">
            <div class="text-center">{{ (duracaoContagem / 1000).toFixed(1) }} segundos</div>
        </div>
        <div class="mt-4">
            <button @click="reset" class="bg-primary-color hover:bg-secondary-color text-white font-bold py-2 px-4 rounded">
                Reset
            </button>
        </div>
    </div>
</template>
  
<script setup>
    import { ref, computed } from "vue";
    
    const duracaoContagem = ref(15 * 1000);
    const tempoDecorrido = ref(0);
    
    let ultimaAtualizacao;
    
    const atualizaTempoDecorrido = () => {
        tempoDecorrido.value = performance.now() - ultimaAtualizacao;
        if (tempoDecorrido.value >= duracaoContagem.value) return;
        else requestAnimationFrame(atualizaTempoDecorrido);
    };
    
    const reset = () => {
        tempoDecorrido.value = 0;
        ultimaAtualizacao = performance.now();
        atualizaTempoDecorrido();
    };
    
    const progresso = computed(() =>
        Math.min(tempoDecorrido.value / duracaoContagem.value, 1)
    );
    
    reset();
</script>