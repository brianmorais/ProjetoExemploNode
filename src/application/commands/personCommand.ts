import { inject, injectable } from "tsyringe";
import { Person } from "../../domain/entities/person";
import { IPersonRepository } from "../../domain/interfaces/repositories/personRepository.interface";
import { IPersonCommand } from "../interfaces/personCommand.interface";
import { PersonModel } from "../models/personModel";

@injectable()
export class PersonCommand implements IPersonCommand {
    constructor(@inject("PersonRepository") private personRepository: IPersonRepository) {}

    async getPersons(): Promise<PersonModel[]> {
        const persons = await this.personRepository.getPersons();

        let personsModel: PersonModel[] = [];
        for (let person of persons) {
            let p: PersonModel = { id: person.id, name: person.name };
            personsModel.push(p);
        }

        return personsModel;
    }

    async addPerson(personModel: PersonModel): Promise<PersonModel> {
        const person: Person = {
            id: personModel.id,
            name: personModel.name
        }

        const response = await this.personRepository.addPerson(person);

        personModel = {
            id: response.id,
            name: response.name
        }        

        return personModel;
    }
}