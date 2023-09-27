const {test, expect}=require('@jest/globals')
const operador = require('./adicionaroperador.js')

test('Deve retornar 0', () =>{
    expect(operador("+","")).toBe("0+")
});
test('Deve retornar 1+', () =>{
    expect(operador("+","1")).toBe("1+")
});
test('Deve retornar 0-', () =>{
    expect(operador("-","")).toBe("0-")
});
test('Deve retornar 1-', () =>{
    expect(operador("-","1")).toBe("1-")
});
test('Deve retornar 0*', () =>{
    expect(operador("*","")).toBe("0*")
});
test('Deve retornar 1*', () =>{
    expect(operador("*","1")).toBe("1*")
});
test('Deve retornar 0/', () =>{
    expect(operador("/","")).toBe("0/")
});
test('Deve retornar 1/', () =>{
    expect(operador("/","1")).toBe("1/")
});
test('Deve retornar 1.1+ ', () =>{
    expect(operador("+","1.1")).toBe("1.1+")
});
test('Deve retornar 1.0+ pois foi informado o operador após o ponto decimal', () =>{
    expect(operador("+","1.")).toBe("1.0+")
});