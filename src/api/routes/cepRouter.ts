import { Router, Request, Response } from 'express';
import { injectable } from 'tsyringe';
import { CepController } from '../controllers/cepController';

@injectable()
export class CepRouter {
    public router: Router = Router();

    constructor(private cepController: CepController) {
        this.setRoutes();
    }

    private setRoutes(): void {
        this.router.get('/api/cep/:cep', async (request: Request, response: Response) => this.cepController.getAddressByCep(request, response))
    }
}