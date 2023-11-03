import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FlightBooker from '../../views/FlightBooker.vue'

describe('FlightBooker', () => {
    const wrapper = mount(FlightBooker)

    it('disables the booking button when return date is before departure date', async () => {
        const typeFlight = wrapper.find('#tipoVoo')
        await typeFlight.setValue('volta')

        const departureDateInput = wrapper.find('#dataPartida')
        await departureDateInput.setValue('2023-12-31')

        const returnDateInput = wrapper.find('#dataRetorno')
        await returnDateInput.setValue('2023-12-30')

        const bookButton = wrapper.find('button')
        await expect(bookButton.classes()).toContain('disabled')
    })

    it('enables the booking button when return date is after departure date', async () => {
        const typeFlight = wrapper.find('#tipoVoo')
        await typeFlight.setValue('volta')

        const departureDateInput = wrapper.find('#dataPartida')
        await departureDateInput.setValue('2022-12-30')

        const returnDateInput = wrapper.find('#dataRetorno')
        await returnDateInput.setValue('2022-12-31')

        const bookButton = wrapper.find('button')
        expect(bookButton.attributes('disabled')).toBeUndefined()
    })

    it('sets reservado to true when booking button is clicked', async () => {
        const bookButton = wrapper.find('button')
        await bookButton.trigger('click')

        expect(wrapper.vm.reservado).toBe(true)
    })

    it('shows a success message when booking button is clicked', async () => {
        const bookButton = wrapper.find('button')
        await bookButton.trigger('click')

        expect(wrapper.html()).toContain('Você reservou um voo de')
    })
})