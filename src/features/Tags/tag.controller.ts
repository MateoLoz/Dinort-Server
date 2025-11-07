import type { Request, Response } from "express";
import getTagById from "./tag.service";

export default async function TagController (req: Request, res : Response) {
    const { lang } = req.params;

    if(!lang) return res.status(400).json({message:"missing req param lang!"});

    const response = await getTagById(lang);

    if(!response) return res.status(404).json({message:"tags not found!"});
    res.set('cache-Control','public, max-age=86400');
    return res.status(200).json(response);
}