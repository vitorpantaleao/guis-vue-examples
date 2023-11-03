import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TemperatureConverter from '../../views/TemperatureConverter.vue'

describe('TemperatureConverter', () => {
    const wrapper = mount(TemperatureConverter)

    it('converts celsius to fahrenheit correctly', async () => {
        const celsiusInput = wrapper.find('#celsius')
        await celsiusInput.setValue(0)

        const fahrenheitInput = wrapper.find('#fahrenheit')
        expect(fahrenheitInput.element.value).toBe('32')
    })

    it('converts fahrenheit to celsius correctly', async () => {
        const fahrenheitInput = wrapper.find('#fahrenheit')
        await fahrenheitInput.setValue(32)

        const celsiusInput = wrapper.find('#celsius')
        expect(celsiusInput.element.value).toBe('0')
    })

    it('resets values when reset button is clicked', async () => {
        const celsiusInput = wrapper.find('#celsius')
        await celsiusInput.setValue(100)

        const fahrenheitInput = wrapper.find('#fahrenheit')
        await fahrenheitInput.setValue(212)

        const resetButton = wrapper.find('#reset')
        await resetButton.trigger('click')

        expect(celsiusInput.element.value).toBe('0')
        expect(fahrenheitInput.element.value).toBe('32')
    })
})