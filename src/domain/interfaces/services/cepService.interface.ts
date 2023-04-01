import { Address } from "../../valueObjects/address";

export interface ICepService {
    getAddressByCep(cep: string): Promise<Address>;
}