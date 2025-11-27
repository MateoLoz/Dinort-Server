type PotencialClientRow = Database['public']['Tables']['potencial_clients']['Row'];
type PotencialClientInsert = Database['public']['Tables']['potencial_clients']['Insert'];
type PotencialClientUpdate = Database['public']['Tables']['potencial_clients']['Update'];

export type PotencialClient = Pick<PotencialClientRow, 'full_name' | 'email' | 'description' | 'phone_number' | 'how_heard' | 'Organization'>;


export type IPotencialClientInsert = PotencialClientInsert;
export type IPotencialClientUpdate = PotencialClientUpdate;