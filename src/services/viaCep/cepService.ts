import { injectable } from "tsyringe";
import { ICepService } from "../../domain/interfaces/services/cepService.interface";
import { Address } from "../../domain/valueObjects/address";
import axios from "axios";

@injectable()
export class CepService implements ICepService {
    private serviceUrl: string;
    constructor() {
        this.serviceUrl = process.env.VIA_CEP_URL as string;
    }

    async getAddressByCep(cep: string): Promise<Address> {
        return (await axios.get<Address>(this.serviceUrl.replace('{CEP}', cep))).data;
    }
}