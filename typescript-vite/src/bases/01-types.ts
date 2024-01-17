export let name = 'Fernando'
export const age: number = 35
export const isValid: boolean = true

export const templateString = `
Esto es un string multilinea
contiene "dobles, 'simples
inyecta valores ${name}]
expresiones ${ 1 + 1 }
numeros: ${age}
booleanos: ${isValid}
`

console.log(templateString);
