import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { HttpAdapter } from '../../dist/common/interfaces/http-adapter.interface';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  
  
    constructor(
      @InjectModel( Pokemon.name )
      private readonly pokemonModel: Model<Pokemon>,

      private readonly http: AxiosAdapter,
    ){}

  async executeSeed(){

    await this.pokemonModel.deleteMany({});

    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');

    console.log(`Se recibieron ${data.results.length} registros de la PokeAPI.`);

    const pokemonToInsert: { name: string, no: number }[] = [];

    data.results.forEach( ({ name, url }) => {

      const segments = url.split('/');
      const no = +segments[ segments.length - 2 ];
      pokemonToInsert.push({ name, no });
    });

    console.log(`Intentando insertar ${pokemonToInsert.length} Pokémon...`);

    try {
      const result = await this.pokemonModel.insertMany(pokemonToInsert);
      console.log(`Insertados exitosamente: ${result.length} Pokémon`);

      const count = await this.pokemonModel.countDocuments();
      console.log(`Total en la base de datos: ${count} Pokémon`);

      return 'Seed executed successfully';
    } catch (error) {
      console.error('Error durante la inserción:', error);
      throw error;
    }
  }
}
