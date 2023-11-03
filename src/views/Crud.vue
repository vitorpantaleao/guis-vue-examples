<template>
    <h1 class="text-3xl font-bold">CRUD</h1>
    <div class="py-4">
        <div class="mt-4">
            <input id="filtro" v-model="filtro" class="w-full p-2 rounded border" placeholder="Filtro">
        </div>

        <select id="nomeSelecionado" size="5" v-model="nomeSelecionado" class="mt-4 w-full p-2 rounded border">
            <option v-for="nome in nomesFiltrados" :key="nome">{{ nome }}</option>
        </select>

        {{ nomeSelecionado }}

        <div class="mt-4">
            <label>Nome: <input id="nome" v-model="nome" class="w-full p-2 rounded border"></label>
            <label>Sobrenome: <input id="sobrenome" v-model="sobrenome" class="w-full p-2 rounded border"></label>
        </div>

        <div class="mt-4 space-x-4">
            <button id="criar" @click="create" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Create </button>
            <button id="atualizar" @click="update" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Update </button>
            <button id="excluir" @click="deleteNome" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"> Delete </button>
        </div>
    </div>
</template>

<script setup>
    import { ref, reactive, computed, watch } from 'vue'
    
    const nomes = reactive(['Vitor Hugo', 'Lucas Montano', 'Filipe Deschamps'])
    const nomeSelecionado = ref('')
    const filtro = ref('')
    const nome = ref('')
    const sobrenome = ref('')
    
    const nomesFiltrados = computed(() =>
        nomes.filter((entrada) => entrada.toLowerCase().startsWith(filtro.value.toLowerCase()))
    )
    
    function create() {
        if (nomeValido()) {
            const fullName = `${nome.value} ${sobrenome.value}`
            if (!nomes.includes(fullName)) {
                nomes.push(fullName)
                nome.value = sobrenome.value = ''
            }
        }
    }
    
    function update() {
        if (nomeValido() && nomeSelecionado.value) {
            const index = nomes.indexOf(nomeSelecionado.value)
            nomes[index] = nomeSelecionado.value = `${nome.value} ${sobrenome.value}`
        }
    }
    
    function deleteNome() {
        if (nomeSelecionado.value) {
            const index = nomes.indexOf(nomeSelecionado.value)
            nomes.splice(index, 1)
            nomeSelecionado.value = nome.value = sobrenome.value = ''
        }
    }
    
    function nomeValido() {
        return nome.value.trim() && sobrenome.value.trim()
    }
</script>
  