import { supabase } from "../../lib/supabaseClient";

import { IPotencialClientsInterface } from "./potencialClient.interface";

import type { PotencialClientDto } from "./potencialClient.dto";
import type { PotencialClient } from "./potencialClients.types";
import { mapPotencialClientsToInsert } from "../../utils/mappers/potencialClients";


export class PotencialClientsService implements  IPotencialClientsInterface{
   
    async postPotencialClient(payload: PotencialClientDto): Promise<PotencialClient | null> {
        const dbPayload = await mapPotencialClientsToInsert(payload);

          const {data, error} = await supabase
          .from("potencial_clients")
          .insert(dbPayload)
          .select(`email, full_name, description, how_heard, phone_number, Organization`)
          .maybeSingle()

          if(error) {
            console.log('error saing potencial client in db', error.message);
            return null;
          }

        return data;
    }
}