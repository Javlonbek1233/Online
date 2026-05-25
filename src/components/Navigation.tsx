import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, BookOpen, User, LogOut, Award, ChevronDown, Compass, Milestone, MessageSquare } from 'lucide-react';
import { UserProfile } from '../types';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  selectedCourseId: string | null;
  setSelectedCourseId: (id: string | null) => void;
  user: UserProfile | null;
  setUser: (user: UserProfile | null) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Navigation({
  currentPage,
  setCurrentPage,
  setSelectedCourseId,
  user,
  setUser,
  darkMode,
  setDarkMode,
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  // Close menus on page transitions
  const navigateTo = (page: string, courseId: string | null = null) => {
    setCurrentPage(page);
    setSelectedCourseId(courseId);
    setMobileMenuOpen(false);
    setProfileDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogout = () => {
    setUser(null);
    setProfileDropdownOpen(false);
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/95 transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <div 
          onClick={() => navigateTo('home')} 
          className="flex cursor-pointer items-center space-x-2.5 transition-transform active:scale-95"
          id="nav-logo"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-500 shadow-lg shadow-indigo-500/20 text-white font-display font-black text-xl">
            <BookOpen className="h-5.5 w-5.5" />
          </div>
          <div>
            <span className="font-display font-extrabold text-lg tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-indigo-600 bg-clip-text text-transparent dark:from-white dark:via-indigo-100 dark:to-indigo-400">
              EduStudio
            </span>
            <span className="block text-[10px] font-mono font-medium tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
              MASTERCLASS
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <button
            onClick={() => navigateTo('home')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentPage === 'home'
                ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => navigateTo('courses')}
            className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors ${
              currentPage === 'courses' || currentPage === 'course-details'
                ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white'
            }`}
          >
            <Compass className="h-4 w-4" />
            Courses
          </button>
          <button
            onClick={() => navigateTo('pricing')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentPage === 'pricing'
                ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white'
            }`}
          >
            Pricing
          </button>
          <button
            onClick={() => navigateTo('blog')}
            className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors ${
              currentPage === 'blog'
                ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white'
            }`}
          >
            <Milestone className="h-4 w-4" />
            Blog
          </button>
          <button
            onClick={() => navigateTo('contact')}
            className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors ${
              currentPage === 'contact'
                ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white'
            }`}
          >
            <MessageSquare className="h-4 w-4" />
            Contact
          </button>
        </nav>

        {/* Essential Actions: Theme, Auth State */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Dark Mode toggle */}
          <button 
            onClick={toggleDarkMode}
            className="p-2 cursor-pointer rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-200 transition-all active:scale-95"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* User Logged In Profile Panel */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex cursor-pointer items-center space-x-2 rounded-full border border-slate-100 bg-slate-50 p-1 pr-3 shadow-xs hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800 transition-all outline-hidden active:scale-98"
                id="profile-dropdown-btn"
              >
                <img
                  src={user.avatar}
                  alt={user.fullName}
                  className="h-8 w-8 rounded-full border-2 border-indigo-400 object-cover"
                />
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 max-w-[90px] truncate">
                  {user.fullName.split(' ')[0]}
                </span>
                <ChevronDown className="h-3 w-3 text-slate-400" />
              </button>

              {profileDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2.5 w-60 origin-top-right rounded-2xl border border-slate-100 bg-white p-2 shadow-xl ring-1 ring-black/5 dark:border-slate-800 dark:bg-slate-950 dark:shadow-indigo-950/10"
                  id="profile-dropdown-content"
                >
                  <div className="border-b border-slate-50 px-3 py-3 dark:border-slate-900">
                    <p className="text-xs font-medium text-slate-400">Enrolled Student</p>
                    <p className="font-display text-sm font-semibold text-slate-900 dark:text-white truncate">{user.fullName}</p>
                    <p className="text-[11px] font-mono text-slate-500 truncate">{user.email}</p>
                  </div>
                  <div className="space-y-0.5 py-1.5">
                    <button
                      onClick={() => navigateTo('dashboard')}
                      className="flex w-full items-center space-x-2.5 rounded-xl px-3 py-2 text-left text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-indigo-400"
                    >
                      <User className="h-4 w-4" />
                      <span>Student Dashboard</span>
                    </button>
                    <button
                      onClick={() => navigateTo('dashboard')}
                      className="flex w-full items-center space-x-2.5 rounded-xl px-3 py-2 text-left text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-indigo-400"
                    >
                      <Award className="h-4 w-4" />
                      <span>My Certificates ({user.certificates.length})</span>
                    </button>
                  </div>
                  <div className="border-t border-slate-50 pt-1.5 dark:border-slate-900">
                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center space-x-2.5 rounded-xl px-3 py-2 text-left text-xs font-medium text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Log Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => navigateTo('auth')}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
              >
                Sign In
              </button>
              <button
                onClick={() => navigateTo('auth')}
                className="px-4 py-2 text-xs font-semibold tracking-wide text-white uppercase bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-xl shadow-md cursor-pointer hover:shadow-indigo-500/10 active:scale-95 transition-all"
              >
                Enroll for Free
              </button>
            </div>
          )}
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center space-x-2 md:hidden">
          <button 
            onClick={toggleDarkMode}
            className="p-2 cursor-pointer rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-900 transition-all active:scale-95"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex cursor-pointer items-center justify-center rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-3 md:hidden dark:border-slate-900 dark:bg-slate-950">
          <div className="space-y-1.5 pb-3">
            <button
              onClick={() => navigateTo('home')}
              className={`flex w-full items-center px-3 py-2 text-sm font-medium rounded-lg ${
                currentPage === 'home'
                  ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400'
                  : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-900'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => navigateTo('courses')}
              className={`flex w-full items-center px-3 py-2 text-sm font-medium rounded-lg ${
                currentPage === 'courses' || currentPage === 'course-details'
                  ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400'
                  : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-900'
              }`}
            >
              Courses
            </button>
            <button
              onClick={() => navigateTo('pricing')}
              className={`flex w-full items-center px-3 py-2 text-sm font-medium rounded-lg ${
                currentPage === 'pricing'
                  ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400'
                  : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-900'
              }`}
            >
              Pricing
            </button>
            <button
              onClick={() => navigateTo('blog')}
              className={`flex w-full items-center px-3 py-2 text-sm font-medium rounded-lg ${
                currentPage === 'blog'
                  ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400'
                  : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-900'
              }`}
            >
              Blog
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className={`flex w-full items-center px-3 py-2 text-sm font-medium rounded-lg ${
                currentPage === 'contact'
                  ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400'
                  : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-900'
              }`}
            >
              Contact
            </button>
          </div>

          <div className="border-t border-slate-100 pt-4 dark:border-slate-900">
            {user ? (
              <div className="space-y-3">
                <div className="flex items-center space-x-3 px-3">
                  <img src={user.avatar} alt={user.fullName} className="h-10 w-10 rounded-full border-2 border-indigo-400/50 object-cover" />
                  <div>
                    <h4 className="font-display text-sm font-bold text-slate-800 dark:text-white leading-tight">{user.fullName}</h4>
                    <p className="text-xs text-slate-500 truncate max-w-[180px]">{user.email}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <button
                    onClick={() => navigateTo('dashboard')}
                    className="flex w-full items-center space-x-2.5 rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-900"
                  >
                    <User className="h-4 w-4 text-slate-400" />
                    <span>My Student Dashboard</span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center space-x-2.5 rounded-xl px-3 py-2 text-left text-sm font-medium text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/20"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Log Out</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 px-2">
                <button
                  onClick={() => navigateTo('auth')}
                  className="w-full rounded-xl border border-slate-200 py-2.5 text-center text-sm font-medium text-slate-700 dark:border-slate-800 dark:text-slate-300 active:scale-95 transition-all"
                >
                  Sign In
                </button>
                <button
                  onClick={() => navigateTo('auth')}
                  className="w-full rounded-xl bg-indigo-600 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-white dark:bg-indigo-500 shadow-md active:scale-95 transition-all"
                >
                  Enroll Free
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
