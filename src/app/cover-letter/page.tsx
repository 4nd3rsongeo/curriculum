import CoverLetter from "@/components/CoverLetter";
import Controls from "@/components/Controls";

export default function CoverLetterPage() {
  return (
    <main className="min-h-screen py-10 print:py-0 print:bg-white bg-gray-100">
      <Controls />
      <div className="resume-container overflow-hidden">
        <CoverLetter />
      </div>
      <div className="mt-8 text-center text-gray-400 text-xs no-print pb-20">
        <p>Press Ctrl+P to save as PDF. Ensure "Background Graphics" is enabled in print settings.</p>
      </div>
    </main>
  );
}
