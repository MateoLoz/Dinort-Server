import { supabase } from "../../lib/supabaseClient";

import type { mision } from "#/types/mision/mision.types";

export default async function getMision(lang : string) : Promise< mision | null> {
    const {data, error}  = await supabase
    .from('mision')
    .select(`
        id,
        mision,
        languague,
        metadata
        `)
        .eq('languague',lang).maybeSingle()

    if(error) {
        console.log('failed to fetch mision',error.message);
        return null;
    }

    return data;

}
