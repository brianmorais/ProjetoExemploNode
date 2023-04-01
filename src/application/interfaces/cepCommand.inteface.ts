import { AddressModel } from "../models/addressModel";

export interface ICepCommand {
    getAddressByCep(cep: string): Promise<AddressModel>;
}