//import axiso from 'axios'
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
import { HttpAdapter, PokeApiAxiosAdapter, PokeApiFetchAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

  get imageUrl():string{
    return `https://pokemon.com/${this.id}`
  }
  constructor(
    public readonly id: number,
    public name: string,
    //INJECCION DE DEPENDENCIAS
    private readonly http: HttpAdapter,
  ) {}

    
    scream () {
      console.log(`${this.name.toUpperCase()} !!!`);
    }
    speak () {
      console.log(`${this.name} , ${this.name}!`);
    }
    async getMoves(): Promise<Move[]> {
      //const { data } = await axiso.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
      const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
      console.log( data.moves );
      return data.moves
   }

}

const pokeApiAxios = new PokeApiAxiosAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();


export const charmander = new Pokemon(
  1,
  "Charmander",
  pokeApiFetch
);

export const picachu = new Pokemon(
    1,
    "Picachu",
    pokeApiAxios
  );


