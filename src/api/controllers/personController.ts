import { IPersonCommand } from "../../application/interfaces/personCommand.interface";
import { PersonModel } from "../../application/models/personModel";
import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";

@injectable()
export class PersonController {
    constructor(@inject("PersonCommand") private personCommand: IPersonCommand) {}

    async getPersons(request: Request, response: Response): Promise<void> {
        try {
            const persons = await this.personCommand.getPersons();
            response.status(200).json(persons);
        } catch (error) {
            response.status(400).json(error);
        }
    }

    async addPerson(request: Request, response: Response): Promise<void> {
        try {
            const person: PersonModel = {
                id: request.body.id,
                name: request.body.name
            }

            const inserted = await this.personCommand.addPerson(person);
            response.status(201).json(inserted);
        } catch (error) {
            response.status(400).json(error);
        }
    }
}