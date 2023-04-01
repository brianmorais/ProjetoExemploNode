import { ICepCommand } from "../../application/interfaces/cepCommand.inteface";
import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";

@injectable()
export class CepController {
    constructor(@inject("CepCommand") private cepCommand: ICepCommand) {}

    async getAddressByCep(request: Request, response: Response): Promise<void> {
        try {
            const cep = request.params.cep;
            const address = await this.cepCommand.getAddressByCep(cep);
            response.status(200).json(address);
        } catch (error) {
            response.status(400).json(error);
        }
    }
}