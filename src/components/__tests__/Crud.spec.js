import { describe, it, expect } from "vitest"
import Crud from "../../views/Crud.vue"
import { mount } from "@vue/test-utils"

describe('Crud', () => {
    const wrapper = mount(Crud)

    it('starts with predefined names', () => {
        expect(wrapper.vm.nomes).toEqual(['Vitor Hugo', 'Lucas Montano', 'Filipe Deschamps'])
    })

    it('filters names based on input', async () => {
        const filterInput = wrapper.find('#filtro')
        await filterInput.setValue('Vitor')

        expect(wrapper.vm.nomesFiltrados).toEqual(['Vitor Hugo'])
    })

    it('adds a new name when create is called', async () => {
        const inputName = wrapper.find('#nome')
        await inputName.setValue('João')

        const inputSobrenome = wrapper.find('#sobrenome')
        await inputSobrenome.setValue('Silva')

        await wrapper.vm.create()
    })

    it('does not add a new name when create is called with an existing name', async () => {
        const inputName = wrapper.find('#nome')
        await inputName.setValue('João')

        const inputSobrenome = wrapper.find('#sobrenome')
        await inputSobrenome.setValue('Silva')

        await wrapper.vm.create()
    })

    it('updates a name when update is called', async () => {
        const inputName = wrapper.find('#nome')
        await inputName.setValue('João')

        const inputSobrenome = wrapper.find('#sobrenome')
        await inputSobrenome.setValue('Salvador')

        await wrapper.vm.update()
    })

    it('removes a name when remove is called', async () => {
        const select = wrapper.find('#nomeSelecionado')
        await select.setValue('Lucas Montano')

        await wrapper.vm.deleteNome()
    })
})