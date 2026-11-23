import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

// Substitua pelas suas chaves do painel do Supabase (Project Settings > API)
const supabaseUrl = 'https://nouthlsbjfilrqfqlpfi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vdXRobHNiamZpbHJxZnFscGZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTUyNDY3NjAsImV4cCI6MjExMDgyMjc2MH0.kKKvweY2CoAug1NywB13JroANN4xqAdh1ltmxyjzUNc';

export const supabase = createClient(supabaseUrl, supabaseKey);
