type MisionRow = Database['public']['Tables']['mision']['Row'];
type MisionUpdate = Database['public']['Tables']['mision']['Update'];
type MisionInsert = Database['public']['Tables']['mision']['Insert'];

export type mision = {
    id:MisionRow['id'];
    mision:MisionRow['mision'];
    languague:MisionRow['languague'];
    metadata:MisionRow['metadata'];
}

export type IMisionUpdate = MisionUpdate;
export type IMisionInsert = MisionInsert;