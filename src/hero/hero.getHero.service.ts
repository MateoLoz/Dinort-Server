import type { HeroDto } from "./hero.dto";
import { getHero } from "./hero.service";
import { toHeroDtos } from "./hero.mapper";

export async function getHeroService() : Promise<HeroDto[] | null> {
   const response = await getHero();

   if(!response) {
    return null;
   }

   return toHeroDtos(response)
}