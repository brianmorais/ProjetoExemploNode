import { Router, Request, Response } from 'express';
import { injectable } from 'tsyringe';
import { PersonController } from '../controllers/personController';

@injectable()
export class PersonRouter {
    public router: Router = Router();

    constructor(private personController: PersonController) {
        this.setRoutes();
    }

    private setRoutes(): void {
        this.router.get('/api/person', async (request: Request, response: Response) => this.personController.getPersons(request, response))
        this.router.post('/api/person', async (request: Request, response: Response) => this.personController.addPerson(request, response))
    }
}