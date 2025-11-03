import { Request, Response } from "express";
import getAboutUs from "./about.service.js";
import { About } from "./about.types.js";

export default async function AboutController(req: Request, res: Response) : Promise< Response | About > {
    
    const {lang} = req.params;

    if(!lang) res.status(400).json({message:'languague not provided!'});

    const response = await getAboutUs(lang);

    if(!response) return res.status(404).json({message:'about-us not found!'});

    res.set('Cache-Control', 'public, max-age=86400');
    return res.status(200).json(response);
}