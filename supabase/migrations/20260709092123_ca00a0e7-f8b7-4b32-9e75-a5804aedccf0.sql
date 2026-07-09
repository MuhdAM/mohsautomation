REVOKE SELECT, UPDATE, DELETE ON public.waitlist FROM anon;
REVOKE SELECT, UPDATE, DELETE ON public.waitlist FROM authenticated;
GRANT INSERT ON public.waitlist TO anon;
GRANT INSERT ON public.waitlist TO authenticated;
COMMENT ON TABLE public.waitlist IS E'@graphql({"totalCount": {"enabled": false}})';