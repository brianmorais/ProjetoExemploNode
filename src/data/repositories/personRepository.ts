import { injectable } from 'tsyringe';
import { Person } from '../../domain/entities/person';
import { IPersonRepository } from '../../domain/interfaces/repositories/personRepository.interface';

@injectable()
export class PersonRepository implements IPersonRepository {
  constructor() {
    this.persons = [];
  }

  private persons: Person[];

  async getPersons(): Promise<Person[]> {
    return await this.persons;
  }

  async addPerson(person: Person): Promise<Person> {
    await this.persons.push(person);
    return person;
  }
}
