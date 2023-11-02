<template>
    <div class="grid grid-cols-[15rem,1fr]">
        <h2>Menu Lateral</h2>
        <main class="max-w-full flex-1 bg-[#F5F5F5]">
            <p>Topo</p>
            <div class="p-8">
                <p>conteúdo</p>
                <router-view />
            </div>
        </main>
    </div>
</template>

<script setup>

</script>