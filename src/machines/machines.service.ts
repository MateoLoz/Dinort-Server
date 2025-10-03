import { supabase } from "../lib/supabaseClient";

export default async function getMachines(lang : string) {
    const { data, error } = await supabase
    .from('machine_translation')
    .select(`*,
     machines(id, created_at , machine_image)`)
     .eq('languague',lang)

     if(error) {
        console.log('failed to fetch machines', error);
        return null;
     }
     return data;
}