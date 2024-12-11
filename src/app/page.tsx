import dynamic from 'next/dynamic';


const HeroSection = dynamic(() => import('@/components/HeroSection'), {
  loading: () => <div className="h-screen bg-slate-500" />
});

const AboutSection = dynamic(() => import('@/components/AboutSection'), {
  loading: () => <div className="min-h-screen" />
});

const AboutSectionWork = dynamic(() => import('@/components/AboutSectionWork'), {
  loading: () => <div className="min-h-screen" />
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AboutSectionWork />
    </>
  );
}