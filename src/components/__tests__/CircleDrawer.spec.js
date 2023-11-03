import { describe, it, expect } from "vitest"
import CircleDrawer from "../../views/CircleDrawer.vue"
import { mount } from "@vue/test-utils"

describe('CircleDrawer', () => {
    const wrapper = mount(CircleDrawer)

    it('starts with no selected circle', () => {
        expect(wrapper.vm.circuloSelecionado).toBeUndefined()
    })

    it('starts with ajustando set to false', () => {
        expect(wrapper.vm.ajustando).toBe(false)
    })

    it('adds a circle when adicionarCirculo is called', async () => {
        await wrapper.vm.adicionarCirculo({ clientX: 100, clientY: 100 })

        expect(wrapper.vm.circulos.length).toBe(1)
        expect(wrapper.vm.circulos[0]).toEqual({ cx: 100, cy: 100, r: 50 })
    })

    it('undo removes the last circle', async () => {
        await wrapper.vm.adicionarCirculo({ clientX: 100, clientY: 100 })
        await wrapper.vm.adicionarCirculo({ clientX: 200, clientY: 200 })

        await wrapper.vm.desfazer()

        expect(wrapper.vm.circulos.length).toBe(1)
        expect(wrapper.vm.circulos[0]).toEqual({ cx: 100, cy: 100, r: 50 })
    })

    it('redo adds the last circle', async () => {
        await wrapper.vm.adicionarCirculo({ clientX: 100, clientY: 100 })
        await wrapper.vm.adicionarCirculo({ clientX: 200, clientY: 200 })

        await wrapper.vm.desfazer()
        await wrapper.vm.refazer()

        expect(wrapper.vm.circulos.length).toBe(2)
        expect(wrapper.vm.circulos[1]).toEqual({ cx: 200, cy: 200, r: 50 })
    })

    it('edits the radius of the selected circle when the editRaio function is called', async () => {
        await wrapper.vm.adicionarCirculo({ clientX: 100, clientY: 100 })
        await wrapper.vm.ajustarRaio(50)

        expect(wrapper.vm.circulos[0]).toEqual({ cx: 100, cy: 100, r: 50 })
    })
})