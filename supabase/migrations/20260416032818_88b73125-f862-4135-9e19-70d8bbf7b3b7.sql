-- Deny all public SELECT access to waitlist
CREATE POLICY "No public read access" ON public.waitlist
FOR SELECT
TO public
USING (false);