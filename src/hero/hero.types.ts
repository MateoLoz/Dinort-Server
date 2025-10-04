type HeroRow = Database['public']['Tables']['Companys']['Row']
type HeroInsert = Database['public']['Tables']['Companys']['Insert']
type HeroUpdate = Database['public']['Tables']['Companys']['Update']

export type Hero = {
     id: HeroRow['id'];
    created_at: HeroRow['created_at'];
    client_logo:string | null;
    name: HeroRow['name'];
}

export type IHeroInsert = HeroInsert;
export type IHeroUpdate = HeroUpdate; 