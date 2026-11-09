import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UniversalTracker } from "@/components/shared/universal-tracker";

export default function PublicTrackingPage() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] bg-mist relative overflow-hidden pb-20 pt-10">
        {/* Optional: Adds the cool background grid from your Hero section */}
        <div className="grid-bg absolute inset-0 opacity-50" aria-hidden />
        
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <UniversalTracker role="public" />
        </div>
      </main>
      <Footer />
    </>
  );
}