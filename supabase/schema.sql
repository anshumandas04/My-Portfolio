-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Projects Table
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  short_description TEXT NOT NULL,
  long_description TEXT NOT NULL,
  tech_stack TEXT[] NOT NULL DEFAULT '{}',
  metrics JSONB DEFAULT '{}',
  thumbnail_url TEXT,
  gallery_urls TEXT[] DEFAULT '{}',
  github_url TEXT,
  live_url TEXT,
  featured BOOLEAN DEFAULT FALSE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Experience Table
CREATE TABLE IF NOT EXISTS experience (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  company_name TEXT NOT NULL,
  role TEXT NOT NULL,
  duration TEXT NOT NULL,
  responsibilities TEXT[] NOT NULL DEFAULT '{}',
  technologies TEXT[] NOT NULL DEFAULT '{}',
  impact_metrics JSONB DEFAULT '{}',
  thumbnail_url TEXT,
  description TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_projects_sort ON projects(sort_order);
CREATE INDEX IF NOT EXISTS idx_experience_sort ON experience(sort_order);

-- Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE experience ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Public Read Projects" ON projects
  FOR SELECT USING (true);

CREATE POLICY "Public Read Experience" ON experience
  FOR SELECT USING (true);

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
