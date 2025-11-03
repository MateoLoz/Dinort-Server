import { supabase } from "../../lib/supabaseClient";
import type { About } from "./about.types";

export default async function getAboutUs (lang : string) : Promise<About | null>  {
        const {data, error} = await supabase 
        .from('about_us')
        .select(`languague,work,history`)
        .eq('languague',lang)
        .maybeSingle();

        if(error) {
            console.log('failed to fetch about_us', error.message);
            return null;
        }

        return data;
}