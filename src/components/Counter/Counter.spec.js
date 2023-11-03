import { describe, it, expect } from 'vitest'
import Counter from './Counter.vue'
import { mount } from '@vue/test-utils';

describe('Counter', () => {
    const wrapper = mount(Counter)
    it('should render correctly', () => {
        expect(wrapper.html()).toContain('<div class="text-3xl font-bold">0</div>')
    })

    it('should increment the counter when the button is clicked', async () => {
        await wrapper.find('#increment').trigger('click')
        expect(wrapper.html()).toContain('<div class="text-3xl font-bold">1</div>')
    })

    it('should decrement the counter when the button is clicked', async () => {
        await wrapper.find('#decrement').trigger('click')
        expect(wrapper.html()).toContain('<div class="text-3xl font-bold">0</div>')
    })
})
