import { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize, Grid3x3, Play, Volume2, Share2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import charcoalHero from "@/assets/charcoal-hero.jpg";
import factoryInterior from "@/assets/factory-interior.jpg";
import sustainability from "@/assets/sustainability.jpg";
import productionProcess from "@/assets/production-process.jpg";
import certifications from "@/assets/certifications.jpg";
import warehouse from "@/assets/warehouse.jpg";
import productShowcase from "@/assets/product-showcase.jpg";

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
          <div className="page bg-white shadow-2xl relative overflow-hidden">
            <img 
              src={charcoalHero} 
              alt="Premium Coconut Shell Charcoal" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/90 to-green-800/90"></div>
            <div className="h-full w-full flex items-center justify-center text-white relative z-10">
              <div className="text-center p-8">
                <div className="mb-6">
                  <div className="w-32 h-32 mx-auto mb-6 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30">
                    <span className="text-6xl">🔥</span>
                  </div>
                  <h1 className="text-4xl font-bold mb-2 tracking-wide">CV SURYA GRISSE</h1>
                </div>
                <h2 className="text-6xl font-bold mb-4 tracking-tight">PABRIK ARANG</h2>
                <h3 className="text-5xl font-bold mb-8 tracking-tight">BERKUALITAS</h3>
                <div className="max-w-2xl mx-auto mb-8">
                  <p className="text-2xl opacity-95 leading-relaxed">
                    Menghasilkan arang premium berkualitas ekspor dengan proses ramah lingkungan
                  </p>
                </div>
                <div className="mt-12 text-lg opacity-80 animate-pulse">
                  Click to explore →
                </div>
              </div>
            </div>
          </div>

          {/* Page 1 - Pengenalan */}
          <div className="page bg-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full">
              <img 
                src={sustainability} 
                alt="Sustainable Coconut Farm" 
                className="w-full h-full object-cover opacity-30"
              />
            </div>
            <div className="relative z-10 p-10">
              <h1 className="text-5xl font-bold mb-8 text-gray-800 border-b-4 border-green-500 pb-3 inline-block">PENGENALAN</h1>
              <div className="mt-8 space-y-6 max-w-xl">
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  <span className="font-bold text-green-600 text-2xl">CV Surya Grisse</span> adalah perusahaan produsen arang batok kelapa pertama di Indonesia yang mengedepankan kualitas terbaik dengan teknologi ramah lingkungan serta didukung pengalaman lebih dari 15 tahun di bidangnya.
                </p>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200 shadow-lg">
                  <h3 className="font-bold text-gray-800 mb-4 text-2xl">Mengapa Memilih Kami?</h3>
                  <ul className="space-y-3 text-gray-700 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold text-2xl">✓</span>
                      <span>Pengalaman lebih dari 15 tahun</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold text-2xl">✓</span>
                      <span>Kualitas premium berkualitas ekspor</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold text-2xl">✓</span>
                      <span>Teknologi ramah lingkungan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold text-2xl">✓</span>
                      <span>Standar produksi internasional</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 p-5 bg-gradient-to-r from-green-500 to-green-600 rounded-xl text-white shadow-lg">
                  <p className="text-center font-bold text-lg">
                    Dipercaya oleh berbagai perusahaan besar di Indonesia dan internasional
                  </p>
                </div>
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
            <h1 className="text-5xl font-bold mb-6 text-gray-800 border-b-4 border-green-500 pb-3 inline-block">PABRIK KAMI</h1>
            
            <div className="mt-6 space-y-6">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={factoryInterior} 
                  alt="Factory Interior" 
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-800">Kualitas Arang Terbaik</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Setiap proses produksi kami dilakukan dengan standar tinggi dan teknologi modern yang menjaga mutu, efisiensi, serta ramah lingkungan.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl border-2 border-green-200 shadow-md">
                    <div className="text-4xl mb-2">⚡</div>
                    <h3 className="font-bold text-gray-800 mb-1 text-lg">Teknologi Modern</h3>
                    <p className="text-sm text-gray-600">Peralatan produksi terkini</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border-2 border-blue-200 shadow-md">
                    <div className="text-4xl mb-2">🌱</div>
                    <h3 className="font-bold text-gray-800 mb-1 text-lg">Ramah Lingkungan</h3>
                    <p className="text-sm text-gray-600">Proses berkelanjutan</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-xl border-2 border-orange-200 shadow-md">
                    <div className="text-4xl mb-2">🏆</div>
                    <h3 className="font-bold text-gray-800 mb-1 text-lg">Standar Tinggi</h3>
                    <p className="text-sm text-gray-600">Kualitas terjamin</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl border-2 border-purple-200 shadow-md">
                    <div className="text-4xl mb-2">👷</div>
                    <h3 className="font-bold text-gray-800 mb-1 text-lg">Tim Profesional</h3>
                    <p className="text-sm text-gray-600">Tenaga ahli berpengalaman</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Page 4 - Produksi */}
          <div className="page bg-white shadow-2xl p-10">
            <h1 className="text-5xl font-bold mb-6 text-gray-800 border-b-4 border-green-500 pb-3 inline-block">PRODUKSI</h1>
            
            <div className="mt-6 space-y-5">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={productionProcess} 
                  alt="Production Process" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={warehouse} 
                  alt="Warehouse Storage" 
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200 shadow-lg mt-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Proses Produksi Berkualitas</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Kami menggunakan teknologi modern dalam setiap tahap produksi untuk menghasilkan arang batok kelapa berkualitas premium.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-bold shadow-md">Seleksi Bahan</span>
                  <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-bold shadow-md">Pembakaran</span>
                  <span className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-bold shadow-md">Pendinginan</span>
                  <span className="px-4 py-2 bg-purple-500 text-white rounded-full text-sm font-bold shadow-md">Quality Control</span>
                  <span className="px-4 py-2 bg-pink-500 text-white rounded-full text-sm font-bold shadow-md">Packaging</span>
                </div>
              </div>
            </div>
          </div>

          {/* Page 5 - Keunggulan Produk */}
          <div className="page bg-white shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/3 h-full opacity-20">
              <img 
                src={productShowcase} 
                alt="Product Showcase" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 p-10">
              <h1 className="text-5xl font-bold mb-6 text-gray-800 border-b-4 border-green-500 pb-3 inline-block">KEUNGGULAN PRODUK</h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium max-w-2xl">
                Komitmen kami adalah menghadirkan produk arang berkualitas tinggi yang ramah lingkungan dan siap untuk berbagai kebutuhan industri maupun rumah tangga.
              </p>

              <div className="space-y-5 max-w-2xl">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl text-white shadow-xl transform hover:scale-105 transition-transform">
                  <h3 className="font-bold text-2xl mb-2">🏆 Kualitas Premium</h3>
                  <p className="text-green-50 text-lg">Arang dengan tingkat karbon tinggi dan daya bakar optimal untuk berbagai kebutuhan industri dan rumah tangga.</p>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white shadow-xl transform hover:scale-105 transition-transform">
                  <h3 className="font-bold text-2xl mb-2">🌍 Ramah Lingkungan</h3>
                  <p className="text-blue-50 text-lg">Diproduksi dengan metode berkelanjutan dan bahan baku terbarukan untuk menjaga kelestarian alam.</p>
                </div>

                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-xl text-white shadow-xl transform hover:scale-105 transition-transform">
                  <h3 className="font-bold text-2xl mb-2">📦 Kemasan Profesional</h3>
                  <p className="text-orange-50 text-lg">Tersedia dalam berbagai ukuran kemasan sesuai kebutuhan, dari retail hingga industrial scale.</p>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-xl text-white shadow-xl transform hover:scale-105 transition-transform">
                  <h3 className="font-bold text-2xl mb-2">🚚 Pengiriman Terpercaya</h3>
                  <p className="text-purple-50 text-lg">Jaringan distribusi luas ke seluruh Indonesia dan ekspor internasional dengan layanan tepat waktu.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Page 6 - Sertifikasi */}
          <div className="page bg-white shadow-2xl p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-yellow-100 to-transparent opacity-50"></div>
            <div className="relative z-10">
              <h1 className="text-5xl font-bold mb-6 text-gray-800 border-b-4 border-green-500 pb-3 inline-block">SERTIFIKASI</h1>
              
              <div className="mt-8 space-y-6">
                <div className="text-center mb-10">
                  <div className="inline-block bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-white px-10 py-5 rounded-2xl text-3xl font-bold shadow-2xl transform hover:scale-105 transition-transform">
                    ⭐ CERTIFIED QUALITY ⭐
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden shadow-2xl mb-8">
                  <img 
                    src={certifications} 
                    alt="Certifications" 
                    className="w-full h-48 object-cover"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-7 rounded-2xl border-3 border-blue-300 flex items-center justify-center h-36 shadow-xl">
                    <div className="text-center">
                      <div className="text-5xl mb-3">📜</div>
                      <p className="font-bold text-gray-800 text-xl">ISO 9001</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-green-200 p-7 rounded-2xl border-3 border-green-300 flex items-center justify-center h-36 shadow-xl">
                    <div className="text-center">
                      <div className="text-5xl mb-3">🌿</div>
                      <p className="font-bold text-gray-800 text-xl">ISO 14001</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-7 rounded-2xl border-3 border-orange-300 flex items-center justify-center h-36 shadow-xl">
                    <div className="text-center">
                      <div className="text-5xl mb-3">✅</div>
                      <p className="font-bold text-gray-800 text-xl">HALAL</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-7 rounded-2xl border-3 border-purple-300 flex items-center justify-center h-36 shadow-xl">
                    <div className="text-center">
                      <div className="text-5xl mb-3">🏅</div>
                      <p className="font-bold text-gray-800 text-xl">SNI</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-5 rounded-xl text-center mt-8 shadow-xl">
                  <p className="font-bold text-xl">Terdaftar dan Tersertifikasi Internasional</p>
                </div>
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
