import { PotencialClientDto } from "./potencialClient.dto";
import type { PotencialClient } from "./potencialClients.types";

export interface IPotencialClientsInterface {

    postPotencialClient(payload : PotencialClientDto) : Promise< PotencialClient | null>;
  
}