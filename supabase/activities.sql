-- Activities Table (for Hobbies/Extracurriculars)
CREATE TABLE IF NOT EXISTS activities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT,
  metadata JSONB DEFAULT '{}', -- Store rating, platform, etc. here
  icon_name TEXT, -- 'trophy', 'star', etc.
  cta_text TEXT,
  cta_url TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public Read Activities" ON activities
  FOR SELECT USING (true);

-- Seed Data for Activities
INSERT INTO activities (title, subtitle, description, metadata, cta_text, cta_url, sort_order)
VALUES
(
  'Chess',
  'Rating: 2000+ (Rapid)',
  'Platform: Chess.com',
  '{"rating": "2000+", "mode": "Rapid", "platform": "Chess.com"}',
  'Play a match with me',
  'https://www.chess.com/play/online/new?username=anshumandas04',
  1
);
