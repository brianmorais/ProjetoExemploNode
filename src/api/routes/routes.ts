import { Router } from 'express';
import { injectable } from 'tsyringe';
import { CepRouter } from './cepRouter';
import { PersonRouter } from './personRouter';

@injectable()
export class Routes {
    public router: Router = Router();

    constructor(private cepRouter: CepRouter, private personRouter: PersonRouter) {
        this.setRoutes();
    }

    private setRoutes(): void {
        this.router.use(this.cepRouter.router);
        this.router.use(this.personRouter.router);
    }
}