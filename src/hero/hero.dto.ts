import type { Hero } from "./hero.types";

export type HeroDto = {
    ClientLogo: Hero['client_logo'];
    name:Hero['name'];
}