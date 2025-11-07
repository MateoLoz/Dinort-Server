import { supabase } from "../../lib/supabaseClient";

const signedUrlCacheMachine = new Map<string, { url: string; expiresAt: number }>();

export default async function getMachines(lang : string) {
    const { data : machine, error } = await supabase
    .from('machine_translation')
    .select(`*,
     machines(id, created_at , machine_image)`)
     .eq('languague',lang)
     .order('id', {ascending:false});

     if(error) {
        console.log('failed to fetch machines', error);
        return null;
     }

     if(!machine) return null;

     for (const item of machine) {
      console.log('Generando signedUrls de 🍃', item.machines.machine_image);
      try {
        const signedUrl = await getSignedUrl(item.machines.machine_image);
        item.machines.machine_image = signedUrl; 
      } catch (err) {
        console.log('Error generando signed URL para', item.machines.machine_image, err);
    
        item.machines.machine_image = item.machines.machine_image;
      }
    }

     return machine;
}


async function getSignedUrl(filePath: string) {
   const now = Date.now();
   
   const cached = signedUrlCacheMachine.get(filePath);
   if (cached && cached.expiresAt > now) {
     return cached.url; 
   }
 
   const { data, error } = await supabase.storage
     .from('machine_bucket')
     .createSignedUrl(filePath, 86400); 
 
   if (error || !data) throw error;
 
   signedUrlCacheMachine.set(filePath, {
     url: data.signedUrl,
     expiresAt: now + 86400 * 1000
   });
 
   return data.signedUrl;
 }