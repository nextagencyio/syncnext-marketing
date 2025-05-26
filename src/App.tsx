import React, { useState, useEffect, useCallback } from 'react';
import { Layout, Layers, Monitor, Server, Terminal, Check, Github, Zap, Split, ChevronDown, ArrowRight, Code, Database, Rocket, Menu, X } from 'lucide-react';
import ContactForm from './components/ContactForm';
import { useGoogleAnalytics } from './hooks/useGoogleAnalytics';

function Logo() {
  return (
    <a href="#top" className="flex items-center" aria-label="Back to top">
      <div className="flex items-center gap-2">
        <Zap className="h-7 md:h-8 text-primary flex-shrink-0" />
        <span className="font-bold text-lg md:text-xl text-gray-900 tracking-tight leading-none">
          sync<span className="text-primary">next</span>
        </span>
      </div>
    </a>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);

  // Initialize Google Analytics
  useGoogleAnalytics();

  // Memoize scroll handler
  const handleScroll = useCallback(() => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Add effect to prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(!mobileMenuOpen);
  }, [mobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <div id="top" className="min-h-screen bg-gray-50">
      {/* Contact Form */}
      <ContactForm isOpen={contactFormOpen} onClose={() => setContactFormOpen(false)} />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-md backdrop-blur-lg' : 'bg-transparent'}`} role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Logo />
            <div className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Desktop navigation">
              <a href="#features" className="text-gray-700 hover:text-primary transition-colors">Features</a>
              <a href="#architecture" className="text-gray-700 hover:text-primary transition-colors">Architecture</a>
              <a href="#github" className="text-gray-700 hover:text-primary transition-colors">GitHub</a>
              <a href="#get-started" className="text-gray-700 hover:text-primary transition-colors">Get Started</a>
              <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors">Pricing</a>
              <button
                onClick={() => setContactFormOpen(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-purple-700 transition-colors"
                aria-label="Open contact form"
              >
                Contact Us
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-600 hover:text-primary focus:outline-none"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu backdrop */}
        <div
          className={`fixed inset-0 bg-gray-800/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          onClick={closeMobileMenu}
          aria-hidden="true"
        ></div>

        {/* Off-canvas menu */}
        <div
          id="mobile-menu"
          className={`md:hidden fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="flex justify-between items-center h-16 px-4 sm:px-6 border-b bg-white">
            <Logo />
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-md text-gray-600 hover:text-primary focus:outline-none"
              aria-label="Close mobile menu"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="px-4 pt-6 pb-6 overflow-y-auto max-h-[calc(100vh-4rem)] bg-white" role="navigation" aria-label="Mobile navigation">
            <a href="#features" onClick={closeMobileMenu} className="block py-3 text-base font-medium text-gray-700 hover:text-primary border-b border-gray-100">Features</a>
            <a href="#architecture" onClick={closeMobileMenu} className="block py-3 text-base font-medium text-gray-700 hover:text-primary border-b border-gray-100">Architecture</a>
            <a href="#github" onClick={closeMobileMenu} className="block py-3 text-base font-medium text-gray-700 hover:text-primary border-b border-gray-100">GitHub</a>
            <a href="#get-started" onClick={closeMobileMenu} className="block py-3 text-base font-medium text-gray-700 hover:text-primary border-b border-gray-100">Get Started</a>
            <a href="#pricing" onClick={closeMobileMenu} className="block py-3 text-base font-medium text-gray-700 hover:text-primary border-b border-gray-100">Pricing</a>
            <div className="pt-6">
              <button
                onClick={() => {
                  closeMobileMenu();
                  setContactFormOpen(true);
                }}
                className="w-full inline-flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-purple-700 transition-colors"
                aria-label="Open contact form"
              >
                Contact Us
              </button>
            </div>
          </nav>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-16 relative">
          <div className="text-center">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-purple-100 text-primary mb-6">
              Headless CMS Starter Kit
            </span>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-transparent bg-clip-text pb-2 animate-gradient bg-[length:200%_auto]">Modern Headless Contentful</span>
              <span className="block">Made Simple</span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-base md:text-lg text-gray-600 sm:max-w-3xl px-4">
              SyncNext combines the power of Contentful with the flexibility of Next.js for a superior headless CMS experience.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 px-4">
              <a href="#get-started" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-purple-700 shadow-lg hover:shadow-xl transition-all">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 shadow-sm hover:shadow-md transition-all">
                Learn More
                <ChevronDown className="ml-2 h-5 w-5" />
              </a>
            </div>

            {/* Key Benefits */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto px-4">
              <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
                <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-purple-100 text-primary">
                  <Split className="h-7 w-7" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Decoupled Architecture</h2>
                <p className="text-gray-600">
                  Separate your front-end and back-end for maximum flexibility and better performance.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
                <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-purple-100 text-primary">
                  <Zap className="h-7 w-7" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Lightning-Fast Loading</h2>
                <p className="text-gray-600">
                  Deliver exceptional user experiences with optimized load times and performance.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
                <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-purple-100 text-primary">
                  <Code className="h-7 w-7" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Developer Friendly</h2>
                <p className="text-gray-600">
                  Built with TypeScript and modern tooling for a seamless development experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block py-1 px-3 rounded-md bg-purple-100 text-primary text-sm font-medium mb-3">Features</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Powerful Tools for Modern Web Development</h2>
            <p className="text-lg md:text-xl text-gray-600">Everything you need to build exceptional headless Contentful experiences.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-2 sm:px-0">
            <FeatureCard
              icon={<Layers className="h-7 w-7" />}
              title="Flexible Content Builder"
              description="Build pages with multiple section types and component-based design for maximum flexibility."
              image="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
            />
            <FeatureCard
              icon={<Monitor className="h-7 w-7" />}
              title="Preview Mode"
              description="Real-time content previewing with secure authentication and admin toolbar."
              image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
            />
            <FeatureCard
              icon={<Terminal className="h-7 w-7" />}
              title="Development Environment"
              description="Containerized development with DDEV for consistent team environments."
              image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
            />
            <FeatureCard
              icon={<Database className="h-7 w-7" />}
              title="Structured Content"
              description="Organize your content with custom post types, taxonomies, and relationships."
              image="https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=800&q=80"
            />
            <FeatureCard
              icon={<Github className="h-7 w-7" />}
              title="Version Control"
              description="Track changes with Git integration and collaborate seamlessly with your team."
              image="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80"
            />
            <FeatureCard
              icon={<Rocket className="h-7 w-7" />}
              title="Performance Optimized"
              description="Built for speed with server-side rendering, static generation, and image optimization."
              image="https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-16 md:py-24 bg-purple-50 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block py-1 px-3 rounded-md bg-purple-100 text-primary text-sm font-medium mb-3">Architecture</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Modern Headless Architecture</h2>
            <p className="text-lg md:text-xl text-gray-600">A carefully designed system that balances power, flexibility, and ease of use.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-primary-gradient opacity-50 blur-sm group-hover:opacity-75 transition-all duration-300"></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1558050032-160f36233a07?auto=format&fit=crop&w=1200&q=80"
                  alt="Backend Architecture"
                  className="rounded-xl shadow-lg mb-8 w-full"
                />
                <ArchitectureCard
                  icon={<Server className="h-8 w-8" />}
                  title="Contentful Backend"
                  features={[
                    "Advanced custom fields with Carbon Fields",
                    "WPGraphQL for API communication",
                    "Custom post types and taxonomies",
                    "SyncNext Core plugin"
                  ]}
                />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-primary-gradient opacity-50 blur-sm group-hover:opacity-75 transition-all duration-300"></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&w=1200&q=80"
                  alt="Frontend Architecture"
                  className="rounded-xl shadow-lg mb-8 w-full"
                />
                <ArchitectureCard
                  icon={<Layout className="h-8 w-8" />}
                  title="Next.js Frontend"
                  features={[
                    "Server-side rendered React application",
                    "TypeScript for type safety",
                    "Radix UI components",
                    "Tailwind CSS styling"
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Section */}
      <section id="github" className="py-16 md:py-24 bg-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <span className="inline-block py-1 px-3 rounded-md bg-purple-100 text-primary text-sm font-medium">Open Source</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Source Code Access</h2>
              <p className="text-lg md:text-xl text-gray-600">
                Explore and contribute to SyncNext directly through GitHub. Get started quickly with our Composer installation command.
              </p>
              <div className="bg-gray-900 p-4 md:p-5 rounded-lg shadow-xl overflow-hidden mx-auto lg:mx-0 max-w-md lg:max-w-none">
                <div className="flex items-center mb-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <code className="text-sm text-purple-200 block overflow-x-auto">composer create-project syncnext/starter-kit my-project --stability=dev</code>
              </div>
              <div className="flex justify-center lg:justify-start">
                <a
                  href="https://github.com/nextagencyio/syncnext"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-lg text-white bg-primary hover:bg-purple-700 transition-colors"
                >
                  <Github className="h-5 w-5 mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
            <div className="relative group mt-8 lg:mt-0">
              <div className="absolute -inset-1 rounded-2xl bg-primary-gradient opacity-30 blur-md group-hover:opacity-50 transition-all duration-300"></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1200&q=80"
                  alt="Source Code"
                  className="rounded-xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="py-16 md:py-24 bg-purple-50 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block py-1 px-3 rounded-md bg-purple-100 text-primary text-sm font-medium mb-3">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Quick Setup Guide</h2>
            <p className="text-lg md:text-xl text-gray-600">
              Follow these steps to get up and running with SyncNext in minutes
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">Installation Steps</h3>

                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-primary mb-3 sm:mb-0 sm:mt-1 sm:mr-4 mx-auto sm:mx-0 flex-shrink-0">
                      <span className="font-bold text-sm">1</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <h4 className="text-lg font-medium text-gray-900 mb-2">Clone the repository</h4>
                      <div className="bg-gray-900 p-4 rounded-lg mb-3 overflow-x-auto">
                        <code className="text-sm text-purple-200">git clone https://github.com/nextagencyio/syncnext.git</code>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-primary mb-3 sm:mb-0 sm:mt-1 sm:mr-4 mx-auto sm:mx-0 flex-shrink-0">
                      <span className="font-bold text-sm">2</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <h4 className="text-lg font-medium text-gray-900 mb-2">Start DDEV environment</h4>
                      <div className="bg-gray-900 p-4 rounded-lg mb-3 overflow-x-auto">
                        <code className="text-sm text-purple-200">cd syncnext<br />ddev start</code>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-primary mb-3 sm:mb-0 sm:mt-1 sm:mr-4 mx-auto sm:mx-0 flex-shrink-0">
                      <span className="font-bold text-sm">3</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <h4 className="text-lg font-medium text-gray-900 mb-2">Install Contentful and dependencies</h4>
                      <div className="bg-gray-900 p-4 rounded-lg mb-3 overflow-x-auto">
                        <code className="text-sm text-purple-200">ddev install --preview</code>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-primary mb-3 sm:mb-0 sm:mt-1 sm:mr-4 mx-auto sm:mx-0 flex-shrink-0">
                      <span className="font-bold text-sm">4</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <h4 className="text-lg font-medium text-gray-900 mb-2">Install and start Next.js frontend</h4>
                      <div className="bg-gray-900 p-4 rounded-lg mb-3 overflow-x-auto">
                        <code className="text-sm text-purple-200">cd nextjs<br />npm install<br />npm run dev</code>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-center sm:justify-start">
                  <a
                    href="https://github.com/nextagencyio/syncnext"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-md text-white bg-primary hover:bg-purple-700 transition-colors"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    View Full Documentation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block py-1 px-3 rounded-md bg-purple-100 text-primary text-sm font-medium mb-3">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Unlock the Full Potential of SyncNext</h2>
            <p className="text-lg md:text-xl text-gray-600">
              Tailor your SyncNext experience: Choose between self-managed and full-service options
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <PricingCard
              title="SyncNext CMS"
              price="Free"
              features={[
                "Full access to open source features",
                "Community support",
                "Documentation",
                "AI development features",
              ]}
              ctaText="Get Started"
              ctaLink="#get-started"
              featured={false}
            />
            <PricingCard
              title="Paid Services"
              price="Contact Us"
              features={[
                "Custom development",
                "Content migration",
                "Ongoing support",
                "Consulting services",
              ]}
              ctaText="Request Quote"
              ctaLink="#"
              featured={true}
              onContact={() => setContactFormOpen(true)}
            />
            <PricingCard
              title="Agency Services"
              price="Custom Pricing"
              features={[
                "Custom builds for agencies",
                "SyncNext hands-on training",
                "Consulting services",
                "Co-selling & partnerships",
              ]}
              ctaText="Contact Us"
              ctaLink="#"
              featured={false}
              onContact={() => setContactFormOpen(true)}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-12 md:py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* Removing the SVG as requested */}
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              Ready to supercharge your Contentful development?
            </h2>
            <p className="text-lg md:text-xl text-purple-100 mb-8">
              Start building exceptional digital experiences with SyncNext today.
            </p>
            <button
              onClick={() => setContactFormOpen(true)}
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border border-transparent text-base font-medium rounded-lg shadow-lg text-blue-600 bg-white hover:bg-purple-50 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <Logo />
              <p className="text-gray-500 mt-4 text-center md:text-left">Modern Headless Contentful Solution</p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-6">
                <a href="https://github.com/nextagencyio/syncnext" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                  <Github className="h-6 w-6" />
                </a>
              </div>
              <div className="mt-6 flex flex-wrap justify-center md:justify-end gap-4 md:gap-8">
                <a href="/terms" className="text-gray-600 hover:text-primary transition-colors">Terms</a>
                <a href="/privacy" className="text-gray-600 hover:text-primary transition-colors">Privacy</a>
                <a href="#top" className="text-gray-600 hover:text-primary transition-colors">Back to Top</a>
              </div>
              <p className="text-gray-400 text-sm mt-6">&copy; {new Date().getFullYear()} SyncNext. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, image }: { icon: React.ReactNode; title: string; description: string; image: string }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" role="article">
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          width="800"
          height="400"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/70 to-transparent" aria-hidden="true"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-base sm:text-lg font-semibold text-white">{title}</h3>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-purple-100 text-primary mb-4" aria-hidden="true">
          {icon}
        </div>
        <p className="text-sm sm:text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function ArchitectureCard({ icon, title, features }: { icon: React.ReactNode; title: string; features: string[] }) {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300" role="article">
      <div className="flex flex-col sm:flex-row sm:items-center mb-6">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-primary mx-auto sm:mx-0 sm:mr-4 mb-3 sm:mb-0" aria-hidden="true">
          {icon}
        </div>
        <h3 className="text-center sm:text-left text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-3" role="list">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <div className="mt-1.5 h-1.5 w-1.5 bg-purple-500 rounded-full mr-3" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingCard({
  title,
  price,
  features,
  ctaText,
  ctaLink,
  featured,
  onContact
}: {
  title: string;
  price: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  featured: boolean;
  onContact?: () => void;
}) {
  return (
    <div
      className={`
        rounded-xl p-6 sm:p-8 relative transform transition-all duration-300 hover:scale-105
        ${featured
          ? 'bg-primary text-white shadow-xl'
          : 'bg-white text-gray-900 border border-gray-200 shadow-md hover:shadow-xl'
        }
      `}
      role="article"
    >
      {featured && (
        <span
          className="absolute top-0 right-0 bg-white text-blue-600 text-xs font-semibold uppercase tracking-wider py-1 px-3 rounded-bl-lg rounded-tr-lg"
          aria-label="Popular plan"
        >
          Popular
        </span>
      )}
      <h3 className={`text-xl sm:text-2xl font-semibold mb-4 ${featured ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
      <div className="mb-6">
        <span className="text-3xl sm:text-4xl font-bold" aria-label={`Price: ${price}`}>{price}</span>
      </div>
      <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8" role="list">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className={`h-5 w-5 mr-3 ${featured ? 'text-white' : 'text-blue-600'}`} aria-hidden="true" />
            <span className={`text-sm sm:text-base ${featured ? 'text-white' : 'text-gray-600'}`}>{feature}</span>
          </li>
        ))}
      </ul>
      {onContact ? (
        <button
          onClick={onContact}
          className={`
            block w-full py-2 sm:py-3 px-4 sm:px-6 text-center rounded-lg font-medium transition-colors text-sm sm:text-base
            ${featured
              ? 'bg-white text-blue-600 hover:bg-gray-50'
              : 'bg-primary text-white hover:bg-purple-700'
            }
          `}
          aria-label={`${ctaText} for ${title} plan`}
        >
          {ctaText}
        </button>
      ) : (
        <a
          href={ctaLink}
          className={`
            block w-full py-2 sm:py-3 px-4 sm:px-6 text-center rounded-lg font-medium transition-colors text-sm sm:text-base
            ${featured
              ? 'bg-white text-blue-600 hover:bg-gray-50'
              : 'bg-primary text-white hover:bg-purple-700'
            }
          `}
          aria-label={`${ctaText} for ${title} plan`}
        >
          {ctaText}
        </a>
      )}
    </div>
  );
}

export default App;
