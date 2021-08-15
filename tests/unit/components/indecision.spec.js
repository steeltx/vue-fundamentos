import { shallowMount } from "@vue/test-utils"
import Indecision from "@/components/Indecision.vue"

describe('Indecision component', () => {

    let wrapper
    let clgSpy

    global.fetch = jest.fn()

    beforeEach(() => {
        wrapper = shallowMount(Indecision)
        clgSpy = jest.spyOn(console,'log')
        jest.clearAllMocks()
    })

    test('debe de hacer match con el snapshot', () => {  
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('escribir en el input no debe disparar nada (console.log)', async () => {

        const getAnswerSpy = jest.spyOn(wrapper.vm,'getAnswer')
         
        const input = wrapper.find('input')
        await input.setValue('Hola')

        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).not.toHaveBeenCalled()

    })

    test('escribir el simbolo de ? debe de disparar el getAnswer', async () => {

        const getAnswerSpy = jest.spyOn(wrapper.vm,'getAnswer')
         
        const input = wrapper.find('input')
        await input.setValue('Hola?')
        
        expect(clgSpy).toHaveBeenCalledTimes(2)
        expect(getAnswerSpy).toHaveBeenCalled()

        
    })

    test('pruebas en getAnswer', () => {
        
    })
    
    test('pruebas en getAnswer - Fallo en el API', () => {
        
    })

})