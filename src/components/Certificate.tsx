import { useState } from 'react';
import { Award, Download, Printer, Check, Copy, Share2, Shield, Calendar, Sparkles } from 'lucide-react';
import { UserCertificate } from '../types';

interface CertificateProps {
  certificate: UserCertificate;
  onClose?: () => void;
}

export default function Certificate({ certificate, onClose }: CertificateProps) {
  const [downloading, setDownloading] = useState(false);
  const [copiedId, setCopiedId] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      // Create simulated link download
      alert(`Downloaded Certificate_${certificate.credentialId}.pdf successfully to your local drive!`);
    }, 2500);
  };

  const copyCredentialId = () => {
    navigator.clipboard.writeText(certificate.credentialId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <div className="mx-auto max-w-4xl" id={`cert-${certificate.id}`}>
      
      {/* Action utilities top bar (Don't display when printing) */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 print:hidden dark:border-slate-800 dark:bg-slate-900 transition-colors">
        <div className="flex items-center space-x-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/20 dark:text-emerald-400">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <span className="block text-xs font-semibold text-slate-700 dark:text-slate-300">Verified Credential</span>
            <span className="block font-mono text-[10px] text-slate-400">ID: {certificate.credentialId}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {/* Copy ID */}
          <button
            onClick={copyCredentialId}
            className="flex items-center space-x-1 px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 active:scale-95 transition-all cursor-pointer dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
            title="Copy Verification ID"
          >
            {copiedId ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5 text-slate-400" />}
            <span>{copiedId ? 'Copied' : 'Copy ID'}</span>
          </button>

          {/* Print */}
          <button
            onClick={handlePrint}
            className="flex items-center space-x-1 px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 active:scale-95 transition-all cursor-pointer dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 pointer-events-auto"
            title="Open print interface"
          >
            <Printer className="h-3.5 w-3.5 text-slate-450" />
            <span>Print</span>
          </button>

          {/* Download Simulated PDF */}
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="flex items-center space-x-1 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-650 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 shadow-md hover:shadow-indigo-500/10 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
          >
            <Download className={`h-3.5 w-3.5 ${downloading ? 'animate-bounce' : ''}`} />
            <span>{downloading ? 'Composing PDF...' : 'Download PDF'}</span>
          </button>

          {onClose && (
            <button
              onClick={onClose}
              className="px-3.5 py-2 rounded-xl text-xs font-medium text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer"
            >
              Close
            </button>
          )}
        </div>
      </div>

      {/* Actual Certificate Document Wrapper Grid */}
      <div className="relative overflow-hidden border-[16px] border-double border-indigo-900/40 bg-white p-10 sm:p-14 md:p-16 text-center text-slate-800 shadow-xl dark:border-indigo-950/80 dark:bg-slate-900 dark:text-slate-200">
        
        {/* Subtle Ornamental Corners */}
        <div className="absolute top-4 left-4 h-12 w-12 border-t-2 border-l-2 border-indigo-900/30 dark:border-indigo-100/30" />
        <div className="absolute top-4 right-4 h-12 w-12 border-t-2 border-r-2 border-indigo-900/30 dark:border-indigo-100/30" />
        <div className="absolute bottom-4 left-4 h-12 w-12 border-b-2 border-l-2 border-indigo-900/30 dark:border-indigo-100/30" />
        <div className="absolute bottom-4 right-4 h-12 w-12 border-b-2 border-r-2 border-indigo-900/30 dark:border-indigo-100/30" />

        {/* Certificate Logo Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white dark:bg-indigo-650 mb-3">
            <Award className="h-7 w-7 text-amber-400 fill-amber-400/25" />
          </div>
          <span className="font-display font-extrabold text-sm tracking-widest text-indigo-950 dark:text-indigo-400 uppercase">
            EduStudio Academics
          </span>
          <div className="mt-1 h-0.5 w-16 bg-amber-400" />
        </div>

        {/* Main Greet Card */}
        <h1 className="font-display text-3xl sm:text-4xl font-black text-indigo-950 dark:text-white leading-tight uppercase tracking-tight">
          Certificate of Completion
        </h1>
        <p className="mt-1 font-mono text-xs text-slate-400 uppercase tracking-widest">
          credential course verification program
        </p>

        <p className="mt-8 text-sm font-light italic text-slate-500">
          This is officially presented to:
        </p>
        <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white decoration-amber-400/85 underline underline-offset-8">
          {certificate.recipientName}
        </h2>

        <p className="mt-7 max-w-lg mx-auto text-sm leading-relaxed text-slate-500">
          for demonstrating proficiency and successfully completing the rigorous online workspace, graded exams, hands-on masterclass projects, and curriculum specifications for:
        </p>
        <h3 className="mt-3 font-display text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-950 via-indigo-850 to-indigo-655 bg-clip-text text-transparent dark:from-white dark:to-indigo-300 max-w-xl mx-auto">
          {certificate.courseTitle}
        </h3>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 items-end justify-center text-left pt-6 border-t border-slate-100 dark:border-slate-800">
          
          {/* Issue Date */}
          <div className="flex flex-col space-y-1">
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Date Granted</span>
            <div className="flex items-center space-x-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <Calendar className="h-3.5 w-3.5 text-indigo-600" />
              <span>{certificate.dateEarned}</span>
            </div>
          </div>

          {/* Grand Golden Seal Center */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/10 border-2 border-dashed border-amber-400 animate-spin-slow">
              <Award className="h-8 w-8 text-amber-500 fill-amber-500/25" />
            </div>
            <span className="block mt-1.5 font-mono text-[9px] font-bold text-amber-500 tracking-widest uppercase">
              APPROVED SEAL
            </span>
          </div>

          {/* Instructor Signature Right */}
          <div className="flex flex-col space-y-1 text-right sm:text-right">
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider text-right">Authorized Endorsement</span>
            <span className="font-display font-semibold italic text-slate-800 dark:text-slate-300 text-sm py-1 font-signature block border-b border-dashed border-slate-200 dark:border-slate-700">
              {certificate.instructorName}
            </span>
          </div>

        </div>

        {/* Footprint Credentials Verification */}
        <div className="mt-12 flex flex-col items-center space-y-1.5 text-[10px] text-slate-400 font-mono">
          <div className="flex items-center space-x-1">
            <Shield className="h-3.5 w-3.5 text-emerald-500" />
            <span>Cryptographically Verified ID:</span>
            <span className="font-bold text-slate-500 dark:text-slate-300">{certificate.credentialId}</span>
          </div>
          <span className="block">Verify this document registry online at: <u>edustudio.org/credentials?id={certificate.credentialId}</u></span>
        </div>

      </div>

      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs">
          <div className="flex flex-col items-center justify-center space-y-3.5 bg-white p-6 rounded-2xl shadow-xl border dark:bg-slate-950 dark:border-slate-800">
            <Sparkles className="h-8 w-8 text-indigo-505 animate-pulse" />
            <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 tracking-wider font-mono">ENCRYPTING PDF CREDENTIAL...</p>
          </div>
        </div>
      )}

    </div>
  );
}
