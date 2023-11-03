import { describe, it, expect } from 'vitest'
import Timer from '../../views/Timer.vue'
import { mount } from '@vue/test-utils'

describe('Timer', () => {
    const wrapper = mount(Timer)

    it('should render correct contents', () => {
        expect(wrapper.html()).toContain('<label class="block text-base">Tempo decorrido:</label>')
    })

    it('updates progress over time', async () => {
        const vm = wrapper.vm

        // Simula a passagem de 5 segundos
        await new Promise((resolve) => setTimeout(resolve, 5000))

        // Como a duração é de 15 segundos, após 5 segundos o progresso deve ser 1/3
        expect(vm.progresso).toBeCloseTo(1 / 3, 2)
    })
})
