

describe('Example component', () => {

  test('Debe de ser mayor a 10', () => {

    // arreglar
    let value = 5

    // estimulo
    value = value + 2

    // observar el resultado
    if(value > 10){
      // todo bien
    }
    else{
      throw `${value} no es mayor a 10`
    }

  })
})