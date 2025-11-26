import type { PotencialClientDto } from "src/features/potencialClients/potencialClient.dto";
import { IPotencialClientInsert } from "src/features/potencialClients/potencialClients.types";

export const mapPotencialClientsToInsert = async (values: PotencialClientDto): Promise<IPotencialClientInsert> => {
   console.log(values);
    const obj: IPotencialClientInsert = {
      full_name: `${values.firstName} ${values.lastName}`,
      Organization: values.Organization,
      email: values.email.toLowerCase(),
      phone_number: values.phoneNumber,
      description: values.description,
      how_heard: values.howHeard,
    };

    return Object.fromEntries(
      Object.entries(obj).filter(([_, v]) => v !== undefined)
    ) as IPotencialClientInsert;
  };
