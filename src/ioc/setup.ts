import { container } from 'tsyringe';
import { CepCommand } from '../application/commands/cepCommand';
import { PersonCommand } from '../application/commands/personCommand';
import { ICepCommand } from '../application/interfaces/cepCommand.inteface';
import { IPersonCommand } from '../application/interfaces/personCommand.interface';
import { PersonRepository } from '../data/repositories/personRepository';
import { IPersonRepository } from '../domain/interfaces/repositories/personRepository.interface';
import { ICepService } from '../domain/interfaces/services/cepService.interface';
import { CepService } from '../services/viaCep/cepService';

export class Setup {
  public static configure(): void {
    container.register<ICepCommand>('CepCommand', { useClass: CepCommand });
    container.register<IPersonCommand>('PersonCommand', {
      useClass: PersonCommand,
    });
    container.register<ICepService>('CepService', { useClass: CepService });
    container.register<IPersonRepository>('PersonRepository', {
      useClass: PersonRepository,
    });
  }
}

export { container };
