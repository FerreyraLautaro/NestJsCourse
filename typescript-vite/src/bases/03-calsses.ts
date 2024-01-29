import axiso from 'axios'
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
// export class Pokemon {
//       public id: number;
//       public name: string;

//       constructor(id: number, name: string) {
//         this.id = id;
//         this.name = name;
//         console.log("constructor llamado");
//       }
// }
export class Pokemon {
  //forma corta de creacion de clase

  get imageUrl():string{
    return `https://pokemon.com/${this.id}`
  }
  constructor(
    public readonly id: number,
    public name: string,
  ) {}

    
    scream () {
      console.log(`${this.name.toUpperCase()} !!!`);
    }
    speak () {
      console.log(`${this.name} , ${this.name}!`);
    }
    async getMoves(): Promise<Move[]> {
      const { data } = await axiso.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
      console.log( data.moves );
      return data.moves
   }

}
export const charmander = new Pokemon(
  1,
  "Charmander",
);


