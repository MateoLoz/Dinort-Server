type CandidatesRow = Database['public']['Tables']['candidates']['Row'];
type CandidatesUpdate = Database['public']['Tables']['candidates']['Update'];
type CandidatesInsert = Database['public']['Tables']['candidates']['Insert'];


export type Candidates = Pick<CandidatesRow,'cover_letter' | 'cv' | 'email' | 'full_name' | 'heard_from'>

export type ICandidatesUpdate = CandidatesUpdate;
export type ICandidatesInsert = CandidatesInsert;
