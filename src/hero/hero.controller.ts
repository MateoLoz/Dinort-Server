import { Request, Response } from "express";
import { getHeroService } from "./hero.getHero.service";

export async function heroGetHeroController(req: Request, res: Response) {
    const response = await getHeroService();

    if(!response) {
        res.status(404).json({
            message:'algo salio mal!'
        })
    }
    res.set('Cache-Control', 'public, max-age=86400');
    res.status(200).json({
     hero:response
    })

}