import type { Database as SupabaseDatabase } from "./supabase.js";

declare global {
  type Database = SupabaseDatabase;
}

export {};