

describe('Example component', () => {

  test('Debe de ser mayor a 10', () => {

    // arreglar
    let value = 10

    // estimulo
    value = value + 2

    // observar el resultado
    expect(value).toBeGreaterThan( 10 )

  })
})