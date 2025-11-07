import type { Hero } from "./hero.types";
import { supabase } from "../lib/supabaseClient";

const signedUrlCache = new Map<string, { url: string; expiresAt: number }>();

export async function getHero() : Promise<Hero[] | null> {
  const { data : hero , error} = await supabase
  .from('Companys')
  .select('*')

   if(error) {
    console.log('failed to fetch hero', error);
    return null;
  }


for (const item of hero) {
  console.log('Generando signedUrls de 🍃', item.client_logo);

  try {
    const signedUrl = await getSignedUrl(item.client_logo);
    item.client_logo = signedUrl; 
  } catch (err) {
    console.log('Error generando signed URL para', item.client_logo, err);
    item.client_logo = item.client_logo;
  }
}

  return hero;
}

async function getSignedUrl(filePath: string) {
  const now = Date.now();
  
  const cached = signedUrlCache.get(filePath);
  if (cached && cached.expiresAt > now) {
    return cached.url; 
  }

  const { data, error } = await supabase.storage
    .from('hero_image')
    .createSignedUrl(filePath, 86400); // 1 día

  if (error || !data) throw error;

  signedUrlCache.set(filePath, {
    url: data.signedUrl,
    expiresAt: now + 86400 * 1000
  });

  return data.signedUrl;
}