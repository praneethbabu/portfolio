import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Header,
  Hero,
  Marquee,
  About,
  Services,
  Projects,
  Skills,
  Training,
  Experience,
  Mission,
  Contact,
  Footer,
  ScrollProgress,
  DynamicIslandNav,
  ResumeModal,
} from "./components";
import { PERSONAL_INFO } from "./data/portfolioData";

function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const pageTitle = `${PERSONAL_INFO.name} | Senior Software Engineer, AI Generalist & Tech Program Lead`;
  const pageDescription =
    "Official portfolio of Praneeth Babu Yeddula — Senior Software Engineer, AI Product Builder, Technical Program Lead, and Technology Educator at Brainovision Solutions. Engineering intelligent applications, scalable cloud platforms, and developer education.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={PERSONAL_INFO.canonicalUrl} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={PERSONAL_INFO.canonicalUrl} />
        <meta property="og:image" content={PERSONAL_INFO.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Praneeth Babu Yeddula - Senior Software Engineer & AI Generalist"
        />
        <meta property="og:site_name" content={PERSONAL_INFO.name} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={PERSONAL_INFO.ogImage} />

        {/* Crawl Directives */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Helmet>

      {/* Top scroll-progress glow bar */}
      <ScrollProgress />

      <main className="bg-[#FAF8F5] text-[#0F172A] min-h-screen selection:bg-[#0F172A] selection:text-[#FAF8F5] relative font-sans">
        <Header onOpenResume={() => setResumeOpen(true)} />
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <Marquee />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Training />
        <Experience />
        <Mission />
        <Contact />
        <Footer />

        {/* Floating Dynamic Island Dock */}
        <DynamicIslandNav onOpenResume={() => setResumeOpen(true)} />

        {/* Interactive Resume Modal */}
        <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      </main>
    </>
  );
}

export default App;