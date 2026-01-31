-- Create a public storage bucket for portfolio media
INSERT INTO storage.buckets (id, name, public) 
VALUES ('portfolio', 'portfolio', true)
ON CONFLICT (id) DO NOTHING;

-- Policy to allow public read access to the portfolio bucket
CREATE POLICY "Public Read Portfolio"
ON storage.objects FOR SELECT
USING ( bucket_id = 'portfolio' );

-- Policy to allow authenticated uploads (if you want to upload via app in future)
-- For now, you will mostly upload via Dashboard, which bypasses RLS if you are admin.
-- But good to have if we build an admin panel later.
CREATE POLICY "Admin Upload Portfolio"
ON storage.objects FOR INSERT
WITH CHECK ( bucket_id = 'portfolio' );
