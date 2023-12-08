// Track goals not projects

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sbbyyfrjwqyigjumtewl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNiYnl5ZnJqd3F5aWdqdW10ZXdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2MTgzNTMsImV4cCI6MjAxNzE5NDM1M30.7Tnf1hX_BDbqb3HGoEPgnqAor9wwGhmPBaHEecE6CP0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);