<template>
    <div class="h-screen max-h-screen bg-secondary-color text-white text-base top-0 sticky z-10">
        <div class="flex items-center justify-center text-3xl font-black bg-primary-color h-20"> 
            <RouterLink to="/">MENU</RouterLink> 
        </div>
        <div class="flex flex-col gap-2 mt-4 px-3 tracking-tight aside-menu">
            <RouterLink to="/counter" class="primary flex items-center justify-between gap-2 p-2 hover:bg-[#666666] rounded">
                <div class="flex items-center gap-2">
                    <CounterIcon />
                    <span>Counter</span>
                </div>
            </RouterLink>
            <RouterLink to="/temperature-converter" class="primary flex items-center justify-between gap-2 p-2 hover:bg-[#666666] rounded">
                <div class="flex items-center gap-2">
                    <ConverterIcon />
                    <span>Temperature Converter</span>
                </div>
            </RouterLink>
            <RouterLink :to="{ name: 'FlightBooker' }" class="primary flex items-center justify-between gap-2 p-2 hover:bg-[#666666] rounded">
                <div class="flex items-center gap-2">
                    <FlightBookerIcon />
                    <span>Flight Booker</span>
                </div>
            </RouterLink>
            <RouterLink :to="{ name: 'Timer' }" class="primary flex items-center justify-between gap-2 p-2 hover:bg-[#666666] rounded">
                <div class="flex items-center gap-2">
                    <TimerIcon />
                    <span>Timer</span>
                </div>
            </RouterLink>
            <RouterLink :to="{ name: 'Crud' }" class="primary flex items-center justify-between gap-2 p-2 hover:bg-[#666666] rounded">
                <div class="flex items-center gap-2">
                    <CrudIcon />
                    <span>CRUD</span>
                </div>
            </RouterLink>
            <RouterLink :to="{ name: 'CircleDrawer' }" class="primary flex items-center justify-between gap-2 p-2 hover:bg-[#666666] rounded">
                <div class="flex items-center gap-2">
                    <CircleDrawerIcon />
                    <span>Circle Drawer</span>
                </div>
            </RouterLink>
            <RouterLink to="/cells" class="primary flex items-center justify-between gap-2 p-2 hover:bg-[#666666] rounded">
                <div class="flex items-center gap-2">
                    <CellsIcon />
                    <span>Cells</span>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import CounterIcon from '../Icons/CounterIcon.vue'
import ConverterIcon from '../Icons/ConverterIcon.vue'
import FlightBookerIcon from '../Icons/FlightBookerIcon.vue'
import TimerIcon from '../Icons/TimerIcon.vue'
import CrudIcon from '../Icons/CrudIcon.vue'
import CircleDrawerIcon from '../Icons/CircleDrawerIcon.vue'
import CellsIcon from '../Icons/CellsIcon.vue'
</script>

<style scoped>
    .router-link-exact-active.primary {
        background-color: #666666;
    }
</style>