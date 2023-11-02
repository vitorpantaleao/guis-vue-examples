<template>
    <div class="h-screen max-h-screen bg-secondary-color text-white text-base top-0 sticky z-10">
        <div class="flex items-center justify-center text-3xl font-black bg-primary-color h-20"> 
            <RouterLink to="/">MENU</RouterLink> 
        </div>
        <div class="flex flex-col gap-2 mt-4 px-3 tracking-tight aside-menu">
            <RouterLink to="/" class="primary flex items-center justify-between gap-2 p-2 hover:bg-[#666666] rounded">
                <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"/></svg>
                    <span>Home</span>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>

</script>