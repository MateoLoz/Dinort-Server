import { ICandidates } from "./candidates.interface";
import { CandidateDto } from "./candidates.dto";
import { supabase } from "../../lib/supabaseClient";
import { mapToInsert } from "../../utils/mappers/candidates";

class CandidateService implements ICandidates{

    async postCandidates(payload: CandidateDto): Promise<any> {

      const dbPayload = await mapToInsert(payload);

      console.log(dbPayload);

        const {data, error} = await supabase
        .from("candidates")
        .insert(dbPayload)
        .select(`cover_letter,cv,email,full_name,heard_from`)
        .maybeSingle();

        if(error) {
            console.log('failed to insert candidate', error.message);
            return null;
        }
        return data;
    }

    async postCurriculumOnBucket(buffer: Buffer, firstName: string, lastName: string, mimetype: string)
    : Promise<{ path: string } | Error> {
        try {
          const filePath = `cv-${firstName}-${lastName}-${Date.now()}`;

          console.log('🚛 uploading file to bucket!');

          const { error, data } = await supabase.storage
            .from("candidates")
            .upload(filePath, buffer, {
            upsert: false,
            contentType: mimetype,
            });
          
          if (error) throw error;

          return { path: data.path };

        } catch (err) {
          console.error(err);
          return new Error("Error al guardar el archivo en Supabase Storage");
        }
      }
    
    async getSignedUrlOfCurriculum (path : string) {
        const { data } = await supabase
        .storage
        .from("candidates")
        .createSignedUrl(path, 86400); 

        if(!data) return null;

        return data.signedUrl;
    }
}

export default CandidateService;