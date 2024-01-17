export const pokemonsIds = [1,20,30,34,66]

// export const pokemon = {
//     id: 1,
//     name: 'Bulbasur',
//     age: 23
// }

interface Pokemon {
    id: number;
    name: string;
    age?: number;
}

export const bulbasur:Pokemon = {
    id: 1,
    name: 'Bulbasur'
}

export const charmander:Pokemon = {
    id: 2,
    name: 'Charmander'
}