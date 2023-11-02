<template>
    <h1 class="text-3xl font-bold">Cells</h1>
    <div class="bg-white rounded shadow p-4 mt-8">
        <table class="w-full border-collapse border border-gray-300">
            <thead>
                <tr>
                    <th class="py-2 px-4 font-semibold border border-gray-300 bg-slate-100"></th>
                    <th v-for="(col, index) in columnData" :key="index" class="py-2 px-4 font-semibold border border-gray-300 bg-slate-100">{{ col }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in rowData" :key="rowIndex">
                    <td class="py-2 px-4 border border-gray-300 bg-slate-100">{{ rowIndex + 1 }}</td>
                    <td v-for="(cell, colIndex) in row" :key="colIndex" class="py-2 px-4 border border-gray-300">
                        <input :value="cell" @input="inputHandler(rowIndex, colIndex, $event)" class="w-full outline-none" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <button class="mt-4 bg-primary-color text-white font-semibold py-2 px-4 rounded shadow mr-5" @click="addRow">Adicionar nova linha</button>
    <button class="mt-4 bg-primary-color text-white font-semibold py-2 px-4 rounded shadow" @click="addColumn">Adicionar nova coluna</button>
</template>
  
<script setup>
import { ref } from "vue";
const columns = 5;
const rows = 10;
const cols = 5;

const columnData = ref(Array.from({ length: columns }, (_, index) => String.fromCharCode(65 + index)));
const rowData = ref(Array.from({ length: rows }, () => Array(cols).fill("")));

const inputHandler = (rowIndex, colIndex, event) => {
    rowData.value[rowIndex][colIndex] = event.target.value;
};

const addColumn = () => {
    columnData.value.push(String.fromCharCode(65 + columnData.value.length));
    rowData.value.forEach((row) => {
        row.push("");
    });
};

const addRow = () => {
    rowData.value.push(Array(cols).fill(""));
    columnData.value.forEach((col, index) => {
        rowData.value[rowData.value.length - 1][index] = "";
    });
};
</script>