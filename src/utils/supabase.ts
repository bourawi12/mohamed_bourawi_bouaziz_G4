import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://pbqmbodxpqgauapfaxev.supabase.co', 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBicW1ib2R4cHFnYXVhcGZheGV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYyMjYxNzEsImV4cCI6MjA4MTgwMjE3MX0.onhYlIWoVDarhIJrvKJicYEeh2M7XfZNtWDQ5NSKk6o',
  {
    realtime: { } // valid in v1
  }
 
);