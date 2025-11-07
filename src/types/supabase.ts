export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      about_us: {
        Row: {
          created_at: string
          history: string
          id: number
          languague: string
          work: string
        }
        Insert: {
          created_at?: string
          history?: string
          id?: number
          languague?: string
          work?: string
        }
        Update: {
          created_at?: string
          history?: string
          id?: number
          languague?: string
          work?: string
        }
        Relationships: []
      }
      candidates: {
        Row: {
          cover_letter: string | null
          created_at: string
          cv: string
          email: string
          full_name: string
          id: number
        }
        Insert: {
          cover_letter?: string | null
          created_at?: string
          cv?: string
          email?: string
          full_name?: string
          id?: number
        }
        Update: {
          cover_letter?: string | null
          created_at?: string
          cv?: string
          email?: string
          full_name?: string
          id?: number
        }
        Relationships: []
      }
      closed_deals: {
        Row: {
          amont: number
          client_name: string
          created_at: string
          id: number
          job_descripction: string | null
          work_duration: string
        }
        Insert: {
          amont: number
          client_name?: string
          created_at?: string
          id?: number
          job_descripction?: string | null
          work_duration: string
        }
        Update: {
          amont?: number
          client_name?: string
          created_at?: string
          id?: number
          job_descripction?: string | null
          work_duration?: string
        }
        Relationships: []
      }
      Companys: {
        Row: {
          client_logo: string
          created_at: string
          id: number
          name: string | null
        }
        Insert: {
          client_logo?: string
          created_at?: string
          id?: number
          name?: string | null
        }
        Update: {
          client_logo?: string
          created_at?: string
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      machine_images: {
        Row: {
          created_at: string
          id: number
          image: string
          machine_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          image?: string
          machine_id: number
        }
        Update: {
          created_at?: string
          id?: number
          image?: string
          machine_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "machine_images_machine_id_fkey"
            columns: ["machine_id"]
            isOneToOne: false
            referencedRelation: "machines"
            referencedColumns: ["id"]
          },
        ]
      }
      machine_tags: {
        Row: {
          created_at: string
          id: number
          lang: string
          metadata: Json | null
        }
        Insert: {
          created_at?: string
          id?: number
          lang: string
          metadata?: Json | null
        }
        Update: {
          created_at?: string
          id?: number
          lang?: string
          metadata?: Json | null
        }
        Relationships: []
      }
      machine_translation: {
        Row: {
          created_at: string
          description: string
          id: number
          languague: string
          machine_id: number
          machine_name: string
          type: string | null
        }
        Insert: {
          created_at?: string
          description?: string
          id?: number
          languague?: string
          machine_id: number
          machine_name?: string
          type?: string | null
        }
        Update: {
          created_at?: string
          description?: string
          id?: number
          languague?: string
          machine_id?: number
          machine_name?: string
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "machine_translation_machine_id_fkey"
            columns: ["machine_id"]
            isOneToOne: false
            referencedRelation: "machines"
            referencedColumns: ["id"]
          },
        ]
      }
      machines: {
        Row: {
          created_at: string
          id: number
          machine_image: string
        }
        Insert: {
          created_at?: string
          id?: number
          machine_image?: string
        }
        Update: {
          created_at?: string
          id?: number
          machine_image?: string
        }
        Relationships: []
      }
      metrics: {
        Row: {
          created_at: string
          id: number
          metadata: Json
          metric_type: string
        }
        Insert: {
          created_at?: string
          id?: number
          metadata: Json
          metric_type?: string
        }
        Update: {
          created_at?: string
          id?: number
          metadata?: Json
          metric_type?: string
        }
        Relationships: []
      }
      mision: {
        Row: {
          created_at: string
          id: number
          languague: string
          metadata: Json | null
          mision: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          languague?: string
          metadata?: Json | null
          mision?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          languague?: string
          metadata?: Json | null
          mision?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      potencial_clients: {
        Row: {
          created_at: string
          description: string
          email: string
          full_name: string
          how_heard: string
          id: number
          phone_number: string
        }
        Insert: {
          created_at?: string
          description?: string
          email?: string
          full_name?: string
          how_heard?: string
          id?: number
          phone_number?: string
        }
        Update: {
          created_at?: string
          description?: string
          email?: string
          full_name?: string
          how_heard?: string
          id?: number
          phone_number?: string
        }
        Relationships: []
      }
      testimonies: {
        Row: {
          created_at: string
          id: number
          rate: string
          testimony_company: string
          testimony_image: string
          testimony_name: string
          testimony_position: string
        }
        Insert: {
          created_at?: string
          id?: number
          rate?: string
          testimony_company?: string
          testimony_image?: string
          testimony_name?: string
          testimony_position?: string
        }
        Update: {
          created_at?: string
          id?: number
          rate?: string
          testimony_company?: string
          testimony_image?: string
          testimony_name?: string
          testimony_position?: string
        }
        Relationships: []
      }
      testimonies_translation: {
        Row: {
          created_at: string
          id: number
          languague: string
          testimonies_description: string
          testimonies_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          languague?: string
          testimonies_description?: string
          testimonies_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          languague?: string
          testimonies_description?: string
          testimonies_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "testimonies_translation_testimonies_id_fkey"
            columns: ["testimonies_id"]
            isOneToOne: false
            referencedRelation: "testimonies"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string
          id: number
          password: string
          rol: string
          updated_at: string | null
          user_name: string
        }
        Insert: {
          created_at?: string
          id?: number
          password?: string
          rol?: string
          updated_at?: string | null
          user_name?: string
        }
        Update: {
          created_at?: string
          id?: number
          password?: string
          rol?: string
          updated_at?: string | null
          user_name?: string
        }
        Relationships: []
      }
      works: {
        Row: {
          created_at: string
          id: number
          name: string | null
          updated_at: string | null
          work_image: string
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          updated_at?: string | null
          work_image?: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          updated_at?: string | null
          work_image?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
