import type { Request, Response } from "express";
import  getMision  from "../mision/mision.service";

export default async function misionController (req:Request, res:Response) {
    const {lang} = req.params;

    if(!lang) return res.status(400).json({message:'param lang not provide!'});

    const response = await getMision(lang);

    if(!response) return res.status(404).json({message:'mision not found!'});

    res.set('Cache-Control', 'public, max-age=86400');
    return res.status(200).json(response);
}