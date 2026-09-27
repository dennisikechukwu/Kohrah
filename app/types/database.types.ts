export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          updated_at: string | null
          full_name: string | null
          avatar_url: string | null
          job_title: string | null
          company: string | null
          bio: string | null
          is_onboarded: boolean | null
          slug: string | null
          website: string | null
          linkedin_url: string | null
          twitter_url: string | null
          instagram_url: string | null
        }
        Insert: {
          id: string
          updated_at?: string | null
          full_name?: string | null
          avatar_url?: string | null
          job_title?: string | null
          company?: string | null
          bio?: string | null
          is_onboarded?: boolean | null
          slug?: string | null
          website?: string | null
          linkedin_url?: string | null
          twitter_url?: string | null
          instagram_url?: string | null
        }
        Update: {
          id?: string
          updated_at?: string | null
          full_name?: string | null
          avatar_url?: string | null
          job_title?: string | null
          company?: string | null
          bio?: string | null
          is_onboarded?: boolean | null
          slug?: string | null
          website?: string | null
          linkedin_url?: string | null
          twitter_url?: string | null
          instagram_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      connections: {
        Row: {
          id: string
          profile_id: string
          contact_name: string
          contact_email: string
          contact_phone: string | null
          context: string | null
          created_at: string
        }
        Insert: {
          id?: string
          profile_id: string
          contact_name: string
          contact_email: string
          contact_phone?: string | null
          context?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          profile_id?: string
          contact_name?: string
          contact_email?: string
          contact_phone?: string | null
          context?: string | null
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "connections_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      page_views: {
        Row: {
          id: string
          profile_id: string
          viewer_ip: string | null
          user_agent: string | null
          created_at: string
        }
        Insert: {
          id?: string
          profile_id: string
          viewer_ip?: string | null
          user_agent?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          profile_id?: string
          viewer_ip?: string | null
          user_agent?: string | null
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "page_views_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
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
