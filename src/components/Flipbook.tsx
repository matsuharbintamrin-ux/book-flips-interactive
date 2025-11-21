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
  const [totalPages, setTotalPages] = useState(9);
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
            <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              <div className="text-center p-8 relative z-10">
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                    <span className="text-4xl">🔥</span>
                  </div>
                  <h1 className="text-3xl font-bold mb-2">CV SURYA GRISSE</h1>
                </div>
                <h2 className="text-5xl font-bold mb-6">PABRIK ARANG</h2>
                <h3 className="text-4xl font-bold mb-6">BERKUALITAS</h3>
                <p className="text-xl opacity-90 max-w-md mx-auto">
                  Menghasilkan arang premium berkualitas ekspor dengan proses ramah lingkungan
                </p>
                <div className="mt-8 text-sm opacity-75">
                  Click to explore →
                </div>
              </div>
            </div>
          </div>

          {/* Page 1 - Pengenalan */}
          <div className="page bg-white shadow-2xl p-10">
            <h1 className="text-4xl font-bold mb-6 text-gray-800 border-b-4 border-green-500 pb-3 inline-block">PENGENALAN</h1>
            <div className="mt-8 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-bold text-green-600">CV Surya Grisse</span> adalah perusahaan produsen arang batok kelapa pertama di Indonesia yang mengedepankan kualitas terbaik dengan teknologi ramah lingkungan serta didukung pengalaman lebih dari 15 tahun di bidangnya.
              </p>
              
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-gray-800 mb-3 text-xl">Mengapa Memilih Kami?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Pengalaman lebih dari 15 tahun</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Kualitas premium berkualitas ekspor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Teknologi ramah lingkungan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Standar produksi internasional</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-white">
                <p className="text-center font-semibold">
                  Dipercaya oleh berbagai perusahaan besar di Indonesia dan internasional
                </p>
              </div>
            </div>
          </div>

          {/* Page 2 - Visi Misi */}
          <div className="page bg-white shadow-2xl p-10">
            <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-4 border-green-500 pb-3 inline-block">VISI DAN MISI</h1>
            
            <div className="mt-8 space-y-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200">
                <h2 className="text-2xl font-bold text-green-700 mb-4">💡 VISI</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Menjadi perusahaan unggul yang berkelanjutan, berwawasan keluarga, teknologi, dan ramah lingkungan.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">🎯 MISI</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">1.</span>
                    <span className="leading-relaxed">Memberikan kompetensi dengan berbagai pihak, baik dengan user, supplier, maupun lingkungan sekitar.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">2.</span>
                    <span className="leading-relaxed">Meningkatkan kualitas produksi dengan teknologi ramah lingkungan.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl">3.</span>
                    <span className="leading-relaxed">Menjalankan bisnis berkelanjutan dengan integritas dan inovasi.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Page 3 - Pabrik Kami */}
          <div className="page bg-white shadow-2xl p-10">
            <h1 className="text-4xl font-bold mb-6 text-gray-800 border-b-4 border-green-500 pb-3 inline-block">PABRIK KAMI</h1>
            
            <div className="mt-6 space-y-6">
              <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                <p className="text-gray-400 text-lg">🏭 Foto Pabrik</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">Kualitas Arang Terbaik</h2>
                <p className="text-gray-700 leading-relaxed">
                  Setiap proses produksi kami dilakukan dengan standar tinggi dan teknologi modern yang menjaga mutu, efisiensi, serta ramah lingkungan.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="text-3xl mb-2">⚡</div>
                    <h3 className="font-bold text-gray-800 mb-1">Teknologi Modern</h3>
                    <p className="text-sm text-gray-600">Peralatan produksi terkini</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="text-3xl mb-2">🌱</div>
                    <h3 className="font-bold text-gray-800 mb-1">Ramah Lingkungan</h3>
                    <p className="text-sm text-gray-600">Proses berkelanjutan</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <div className="text-3xl mb-2">🏆</div>
                    <h3 className="font-bold text-gray-800 mb-1">Standar Tinggi</h3>
                    <p className="text-sm text-gray-600">Kualitas terjamin</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <div className="text-3xl mb-2">👷</div>
                    <h3 className="font-bold text-gray-800 mb-1">Tim Profesional</h3>
                    <p className="text-sm text-gray-600">Tenaga ahli berpengalaman</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Page 4 - Produksi */}
          <div className="page bg-white shadow-2xl p-10">
            <h1 className="text-4xl font-bold mb-6 text-gray-800 border-b-4 border-green-500 pb-3 inline-block">PRODUKSI</h1>
            
            <div className="mt-6 space-y-4">
              <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">📸 Proses Produksi 1</p>
              </div>
              <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">📸 Proses Produksi 2</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200 mt-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">Proses Produksi Berkualitas</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kami menggunakan teknologi modern dalam setiap tahap produksi untuk menghasilkan arang batok kelapa berkualitas premium.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-medium">Seleksi Bahan</span>
                  <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">Pembakaran</span>
                  <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-medium">Pendinginan</span>
                  <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-medium">Quality Control</span>
                  <span className="px-3 py-1 bg-pink-200 text-pink-800 rounded-full text-sm font-medium">Packaging</span>
                </div>
              </div>
            </div>
          </div>

          {/* Page 5 - Keunggulan Produk */}
          <div className="page bg-white shadow-2xl p-10">
            <h1 className="text-4xl font-bold mb-6 text-gray-800 border-b-4 border-green-500 pb-3 inline-block">KEUNGGULAN PRODUK</h1>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Komitmen kami adalah menghadirkan produk arang berkualitas tinggi yang ramah lingkungan dan siap untuk berbagai kebutuhan industri maupun rumah tangga.
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-5 rounded-lg text-white">
                <h3 className="font-bold text-xl mb-2">🏆 Kualitas Premium</h3>
                <p className="text-green-50">Arang dengan tingkat karbon tinggi dan daya bakar optimal untuk berbagai kebutuhan industri dan rumah tangga.</p>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-5 rounded-lg text-white">
                <h3 className="font-bold text-xl mb-2">🌍 Ramah Lingkungan</h3>
                <p className="text-blue-50">Diproduksi dengan metode berkelanjutan dan bahan baku terbarukan untuk menjaga kelestarian alam.</p>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-5 rounded-lg text-white">
                <h3 className="font-bold text-xl mb-2">📦 Kemasan Profesional</h3>
                <p className="text-orange-50">Tersedia dalam berbagai ukuran kemasan sesuai kebutuhan, dari retail hingga industrial scale.</p>
              </div>

              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-5 rounded-lg text-white">
                <h3 className="font-bold text-xl mb-2">🚚 Pengiriman Terpercaya</h3>
                <p className="text-purple-50">Jaringan distribusi luas ke seluruh Indonesia dan ekspor internasional dengan layanan tepat waktu.</p>
              </div>
            </div>
          </div>

          {/* Page 6 - Sertifikasi */}
          <div className="page bg-white shadow-2xl p-10">
            <h1 className="text-4xl font-bold mb-6 text-gray-800 border-b-4 border-green-500 pb-3 inline-block">SERTIFIKASI</h1>
            
            <div className="mt-8 space-y-6">
              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-to-br from-yellow-400 to-yellow-600 text-white px-8 py-4 rounded-full text-2xl font-bold shadow-lg">
                  ⭐ CERTIFIED QUALITY ⭐
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200 flex items-center justify-center h-32">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📜</div>
                    <p className="font-bold text-gray-800">ISO 9001</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200 flex items-center justify-center h-32">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🌿</div>
                    <p className="font-bold text-gray-800">ISO 14001</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-200 flex items-center justify-center h-32">
                  <div className="text-center">
                    <div className="text-4xl mb-2">✅</div>
                    <p className="font-bold text-gray-800">HALAL</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200 flex items-center justify-center h-32">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🏅</div>
                    <p className="font-bold text-gray-800">SNI</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-600 text-white p-4 rounded-lg text-center mt-6">
                <p className="font-semibold">Terdaftar dan Tersertifikasi Internasional</p>
              </div>
            </div>
          </div>

          {/* Page 7 - Klien Kami */}
          <div className="page bg-white shadow-2xl p-10">
            <h1 className="text-4xl font-bold mb-6 text-gray-800 border-b-4 border-green-500 pb-3 inline-block">KLIEN KAMI</h1>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Kami dipercaya oleh berbagai perusahaan besar dalam industri arang dan karbon untuk menyediakan produk berkualitas tinggi dan berkelanjutan.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-200 flex items-center justify-center h-24">
                <p className="font-bold text-gray-800 text-lg text-center">PT Jacobi</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-2 border-green-200 flex items-center justify-center h-24">
                <p className="font-bold text-gray-800 text-lg text-center">Maxonn Group</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-2 border-orange-200 flex items-center justify-center h-24">
                <p className="font-bold text-gray-800 text-lg text-center">PT Penyerahan Karbon</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-2 border-purple-200 flex items-center justify-center h-24">
                <p className="font-bold text-gray-800 text-lg text-center">PT Kalby Toba</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg border-2 border-pink-200 flex items-center justify-center h-24">
                <p className="font-bold text-gray-800 text-lg text-center">Barico Borneo</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg border-2 border-yellow-200 flex items-center justify-center h-24">
                <p className="font-bold text-gray-800 text-lg text-center">PT Keycoco Mas</p>
              </div>
            </div>

            <div className="mt-8 bg-green-600 text-white p-4 rounded-lg text-center">
              <p className="font-semibold">Trusted by Leading Companies Worldwide</p>
            </div>
          </div>

          {/* Page 8 - Kontak */}
          <div className="page bg-white shadow-2xl p-10">
            <h1 className="text-4xl font-bold mb-6 text-gray-800 border-b-4 border-green-500 pb-3 inline-block">HUBUNGI KAMI</h1>
            
            <div className="mt-8 space-y-6">
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-xl text-center">
                <h2 className="text-3xl font-bold mb-4">CV SURYA GRISSE</h2>
                <p className="text-xl mb-2">Produsen Arang Batok Kelapa Premium</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                  <div className="text-3xl">📱</div>
                  <div>
                    <p className="font-bold text-gray-800">WhatsApp</p>
                    <p className="text-gray-600">+62 812-3991-1995</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-green-50 p-4 rounded-lg border-2 border-green-200">
                  <div className="text-3xl">📧</div>
                  <div>
                    <p className="font-bold text-gray-800">Email</p>
                    <p className="text-gray-600">info@suryagrisse.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-orange-50 p-4 rounded-lg border-2 border-orange-200">
                  <div className="text-3xl">🌐</div>
                  <div>
                    <p className="font-bold text-gray-800">Website</p>
                    <p className="text-gray-600">www.suryagrisse.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
                  <div className="text-3xl">📍</div>
                  <div>
                    <p className="font-bold text-gray-800">Lokasi</p>
                    <p className="text-gray-600">Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-green-600 text-white p-6 rounded-lg text-center">
                <p className="text-xl font-bold mb-2">Siap Melayani Kebutuhan Anda!</p>
                <p className="text-green-100">Hubungi kami untuk informasi lebih lanjut dan pemesanan</p>
              </div>
            </div>
          </div>
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
