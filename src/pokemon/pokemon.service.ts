import { Injectable } from '@nestjs/common';
import { abi } from 'docs/abi';
import { Web3 } from 'web3';

@Injectable()
export class PokemonService {
  async handle(address: string) {
    const web3 = new Web3('https://rpc.sepolia.org');
    console.log('address', address);
    const contract = new web3.eth.Contract(abi, address);

    try {
      const { name, pokeball, nature, ability, owner } = await new Promise<{
        name: string;
        pokeball: string;
        nature: string;
        ability: string;
        owner: string;
      }>((resolve) => {
        const obj: {
          name: string;
          pokeball: string;
          nature: string;
          ability: string;
          owner: string;
        } = {
          name: null,
          pokeball: null,
          nature: null,
          ability: null,
          owner: null,
        };

        contract.methods
          .getPokemon()
          .call()
          .then((value) => {
            if (typeof value === 'string') {
              obj.name = value;
              console.log(obj);
              if (Object.values(obj).every((v) => v !== null)) {
                resolve(obj);
              }
            }
          })
          .catch((e) => {
            console.log('pokemon error', e);
            console.log('pokemon');
          });

        contract.methods
          .getPokebola()
          .call()
          .then((value) => {
            if (typeof value === 'string') {
              obj.pokeball = value;
              console.log(obj);
              if (Object.values(obj).every((v) => v !== null)) {
                resolve(obj);
              }
            }
          })
          .catch((e) => {
            console.log('pokebola error', e);
            console.log('pokebola');
          });

        contract.methods
          .getNature()
          .call()
          .then((value) => {
            if (typeof value === 'string') {
              obj.nature = value;
              console.log(obj);
              if (Object.values(obj).every((v) => v !== null)) {
                resolve(obj);
              }
            }
          })
          .catch((e) => {
            console.log('nature error', e);
            console.log('nature');
          });

        contract.methods
          .getAbility()
          .call()
          .then((value) => {
            if (typeof value === 'string') {
              obj.ability = value;
              console.log(obj);
              if (Object.values(obj).every((v) => v !== null)) {
                resolve(obj);
              }
            }
          })
          .catch((e) => {
            console.log('ability error', e);
            console.log('ability');
          });

        contract.methods
          .getOwner()
          .call()
          .then((value) => {
            if (typeof value === 'string') {
              obj.owner = value;
              console.log(obj);
              if (Object.values(obj).every((v) => v !== null)) {
                resolve(obj);
              }
            }
          })
          .catch((e) => {
            console.log('owner error', e);
            console.log('owner');
          });

        setTimeout(() => {
          resolve(obj);
        }, 15000);
      });

      return {
        name,
        pokeball,
        nature,
        ability,
        owner,
      };
    } catch (error) {
      console.log('DEU RUIM');
      return null;
    }
  }
}
