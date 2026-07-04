DROP POLICY IF EXISTS "Anyone can insert into waitlist" ON public.waitlist;

CREATE POLICY "Anyone can insert valid waitlist entries"
ON public.waitlist
FOR INSERT
TO public
WITH CHECK (
  length(btrim(name)) BETWEEN 2 AND 120
  AND length(btrim(email)) BETWEEN 5 AND 254
  AND email ~* '^[^\s@]+@[^\s@]+\.[^\s@]{2,}$'
  AND length(btrim(need)) BETWEEN 10 AND 2000
);