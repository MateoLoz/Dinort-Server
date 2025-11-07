type TagRow = Database['public']['Tables']['machine_tags']['Row']

export type Tag = {
    id:TagRow['id'];
    lang: TagRow['lang'];
    metadata: TagRow['metadata'];
}