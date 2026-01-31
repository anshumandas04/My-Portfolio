-- Clean existing data
TRUNCATE TABLE projects CASCADE;
TRUNCATE TABLE experience CASCADE;

-- Projects Seed Data
INSERT INTO projects (slug, title, short_description, long_description, tech_stack, metrics, thumbnail_url, featured, sort_order)
VALUES
(
  'cooliego', 
  'CoolieGo', 
  'Hyper-local logistics platform for railway porter services.',
  'A comprehensive logistics platform connecting railway passengers with licensed porters. Solved the last-mile connectivity problem in crowded railway stations through a real-time booking system.',
  ARRAY['React Native', 'Node.js', 'Socket.io', 'MongoDB'],
  '{"users": "50K+", "stations": "15+", "transactions": "100K+"}',
  'https://images.unsplash.com/photo-1542614471-001ccf2b449c?auto=format&fit=crop&q=80',
  TRUE,
  1
),
(
  'matsci-odia', 
  'Matsci Odia', 
  'Educational platform for Material Science students in Odia language.',
  'An ed-tech initiative to democratize material science education by providing high-quality technical content in regional Odia language.',
  ARRAY['Next.js', 'Firebase', 'YouTube API'],
  '{"students": "5K+", "videos": "200+", "watch_time": "10K hrs"}',
  'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80',
  FALSE,
  2
),
(
  'derma-ai', 
  'DermaAI', 
  'AI-powered dermatology diagnostic assistant.',
  'Production-grade dermatology AI system for skin condition analysis. Features end-to-end encryption, HIPAA compliance readiness, and class-imbalance handling.',
  ARRAY['FastAPI', 'PyTorch', 'React', 'Docker'],
  '{"accuracy": "94%", "latency": "<100ms", "classes": "12"}',
  'https://images.unsplash.com/photo-1576091160550-217358c7db81?auto=format&fit=crop&q=80',
  TRUE,
  3
),
(
  'trackhouse', 
  'TrackHouse', 
  'Real-time asset tracking and fleet management system.',
  'Enterprise IoT solution for tracking diverse assets across warehouses and transit. Integrated hardware sensors with a real-time dashboard.',
  ARRAY['Flutter', 'Go', 'PostgreSQL', 'MQTT'],
  '{"assets": "10K+", "uptime": "99.9%", "data_points": "1M/day"}',
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
  FALSE,
  4
),
(
  'streaming-platform', 
  'Live Class Platform', 
  'Low-latency HLS streaming for interactive education.',
  'Optimized HLS video player with sub-6s latency for live classrooms. Features synchronized polls, chat, and "tap-to-live" functionality.',
  ARRAY['Next.js', 'HLS.js', 'WebRTC', 'Redis'],
  '{"latency": "6s", "concurrent": "2K+", "sync_accuracy": "<500ms"}',
  'https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80',
  TRUE,
  5
);

-- Experience Seed Data
INSERT INTO experience (slug, company_name, role, duration, responsibilities, technologies, thumbnail_url, sort_order)
VALUES
(
  'carriv',
  'Carriv Technologies',
  'Senior Full Stack Engineer',
  '2023 - Present',
  ARRAY[
    'Architected core streaming infrastructure reducing latency by 40%',
    'Led migration from monolithic architecture to microservices',
    'Mentored junior developers and established code review standards'
  ],
  ARRAY['Next.js', 'Go', 'AWS', 'Terraform'],
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
  1
),
(
  'freelance',
  'Independent Consultant',
  'Full Stack Architect',
  '2021 - 2023',
  ARRAY[
    'Delivered 15+ production applications for global clients',
    'Specialized in high-performance web applications and real-time systems'
  ],
  ARRAY['React', 'Node.js', 'PostgreSQL', 'Firebase'],
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
  2
);
