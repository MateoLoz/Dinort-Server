import type { Database as SupabaseDatabase } from "./supabase.js";

declare global {
  type Database = SupabaseDatabase;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

export {};