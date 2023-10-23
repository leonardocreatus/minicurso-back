import { ApiProperty } from '@nestjs/swagger';
import { createZodDto } from 'nestjs-zod';
import { pokemonRequestSchema } from './pokemon-request.schema';

export class PokemonRequestDTO extends createZodDto(pokemonRequestSchema) {
  @ApiProperty({
    description: 'Endereço do pokemon',
    type: String,
    required: true,
  })
  address!: string;
}
