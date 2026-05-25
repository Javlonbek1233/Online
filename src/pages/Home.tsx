import { BookOpen, UserCheck, Award, Zap, Code, BarChart3, Palette, BrainCircuit, Landmark, ArrowRight, CornerRightDown, HelpCircle, Users } from 'lucide-react';
import { Course } from '../types';
import CourseCard from '../components/CourseCard';

interface HomeProps {
  courses: Course[];
  setCurrentPage: (page: string) => void;
  setSelectedCourseId: (id: string | null) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function Home({
  courses,
  setCurrentPage,
  setSelectedCourseId,
  selectedCategory,
  setSelectedCategory,
}: HomeProps) {
  // Take 3 representative courses for landing featured grid
  const featuredCourses = courses.slice(0, 3);

  // High-fidelity categories with icons
  const CATEGORIES = [
    { name: 'Development', count: 12, icon: Code, color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 dark:text-indigo-400' },
    { name: 'Data Science & AI', count: 8, icon: BrainCircuit, color: 'text-purple-600 bg-purple-50 dark:bg-purple-950/40 dark:text-purple-400' },
    { name: 'Design & Creative', count: 14, icon: Palette, color: 'text-pink-600 bg-pink-50 dark:bg-pink-950/40 dark:text-pink-400' },
    { name: 'Business & Management', count: 11, icon: BarChart3, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400' },
  ];

  const handleCategoryClick = (catName: string) => {
    setSelectedCategory(catName);
    setCurrentPage('courses');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreAll = () => {
    setSelectedCategory('All');
    setCurrentPage('courses');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    setCurrentPage('course-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-20 pb-20 dark:bg-slate-950 transition-colors" id="home-view">
      
      {/* 1. Large Hero Header Banner Section */}
      <section className="relative overflow-hidden bg-slate-900 px-4 pt-16 pb-20 sm:px-6 lg:px-8 dark:bg-slate-950/40 border-b border-indigo-950/35">
        
        {/* Ambient Gradient Background Blobs */}
        <div className="absolute top-0 right-0 -mr-40 h-[450px] w-[450px] rounded-full bg-indigo-505/10 blur-3xl opacity-60" />
        <div className="absolute bottom-10 left-10 -ml-40 h-[350px] w-[350px] rounded-full bg-purple-505/10 blur-3xl opacity-40" />

        <div className="mx-auto max-w-7xl relative">
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-12 items-center">
            
            {/* Left Column Landing copy */}
            <div className="col-span-1 md:col-span-7 space-y-6">
              <span className="inline-flex items-center space-x-1.5 rounded-full bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold tracking-wide uppercase text-indigo-450 border border-indigo-500/20">
                <Zap className="h-3.5 w-3.5 fill-indigo-400" />
                <span>Next-Generation Online Education Hub</span>
              </span>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Master the Skills That <br />
                <span className="bg-gradient-to-r from-indigo-400 via-indigo-350 to-pink-300 bg-clip-text text-transparent">
                  Shape the Technical Future
                </span>
              </h1>
              
              <p className="max-w-xl text-sm leading-relaxed text-slate-400">
                EduStudio builds rigorous academic plans, practical resource files, and evaluation assessments. Take high-definition video masterclasses from Stanford Ph.D. scholars and leading staff technicians.
              </p>

              {/* CTAs Trigger keys */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleExploreAll}
                  className="flex items-center space-x-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-xs font-bold leading-none tracking-widest text-white uppercase shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Access Classrooms</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => {
                    setCurrentPage('pricing');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="rounded-xl border border-slate-750 px-6 py-3.5 text-xs font-bold leading-none tracking-widest text-slate-300 uppercase hover:bg-slate-800 hover:text-white active:scale-95 transition-all cursor-pointer bg-slate-900/40"
                >
                  View Membership Plans
                </button>
              </div>

              {/* Static Metric Values */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80">
                <div className="space-y-0.5">
                  <span className="block font-display text-2xl font-black text-white leading-none">50K+</span>
                  <span className="block text-[10px] font-semibold text-slate-500 uppercase font-mono tracking-wider">Enrolled Students</span>
                </div>
                <div className="space-y-0.5">
                  <span className="block font-display text-2xl font-black text-white leading-none">4.88★</span>
                  <span className="block text-[10px] font-semibold text-slate-500 uppercase font-mono tracking-wider">Average Course Rating</span>
                </div>
                <div className="space-y-0.5">
                  <span className="block font-display text-2xl font-black text-white leading-none">100%</span>
                  <span className="block text-[10px] font-semibold text-slate-500 uppercase font-mono tracking-wider">Verifiable Credentials</span>
                </div>
              </div>

            </div>

            {/* Right Column Promotional Banner Mockup */}
            <div className="col-span-1 md:col-span-5 mt-10 md:mt-0 relative">
              <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-2xl">
                
                {/* Visual browser chrome header bar */}
                <div className="flex items-center space-x-1.5 border-b border-rose-50/10 pb-4 mb-4">
                  <div className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span className="font-mono text-[9px] text-slate-500 pl-2 leading-none">edustudio.org/interactive-video_pane</span>
                </div>

                <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-900 relative">
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=80"
                    alt="Active online classroom"
                    className="h-full w-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-indigo-900/20">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg animate-pulse">
                      <Zap className="h-5 w-5 fill-white" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-indigo-400 font-mono">LIVE LABS ACTIVE</span>
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 ml-1.5 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span></span>
                  </div>
                  <h3 className="font-display font-bold text-sm text-slate-100 leading-tight">Master JavaScript, Python, Neural Networks & UI Design</h3>
                  <div className="flex items-center space-x-2 text-xs text-slate-500">
                    <Users className="h-3.5 w-3.5" />
                    <span>3,412 students learning code right now</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Featured Tech & Design Learning Category Toggles */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 max-w-xl mx-auto mb-10">
          <h2 className="font-display text-2xl font-black text-slate-950 dark:text-white tracking-tight">
            Explore Rigorous Fields
          </h2>
          <p className="text-sm text-slate-500">
            Tailor-made roadmap pathways curated for career advancement. Choose your specialty field below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={cat.name}
                onClick={() => handleCategoryClick(cat.name)}
                className="group flex cursor-pointer items-center justify-between rounded-2xl border border-slate-100 bg-white p-5 hover:border-indigo-200 shadow-xs dark:bg-slate-950 dark:border-slate-800 dark:hover:border-indigo-900 transition-all active:scale-98"
                id={`cat-${cat.name.replace(/\s+/g, '-').toLowerCase()}`}
              >
                <div className="flex items-center space-x-3.5">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl font-bold ${cat.color} group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-5.5 w-5.5" />
                  </div>
                  <div className="text-left">
                    <span className="block font-display text-xs font-bold text-slate-900 dark:text-white">
                      {cat.name}
                    </span>
                    <span className="block text-[10px] text-slate-400 font-mono">
                      {cat.count} programs
                    </span>
                  </div>
                </div>
                <CornerRightDown className="h-4 w-4 -rotate-90 text-slate-350 dark:text-slate-600 group-hover:text-indigo-600 transition-colors" />
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Featured Courses Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 mb-10">
          <div className="text-left space-y-1">
            <h2 className="font-display text-2xl font-black text-slate-950 dark:text-white tracking-tight">
              A Academic Masterclasses
            </h2>
            <p className="text-sm text-slate-500">
              Highly comprehensive programs loaded with resources, video assets, and interactive assessments.
            </p>
          </div>
          <button
            onClick={handleExploreAll}
            className="group flex cursor-pointer items-center space-x-1.5 text-xs font-bold tracking-wider text-indigo-600 hover:text-indigo-505 dark:text-indigo-400 dark:hover:text-indigo-300 uppercase leading-none"
          >
            <span>Explore Syllabus catalog</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Home featured cards listing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onSelect={navigateToCourse}
            />
          ))}
        </div>
      </section>

      {/* 4. Core Frameworks (Bento Grid Style) */}
      <section className="bg-slate-55/40 py-16 dark:bg-slate-900/20 border-y border-slate-100 dark:border-slate-900/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 max-w-lg mx-auto mb-12">
            <h2 className="font-display text-2xl font-black text-slate-950 dark:text-white tracking-tight">
              Designed for Confident Competencies
            </h2>
            <p className="text-sm text-slate-500">
              Our interactive systems completely reconstruct online video formats into actionable software habits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Bento-1: Video tools */}
            <div className="md:col-span-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-xs dark:border-slate-800/80 dark:bg-slate-950 text-left space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400">
                <BookOpen className="h-5.5 w-5.5" />
              </div>
              <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white">Fluid Video Lesson Players</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Control video playbacks with precision speeds. Speed controls from 0.5x to 2x, seek timelines instantly, and track progress chapter by chapter dynamically.
              </p>
            </div>

            {/* Bento-2: Graded Assessments */}
            <div className="md:col-span-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-xs dark:border-slate-800/80 dark:bg-slate-950 text-left space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400">
                <BrainCircuit className="h-5.5 w-5.5" />
              </div>
              <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white">Active Evaluation Quizzes</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Each curriculum wraps with custom-designed quizzes. Evaluate yourself instantly, get dense explanations for correct codes, and record grading scores to your transcript.
              </p>
            </div>

            {/* Bento-3: Verified Certificates */}
            <div className="md:col-span-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-xs dark:border-slate-800/80 dark:bg-slate-950 text-left space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400">
                <Award className="h-5.5 w-5.5" />
              </div>
              <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white">Verifiable Cryptographic Credentials</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Earn cryptographic verification IDs upon completion, complete with active signatures. Export as a crisp high-fidelity PDF, print directly, or pin code badges to your resume.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Interactive Testimonial Slider Mock */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 max-w-xl mx-auto mb-10">
          <h2 className="font-display text-2xl font-black text-slate-950 dark:text-white tracking-tight">
            Loved by Elite Student Circles
          </h2>
          <p className="text-sm text-slate-500">
            Read how students transformed their design capabilities and engineering positions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: 'Harrison Shaw', role: 'Staff Front-End Engineer', text: 'EduStudio masterclasses represent incredible rigor. The coding lessons on structural states saved weeks of standard self-testing. Deciding on the subscription was an academic highlight.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80', score: '5.0/5.0' },
            { name: 'Meera Patel', role: 'Digital Illustrator & Senior UI Designer', text: 'The Advanced UI Masterclass by Marcus is outstanding. It is loaded with auto-layout parameters, grid ratios, and color theories I never learned in designer associations.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80', score: '5.0/5.0' },
            { name: 'Tristan Vance', role: 'Machine Learning Advisor', text: 'Dr. Sarah has a beautiful ability to detail complex coordinate matrixes and optimization coefficients with basic visual maps. Extremely mathematical yet fully accessible!', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80', score: '4.9/5.0' },
          ].map((item) => (
            <div key={item.name} className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 dark:bg-slate-950 dark:border-slate-850">
              <div className="space-y-4 text-left">
                <div className="flex items-center justify-between text-xs font-mono font-bold">
                  <span className="text-indigo-600 dark:text-indigo-400">VERIFIED USER REVIEWS</span>
                  <span className="text-amber-500">{item.score} ★</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>
              <div className="flex items-center space-x-3.5 pt-6 mt-6 border-t border-slate-50 dark:border-slate-900">
                <img src={item.avatar} alt={item.name} className="h-9 w-9 rounded-full object-cover" />
                <div className="text-left">
                  <span className="block font-display text-xs font-bold text-slate-900 dark:text-white">{item.name}</span>
                  <span className="block text-[10px] text-slate-405 font-mono">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Landing bottom CTA Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-slate-900 via-indigo-950 to-indigo-900 px-6 py-12 sm:px-12 md:py-16 text-center text-white border border-indigo-950 shadow-2xl">
          <div className="absolute top-0 right-0 -mr-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
          
          <div className="relative max-w-xl mx-auto space-y-5">
            <span className="inline-flex items-center rounded-lg bg-indigo-500/20 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-300 border border-indigo-400/10">
              MEMBERSHIP UNLOCKED
            </span>
            <h2 className="font-display text-3xl font-extrabold tracking-tight">
              Begin Your Engineering Journey
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Unlock our interactive evaluation dashboards, complete code sandboxes, masterclasses curriculums, and verifiable credentials instantly.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-3">
              <button
                onClick={() => {
                  setCurrentPage('auth');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="rounded-xl bg-white text-slate-900 px-6 py-3.5 text-xs font-bold leading-none uppercase tracking-wider hover:bg-slate-100 shadow-md cursor-pointer active:scale-95 transition-all"
              >
                Sign Up Now
              </button>
              <button
                onClick={handleExploreAll}
                className="rounded-xl border border-white/20 hover:bg-white/10 text-white px-6 py-3.5 text-xs font-bold leading-none uppercase tracking-wider cursor-pointer active:scale-95 transition-all"
              >
                Browse Syllabus Plans
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
