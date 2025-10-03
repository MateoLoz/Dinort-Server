import type { Hero } from "./hero.types";
import type { HeroDto } from "./hero.dto";

 function toHeroDto(data : Hero) : HeroDto {
    return {
    ClientLogo: data.client_logo,
    name: data.name
    }
}

export function toHeroDtos(data : Hero[]) : HeroDto[] {
    return data.map(toHeroDto)
}