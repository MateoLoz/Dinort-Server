type AboutRow = Database['public']['Tables']['about_us']['Row'];
type AboutInsert = Database['public']['Tables']['about_us']['Insert'];
type AboutUpdate = Database['public']['Tables']['about_us']['Update'];

export type About = {
   languague: AboutRow['languague'];
   history:AboutRow['history'];
   work:AboutRow['work'];
}

export type IAboutInsert = AboutInsert;
export type IAboutUpdate = AboutUpdate;