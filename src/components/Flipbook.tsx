import { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize, Grid3x3, Play, Volume2, Share2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FlipbookProps {
  className?: string;
}

export const Flipbook = ({ className }: FlipbookProps) => {
  const bookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(14);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goToNextPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  const goToPrevPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  const onFlip = (e: any) => {
    setCurrentPage(e.data);
  };

  return (
    <div className={cn("relative w-full h-screen bg-background overflow-hidden", className)}>
      {/* Navigation Arrows */}
      <Button
        onClick={goToPrevPage}
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-accent/80 hover:bg-accent text-foreground"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        onClick={goToNextPage}
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-accent/80 hover:bg-accent text-foreground"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Flipbook Container */}
      <div className="flex items-center justify-center h-full pt-8 pb-24">
        <HTMLFlipBook
          ref={bookRef}
          width={550}
          height={733}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={onFlip}
          className="flipbook-shadow"
          style={{}}
          startPage={0}
          drawShadow={true}
          flippingTime={1000}
          usePortrait={true}
          startZIndex={0}
          autoSize={true}
          maxShadowOpacity={0.5}
          showPageCorners={true}
          disableFlipByClick={false}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={50}
        >
          {/* Cover Page */}
          <div className="page bg-white shadow-2xl">
            <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <div className="text-center p-8">
                <h1 className="text-5xl font-bold mb-4">Interactive</h1>
                <h2 className="text-4xl font-bold">Flipbook</h2>
                <p className="mt-8 text-xl opacity-90">Click to explore</p>
              </div>
            </div>
          </div>

          {/* Page 1 */}
          <div className="page bg-white shadow-2xl p-12">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Welcome</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              This is an interactive flipbook experience. Navigate through pages using the arrow buttons
              or by clicking on the page corners.
            </p>
            <div className="mt-8 space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Navigation</h3>
                <p className="text-sm text-gray-600">Use arrows or click page corners to flip</p>
              </div>
            </div>
          </div>

          {/* Page 2 - Interactive Elements */}
          <div className="page bg-white shadow-2xl p-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">ADD INTERACTIVITY</h1>
            <p className="text-lg text-gray-600 mb-8">14 multimedia elements</p>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2 p-3 bg-blue-100 rounded-lg">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white">
                  <span className="text-sm">📷</span>
                </div>
                <span className="text-sm font-medium">Image</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-red-100 rounded-lg">
                <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white">
                  <span className="text-sm">🔗</span>
                </div>
                <span className="text-sm font-medium">Link</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-orange-100 rounded-lg">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white">
                  <span className="text-sm">T</span>
                </div>
                <span className="text-sm font-medium">Text</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-orange-100 rounded-lg">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white">
                  <span className="text-sm">🎥</span>
                </div>
                <span className="text-sm font-medium">Video/Audio</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-green-100 rounded-lg">
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white">
                  <span className="text-sm">◼</span>
                </div>
                <span className="text-sm font-medium">Shape</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-cyan-100 rounded-lg">
                <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center text-white">
                  <span className="text-sm">•</span>
                </div>
                <span className="text-sm font-medium">Hotspot</span>
              </div>
            </div>
          </div>

          {/* Page 3 - Trigger Actions */}
          <div className="page bg-white shadow-2xl p-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">ADD INTERACTIVITY</h1>
            <p className="text-lg text-gray-600 mb-8">11 trigger actions <span className="text-sm text-gray-400">(Click to preview effects)</span></p>
            
            <div className="grid grid-cols-2 gap-4">
              <button className="px-6 py-4 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors">
                Go to Page
              </button>
              <button className="px-6 py-4 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-colors">
                Open Link
              </button>
              <button className="px-6 py-4 bg-cyan-500 text-white rounded-full font-medium hover:bg-cyan-600 transition-colors">
                Phone Call
              </button>
              <button className="px-6 py-4 bg-teal-500 text-white rounded-full font-medium hover:bg-teal-600 transition-colors">
                Pop up Window
              </button>
              <button className="px-6 py-4 bg-pink-500 text-white rounded-full font-medium hover:bg-pink-600 transition-colors">
                Play Effects
              </button>
              <button className="px-6 py-4 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition-colors">
                Pop up Video
              </button>
              <button className="px-6 py-4 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition-colors">
                Pop up Image
              </button>
              <button className="px-6 py-4 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors">
                More
              </button>
            </div>
          </div>

          {/* Additional Pages */}
          <div className="page bg-white shadow-2xl p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Features</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 text-xl">✓</span>
                <span>Realistic page flip animations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 text-xl">✓</span>
                <span>Interactive multimedia elements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 text-xl">✓</span>
                <span>Mobile-friendly responsive design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 text-xl">✓</span>
                <span>Fullscreen viewing mode</span>
              </li>
            </ul>
          </div>

          <div className="page bg-white shadow-2xl p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Content Page</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Add your own content here. You can include text, images, videos, and interactive elements.
            </p>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-lg">
              <p className="text-gray-700 italic">
                "Design is not just what it looks like and feels like. Design is how it works."
              </p>
              <p className="text-gray-600 mt-4 text-right">- Steve Jobs</p>
            </div>
          </div>

          {/* Remaining pages */}
          {[...Array(8)].map((_, index) => (
            <div key={`page-${index + 6}`} className="page bg-white shadow-2xl p-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Page {index + 6}</h2>
              <p className="text-gray-600 leading-relaxed">
                This is page {index + 6} of your flipbook. Add your custom content here.
                You can include text, images, videos, and interactive elements to make
                your flipbook engaging and interactive.
              </p>
              <div className="mt-8 h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                <p className="text-gray-400 text-lg">Content Area</p>
              </div>
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      {/* Bottom Toolbar */}
      <div className="absolute bottom-0 left-0 right-0 bg-accent/95 backdrop-blur-sm border-t border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left Controls */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted">
                <ZoomIn className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted">
                <ZoomOut className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted">
                <Grid3x3 className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted">
                <Play className="w-5 h-5" />
              </Button>
            </div>

            {/* Center - Page Counter */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-foreground font-medium">
                {currentPage + 1} / {totalPages}
              </span>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted">
                <Volume2 className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted">
                <Share2 className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted">
                <Mail className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted">
                <Maximize className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Button Tooltip */}
      <div className="absolute bottom-20 right-1/2 transform translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
        Click to view in fullscreen
      </div>
    </div>
  );
};
