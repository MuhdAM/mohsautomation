
-- trusted_by
CREATE TABLE public.trusted_by (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.trusted_by TO anon, authenticated;
GRANT ALL ON public.trusted_by TO service_role;
ALTER TABLE public.trusted_by ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read trusted_by" ON public.trusted_by FOR SELECT TO anon, authenticated USING (true);

-- testimonials
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT,
  org TEXT,
  quote TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.testimonials TO anon, authenticated;
GRANT ALL ON public.testimonials TO service_role;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read testimonials" ON public.testimonials FOR SELECT TO anon, authenticated USING (true);

-- results
CREATE TABLE public.results (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  sector TEXT,
  icon TEXT,
  body TEXT,
  metric_1_value TEXT,
  metric_1_label TEXT,
  metric_2_value TEXT,
  metric_2_label TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.results TO anon, authenticated;
GRANT ALL ON public.results TO service_role;
ALTER TABLE public.results ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read results" ON public.results FOR SELECT TO anon, authenticated USING (true);

-- demos
CREATE TABLE public.demos (
  id TEXT NOT NULL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL DEFAULT 'All Demos',
  youtube_id TEXT,
  instagram_id TEXT,
  orientation TEXT NOT NULL DEFAULT 'portrait',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.demos TO anon, authenticated;
GRANT ALL ON public.demos TO service_role;
ALTER TABLE public.demos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read demos" ON public.demos FOR SELECT TO anon, authenticated USING (true);
