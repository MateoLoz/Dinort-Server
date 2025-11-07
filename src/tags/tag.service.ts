import { supabase } from "../lib/supabaseClient";
import type { Tag } from "./tag.types";

export default async function getTagById (lang : string) : Promise<Tag | null>  {
   
    const { data : machineTags , error} = await supabase
    .from('machine_tags')
    .select(`id,lang,metadata`)
      .eq('lang',lang)
    .maybeSingle()

    if(error) {
        console.log('failed to fetch tags', error.message);
        return null
    }

    return machineTags;
} 
