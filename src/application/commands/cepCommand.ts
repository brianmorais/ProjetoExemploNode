import { inject, injectable } from 'tsyringe';
import { ICepService } from '../../domain/interfaces/services/cepService.interface';
import { ICepCommand } from '../interfaces/cepCommand.inteface';
import { AddressModel } from '../models/addressModel';

@injectable()
export class CepCommand implements ICepCommand {
  constructor(@inject('CepService') private cepService: ICepService) {}

  async getAddressByCep(cep: string): Promise<AddressModel> {
    const address = await this.cepService.getAddressByCep(cep);

    const addressModel: AddressModel = {
      cep: address.cep,
      logradouro: address.logradouro,
      complemento: address.complemento,
      bairro: address.bairro,
      uf: address.uf,
      ibge: address.ibge,
      gia: address.gia,
      ddd: address.ddd,
      siafi: address.siafi,
    };

    return addressModel;
  }
}
