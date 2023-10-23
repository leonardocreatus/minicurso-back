import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PokemonRequestDTO } from './pokemon-request.dto';
import { PokemonService } from './pokemon.service';

@ApiTags('Pokemons')
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly service: PokemonService) {}

  @ApiOperation({
    summary: 'Buscar informações de um pokemon',
  })
  @ApiResponse({
    status: 200,
    description: 'Informações obtidas com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Contrato não existente',
  })
  @Get()
  async handle(@Query() { address }: PokemonRequestDTO) {
    console.log(address);
    try {
      return await Promise.race([
        this.service.handle(address),
        new Promise((_, reject) => setTimeout(() => reject('timeout'), 10000)),
      ]);
    } catch (error) {
      console.log('error', error);
      return null;
    }
  }
}
