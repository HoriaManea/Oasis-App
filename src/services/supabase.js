import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jzuwbxtzwcqmasphxigr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6dXdieHR6d2NxbWFzcGh4aWdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3ODY2ODIsImV4cCI6MjA2OTM2MjY4Mn0.IEUwD3N9VELSoTRRvhSeIEbWGlBxXcqq5iB0e0ugiu4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
