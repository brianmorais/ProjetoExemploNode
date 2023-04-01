import { Person } from "../../entities/person";

export interface IPersonRepository {
    getPersons(): Promise<Person[]>;
    addPerson(person: Person): Promise<Person>; 
}