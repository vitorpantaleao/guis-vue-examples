<template>
    <div class="grid grid-cols-[15rem,1fr]">
        <MenuLateral />
        <main class="max-w-full flex-1 bg-[#F5F5F5]">
            <AppBar />
            <div class="p-8">
                <p>conteúdo</p>
                <router-view />
            </div>
        </main>
    </div>
</template>

<script setup>
import AppBar from '../components/Navegacao/AppBar.vue';
import MenuLateral from '../components/Navegacao/MenuLateral.vue'
</script>