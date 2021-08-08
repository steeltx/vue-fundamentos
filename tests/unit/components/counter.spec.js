import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Counter)
    })

    // test('debe de hacer match con el snapshot', () => {

    //     const wrapper = shallowMount(Counter)

    //     expect( wrapper.html() ).toMatchSnapshot()
    // })

    test('h2 debe de tener el valor por defecto "Counter"', () => {

        // verificar que exista el elemento
        expect(wrapper.find('h2').exists()).toBeTruthy()

        // obtener el contenido del elemento
        const h2Value = wrapper.find('h2').text()

        expect(h2Value).toBe('Counter')

    })

    test('El valor por defecto debe de ser 100 en el p', () => {

        // pTags
        // const pTags = wrapper.findAll('p')

        // buscar por atributo
        const value = wrapper.find('[data-testid="counter"]').text()

        // expect segundo p === 100
        // expect( pTags[1].text()).toBe('100')
        expect(value).toBe('100')

    })

    test('debe de incrementar y decrementar el contador', async () => {

        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

        // simular click incremento
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        // decremento
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()

        expect(value).toBe('101')

    })

    test('debe de establecer el valor por defecto', () => {

        const { start } = wrapper.props()

        const value = wrapper.find('[data-testid="counter"]').text()

        expect(Number(value)).toBe(start)

    })


})
