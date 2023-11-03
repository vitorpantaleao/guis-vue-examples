<template>
    <h1 class="text-3xl font-bold">Cells</h1>
    <p> Uma tela similar a uma planilha de Excel, onde é possível adicionar e remover linhas e colunas. </p>
    <div class="bg-white rounded shadow p-4 mt-8">
        <table class="w-full border-collapse border border-gray-300">
            <thead>
                <tr>
                    <th class="py-2 px-4 font-semibold border border-gray-300 bg-slate-100"></th>
                    <th v-for="(col, index) in colunasTabela" :key="index" class="py-2 px-4 font-semibold border border-gray-300 bg-slate-100">{{ col }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(linha, linhaIndex) in linhasTabela" :key="linhaIndex">
                    <td class="py-2 px-4 border border-gray-300 bg-slate-100 text-center">{{ linhaIndex + 1 }}</td>
                    <td v-for="(celula, colunaIndex) in linha" :key="colunaIndex" class="py-2 px-4 border border-gray-300">
                        <input :value="celula" @input="inputCelulas(linhaIndex, colunaIndex, $event)" class="w-full outline-none" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <button class="mt-4 bg-primary-color text-white font-semibold py-2 px-4 rounded shadow mr-5" @click="adicionaLinha">Adicionar nova linha</button>
    <button class="mt-4 bg-primary-color text-white font-semibold py-2 px-4 rounded shadow" @click="adicionaColuna">Adicionar nova coluna</button>
</template>
  
<script setup>
import { ref } from "vue";
const colunas = 5;
const linhas = 10;
const celulas = 5;

const colunasTabela = ref(Array.from({ length: colunas }, (_, index) => String.fromCharCode(65 + index)));
const linhasTabela = ref(Array.from({ length: linhas }, () => Array(celulas).fill("")));

const inputCelulas = (rowIndex, colIndex, event) => {
    linhasTabela.value[rowIndex][colIndex] = event.target.value;
};

const adicionaColuna = () => {
    colunasTabela.value.push(String.fromCharCode(65 + colunasTabela.value.length));
    linhasTabela.value.forEach((row) => {
        row.push("");
    });
};

const adicionaLinha = () => {
    linhasTabela.value.push(Array(celulas).fill(""));
    colunasTabela.value.forEach((col, index) => {
        linhasTabela.value[linhasTabela.value.length - 1][index] = "";
    });
};
</script>