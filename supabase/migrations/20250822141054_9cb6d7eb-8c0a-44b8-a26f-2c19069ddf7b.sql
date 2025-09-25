-- Fix remaining function search_path security issues
ALTER FUNCTION public.update_updated_at_column() SET search_path = 'public, pg_temp';
ALTER FUNCTION public.handle_new_admin_user() SET search_path = 'public, pg_temp';