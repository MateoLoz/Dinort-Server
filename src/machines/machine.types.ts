type MachinesTranslationRow = Database['public']['Tables']['machine_translation']['Row'];
type MachinesRow = Database['public']['Tables']['machines']['Row'];
type MachineInsert = Database['public']['Tables']['machine_translation']['Insert'];
type MachineUpdate = Database['public']['Tables']['machine_translation']['Update'];

export type Machine = {
   created_at: string;
    description: string;
    id: number;
    languague: string;
    machine_id: number | null;
    machine_name: string;
    type: string | null;
    machines: {
        created_at: string;
        id: number;
        machine_image: string;
    } | null;
};