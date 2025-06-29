import { PersonModel } from '../models/personModel';

export interface IPersonCommand {
  getPersons(): Promise<PersonModel[]>;
  addPerson(personModel: PersonModel): Promise<PersonModel>;
}
