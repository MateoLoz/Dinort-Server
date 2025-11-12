import { ICandidates } from "./candidates.interface";
import { CandidateDto } from "./candidates.dto";
import { supabase } from "src/lib/supabaseClient";
import { mapToInsert } from "src/utils/mappers/candidates";

class CandidateService implements ICandidates{

    async postCandidates(payload: CandidateDto): Promise<any> {

      const dbPayload = await mapToInsert(payload);

      console.log(dbPayload);

        const {data, error} = await supabase.from("candidates").insert(dbPayload).select()

        if(error) {
            console.log('failed to insert candidate', error.message);
            return null;
        }
        return data;
    }

    async postCurriculumOnBucket(buffer: Buffer, firstName: string, lastName: string)
    : Promise<{ path: string } | Error> {
        try {
          const filePath = `cv-${firstName}-${lastName}-${Date.now()}`;
          const { error, data } = await supabase.storage
            .from("candidates")
            .upload(filePath, buffer, {
              upsert: false, 
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
        .getPublicUrl(path);
        
        if(!data) return null;
        return data;
    }
}

export default CandidateService;