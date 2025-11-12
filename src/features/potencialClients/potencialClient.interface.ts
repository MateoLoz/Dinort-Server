import { PotencialClientDto } from "./potencialClient.dto";
import type { PotencialClient } from "./potencialClients.types";

export interface IPotencialClienteInterface {

    postPotencialClient(payload : PotencialClientDto) : Promise< PotencialClient | null>;
  
}