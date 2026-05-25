import { BookOpen, Star, Clock, Flame } from 'lucide-react';
import { Course, UserEnrollment } from '../types';

interface CourseCardProps {
  course: Course;
  enrollment?: UserEnrollment;
  onSelect: (courseId: string) => void;
}

export default function CourseCard({ course, enrollment, onSelect }: CourseCardProps) {
  const totalLessons = course.chapters.reduce((sum, ch) => sum + ch.lessons.length, 0);

  // Helper to render rating stars
  const renderStars = (rating: number) => {
    const stars = [];
    const floor = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= floor) {
        stars.push(<Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />);
      } else if (i === floor + 1 && rating % 1 >= 0.5) {
        stars.push(<Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400 opacity-70" />);
      } else {
        stars.push(<Star key={i} className="h-3.5 w-3.5 text-slate-300 dark:text-slate-700" />);
      }
    }
    return stars;
  };

  return (
    <div
      onClick={() => onSelect(course.id)}
      className="group glow-card divide-y cursor-pointer overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xs dark:divide-slate-800/60 dark:border-slate-800/50 dark:bg-slate-950 flex flex-col h-full transition-all"
      id={`course-card-${course.id}`}
    >
      {/* Banner Cover with Level Badge */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
        <img
          src={course.coverImage}
          alt={course.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
          <span className="rounded-lg bg-slate-900/80 px-2 py-1 text-[10px] font-mono font-medium tracking-wide uppercase text-white backdrop-blur-xs">
            {course.level}
          </span>
          {course.isBestSeller && (
            <span className="rounded-lg bg-amber-500/90 text-slate-950 px-2 py-1 text-[10px] font-mono font-bold tracking-wide uppercase flex items-center gap-1">
              <Flame className="h-3 w-3 fill-slate-950" />
              Bestseller
            </span>
          )}
        </div>
        <div className="absolute bottom-3 right-3 rounded-lg bg-white/95 text-slate-900 px-2 py-1 text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm dark:bg-slate-900/95 dark:text-white backdrop-blur-xs">
          {course.category}
        </div>
      </div>

      {/* Primary Card Details */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-bold text-slate-950 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400 transition-colors line-clamp-2 leading-tight">
          {course.title}
        </h3>
        <p className="mt-1.5 text-xs text-slate-400 line-clamp-2 flex-grow leading-relaxed">
          {course.description}
        </p>

        {/* Dynamic Star Ratings */}
        <div className="mt-3.5 flex items-center space-x-1.5">
          <span className="text-xs font-bold font-mono text-slate-900 dark:text-white">
            {course.rating.toFixed(2)}
          </span>
          <div className="flex">{renderStars(course.rating)}</div>
          <span className="text-[10px] text-slate-400 font-mono">
            ({course.reviewsCount.toLocaleString()})
          </span>
        </div>

        {/* Metas info */}
        <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center space-x-1">
            <Clock className="h-3.5 w-3.5 text-slate-400" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <BookOpen className="h-3.5 w-3.5 text-slate-400" />
            <span>{totalLessons} lessons</span>
          </div>
        </div>
      </div>

      {/* Pricing / Progress Bar Bottom Row */}
      <div className="bg-slate-50/50 p-4 dark:bg-slate-900/20">
        {enrollment ? (
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono font-bold mb-1.5">
              <span className="text-indigo-600 dark:text-indigo-400">ENROLLED</span>
              <span className="text-slate-700 dark:text-slate-300">{Math.round(enrollment.progress)}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-indigo-600"
                style={{ width: `${enrollment.progress}%` }}
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className="h-6 w-6 rounded-full object-cover border border-slate-200"
              />
              <span className="text-[10px] font-medium text-slate-500 limit-name leading-none">
                {course.instructor.name.split(' ').slice(1).join(' ')}
              </span>
            </div>
            <div className="text-right">
              {course.price === 0 ? (
                <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20 px-2 py-0.5 rounded-md leading-none">
                  FREE
                </span>
              ) : (
                <div className="flex items-baseline space-x-1 justify-end">
                  <span className="text-xs text-rose-500 font-mono line-through opacity-55">
                    ${(course.price * 1.5).toFixed(2)}
                  </span>
                  <span className="text-sm font-display font-black text-slate-950 dark:text-white leading-none">
                    ${course.price.toFixed(2)}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
