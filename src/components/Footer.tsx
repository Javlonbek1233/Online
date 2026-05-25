import { BookOpen, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
  setSelectedCourseId: (id: string | null) => void;
}

export default function Footer({ setCurrentPage, setSelectedCourseId }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setSelectedCourseId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-slate-100 bg-slate-50/70 py-12 text-slate-600 dark:border-slate-800/60 dark:bg-slate-950 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
          
          {/* Logo & Description */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white font-black">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="font-display font-black text-slate-950 dark:text-white text-md tracking-tight">
                EduStudio
              </span>
            </div>
            <p className="max-w-sm text-sm text-slate-500 leading-relaxed">
              We construct high-end curriculum programs led by industry professionals. Discover rigorous math, complete practical code repos, and earn verifiable career credentials.
            </p>
            <div className="flex items-center space-x-3.5 pt-1.5" id="footer-socials">
              {['twitter', 'github', 'linkedin', 'youtube'].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="group flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400 hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-900 transition-all active:scale-95"
                  aria-label={`Follow us on ${social}`}
                >
                  <span className="text-[11px] font-mono tracking-wide uppercase font-semibold text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    {social.slice(0, 2)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Nav Blocks */}
          <div className="grid grid-cols-2 gap-8 md:col-span-4 lg:gap-12">
            
            {/* Platform links */}
            <div className="space-y-3.5">
              <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">Platform</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>
                  <button onClick={() => navigateTo('courses')} className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">Explore Courses</button>
                </li>
                <li>
                  <button onClick={() => navigateTo('pricing')} className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">Pricing Plans</button>
                </li>
                <li>
                  <button onClick={() => navigateTo('blog')} className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">Technical Blog</button>
                </li>
              </ul>
            </div>

            {/* Support links */}
            <div className="space-y-3.5">
              <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">Support Channels</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>
                  <button onClick={() => navigateTo('contact')} className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">Help & FAQs</button>
                </li>
                <li>
                  <button onClick={() => navigateTo('contact')} className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">Contact Desk</button>
                </li>
                <li>
                  <a href="#privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400">Privacy & Terms</a>
                </li>
              </ul>
            </div>

          </div>

          {/* Newsletter Form */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">Subscribe to Releases</h4>
            <p className="text-sm text-slate-500">
              Get notified of new frameworks, code workshops, and industry interviews directly in your inbox.
            </p>
            
            {subscribed ? (
              <div className="flex items-center space-x-2 rounded-xl bg-emerald-50 p-3.5 text-emerald-800 dark:bg-emerald-950/20 dark:text-emerald-400">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <span className="text-xs font-medium">Successfully enrolled in release newsletter!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex space-x-1.5" id="news-footer-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs focus:border-indigo-500 focus:outline-hidden dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                  aria-label="Email address for newsletter"
                  required
                />
                <button
                  type="submit"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white hover:bg-slate-850 dark:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
            <p className="text-[10px] text-slate-400 font-mono">
              *Never spam. Unsubscribe in one click at any time.
            </p>
          </div>

        </div>

        {/* Divider and copyright */}
        <div className="mt-12 border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 dark:border-slate-900">
          <p className="text-xs text-slate-400 font-mono">
            &copy; 2026 EduStudio Inc. Designed with premium visual hierarchy standards.
          </p>
          <div className="flex space-x-4 text-xs font-mono text-slate-400">
            <a href="#accessibility" className="hover:text-indigo-600">ACCESSIBILITY (WCAG)</a>
            <span className="text-slate-200 dark:text-slate-800">|</span>
            <a href="#security" className="hover:text-indigo-600">SECURITY PROTOCOLS</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
