import type { Hero } from "./hero.types";
import { supabase } from "../lib/supabaseClient";

export async function getHero() : Promise<Hero[] | null> {
  const { data , error} = await supabase
  .from('Companys')
  .select('*')

  if(error) {
    console.log(error);
    return null;
  }

  return data;
}