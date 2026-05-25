import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw, FastForward, CheckCircle, Maximize2, Sparkles, Settings } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  isCompleted: boolean;
  onToggleComplete: () => void;
}

export default function VideoPlayer({ videoUrl, title, isCompleted, onToggleComplete }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Synchronize playing states
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration || 0);
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const value = parseFloat(e.target.value);
    videoRef.current.currentTime = value;
    setCurrentTime(value);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const value = parseFloat(e.target.value);
    setVolume(value);
    videoRef.current.volume = value;
    setIsMuted(value === 0);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    videoRef.current.muted = nextMuted;
  };

  const handleSpeedChange = (rate: number) => {
    if (!videoRef.current) return;
    setPlaybackRate(rate);
    videoRef.current.playbackRate = rate;
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    const element = videoRef.current.parentElement;
    if (!element) return;

    if (!document.fullscreenElement) {
      element.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {});
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(() => {});
    }
  };

  // Skip forward 10 seconds
  const skipForward = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = Math.min(videoRef.current.currentTime + 10, duration);
  };

  // Replay backward 10 seconds
  const skipBackward = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = Math.max(videoRef.current.currentTime - 10, 0);
  };

  // Helper to format time strings (e.g. 02:45)
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 65 % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Auto-complete triggers when video plays near the end
  useEffect(() => {
    if (duration > 0 && currentTime >= duration - 1 && !isCompleted) {
      onToggleComplete();
    }
  }, [currentTime, duration, isCompleted]);

  // Handle controls hide countdown
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 2500);
  };

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    };
  }, []);

  return (
    <div 
      className="group/player relative overflow-hidden rounded-2xl bg-slate-950 aspect-video shadow-2xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
      id="custom-video-player"
    >
      {/* Custom HTML5 Video tag */}
      <video
        ref={videoRef}
        src={videoUrl}
        className="h-full w-full object-contain cursor-pointer"
        onClick={togglePlay}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        playsInline
      />

      {/* Playback Overlay Center Button (visible when paused) */}
      {!isPlaying && (
        <div 
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px] cursor-pointer transition-opacity"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-white shadow-xl shadow-indigo-600/30 hover:scale-110 active:scale-95 transition-all">
            <Play className="h-7 w-7 fill-white translate-x-0.5" />
          </div>
        </div>
      )}

      {/* Video controls bottom bar */}
      <div 
        className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 pt-10 flex flex-col space-y-3 transition-all duration-300 ${
          showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        {/* Seek Bar progress timeline */}
        <div className="flex items-center space-x-3">
          <span className="text-[10px] font-mono font-medium text-slate-300">
            {formatTime(currentTime)}
          </span>
          <input
            type="range"
            min={0}
            max={duration || 100}
            value={currentTime}
            onChange={handleSeekChange}
            className="h-1 w-full bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500 hover:h-1.5 transition-all"
            id="video-seek-bar"
          />
          <span className="text-[10px] font-mono font-medium text-slate-300">
            {formatTime(duration)}
          </span>
        </div>

        {/* Toolbar keys: Play, Vol, Speed, Complete Status, Fullscreen */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Play Button */}
            <button
              onClick={togglePlay}
              className="text-white hover:text-indigo-400 active:scale-95 transition-all"
              aria-label={isPlaying ? "Pause Video" : "Play Video"}
            >
              {isPlaying ? <Pause className="h-5 w-5 fill-white" /> : <Play className="h-5 w-5 fill-white" />}
            </button>

            {/* Back to 10s */}
            <button
              onClick={skipBackward}
              className="text-white hover:text-slate-350 active:scale-90 transition-all pointer-events-auto"
              title="Skip 10 seconds back"
              aria-label="Skip 10 seconds back"
            >
              <RotateCcw className="h-4 w-4" />
            </button>

            {/* Fwd 10s */}
            <button
              onClick={skipForward}
              className="text-white hover:text-slate-350 active:scale-90 transition-all pointer-events-auto"
              title="Skip 10 seconds forward"
              aria-label="Skip 10 seconds forward"
            >
              <FastForward className="h-4 w-4" />
            </button>

            {/* Volume control slider */}
            <div className="flex items-center space-x-1.5">
              <button
                onClick={toggleMute}
                className="text-white hover:text-indigo-400 focus:outline-hidden"
                aria-label={isMuted ? "Unmute Volume" : "Mute Volume"}
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-12 sm:w-16 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                id="video-volume-slider"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2.5 sm:space-x-4">
            {/* Speed controller labels */}
            <div className="flex space-x-1 border border-slate-800 rounded-lg bg-slate-900/50 p-0.5">
              {[1, 1.5, 2].map((rate) => (
                <button
                  key={rate}
                  onClick={() => handleSpeedChange(rate)}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold transition-all cursor-pointer ${
                    playbackRate === rate
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {rate}x
                </button>
              ))}
            </div>

            {/* Mark completed manual sync */}
            <button
              onClick={onToggleComplete}
              className={`flex items-center space-x-1.5 rounded-lg px-2.5 py-1 text-[11px] font-mono font-bold border transition-all active:scale-95 cursor-pointer ${
                isCompleted
                  ? 'bg-emerald-600/20 border-emerald-500/50 text-emerald-400'
                  : 'bg-indigo-600/20 border-indigo-500/50 text-indigo-400 hover:bg-indigo-600/30'
              }`}
              title="Toggle Lesson Completion Status"
            >
              <CheckCircle className={`h-3.5 w-3.5 ${isCompleted ? 'fill-emerald-400 text-slate-950' : ''}`} />
              <span className="hidden sm:inline">{isCompleted ? 'COMPLETED' : 'MARK DONE'}</span>
            </button>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="text-white hover:text-indigo-400 cursor-pointer"
              title="Fullscreen"
              aria-label="Fullscreen"
            >
              <Maximize2 className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Sparkle Info for Interactive Experience */}
      <div className="absolute top-4 right-4 flex items-center space-x-1.5 bg-slate-950/80 px-2.5 py-1 rounded-lg text-[10px] text-indigo-400 font-mono font-bold tracking-wide uppercase border border-slate-800/80 backdrop-blur-xs">
        <Sparkles className="h-3 w-3 animate-pulse" />
        <span>HD streaming</span>
      </div>
    </div>
  );
}
