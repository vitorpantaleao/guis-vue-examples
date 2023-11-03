import { describe, it, expect } from "vitest"
import Cells from "../../views/Cells.vue"
import { mount } from "@vue/test-utils"

describe('Cells', () => {
    const wrapper = mount(Cells)

    it('renders the initial table correctly', () => {
        expect(wrapper.html()).toContain('<table class="w-full border-collapse border border-gray-300">')
    })

    it('adds a new column when the "Adicionar nova coluna" button is clicked', async () => {
        const addButton = wrapper.findAll('button')[1]

        expect(wrapper.vm.colunasTabela.length).toBe(5)
        await addButton.trigger('click')

        expect(wrapper.vm.colunasTabela.length).toBe(6)
    })

    it('adds a new row when the "Adicionar nova linha" button is clicked', async () => {
        const addButton = wrapper.findAll('button')[0]

        expect(wrapper.vm.linhasTabela.length).toBe(10)
        await addButton.trigger('click')

        expect(wrapper.vm.linhasTabela.length).toBe(11)
    })

    it('edits cell values when user inputs text', async () => {
        const firstCellInput = wrapper.find('table tbody tr:nth-child(1) td:nth-child(2) input')
        
        await firstCellInput.setValue('Test Value')
        await firstCellInput.trigger('input')

        expect(firstCellInput.element.value).toBe('Test Value')
    })
})