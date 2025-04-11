import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, Presentation, Clock, Sparkles, FileSpreadsheet, Target } from 'lucide-react';

export default function LandingPage() {
  const colors = {
    primary: 'rgb(0, 66, 37)', // British Racing Green
    secondary: 'rgb(230, 218, 206)', // Beige
    accent: 'rgb(20, 86, 57)', // Slightly lighter green for hover states
    text: 'rgb(44, 44, 44)',
    lightText: 'rgb(102, 102, 102)'
  };

  return (
    <div className="min-h-screen bg-white font-serif">
      {/* Navigation */}
      <nav style={{ backgroundColor: colors.secondary }} className="border-b border-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <span style={{ color: colors.primary }} className="text-2xl font-bold italic">ptchr</span>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <a href="#features" style={{ color: colors.primary }} className="hover:opacity-80">Solutions</a>
              <a href="#benefits" style={{ color: colors.primary }} className="hover:opacity-80">Benefits</a>
              <a href="https://tally.so/r/mJWoqr" target="_blank" rel="noopener noreferrer">
                <Button style={{ backgroundColor: colors.primary }} className="hover:opacity-90 text-white">
                  Book Demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden" style={{ backgroundColor: colors.secondary }}>
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/image(2).png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '0.4' // Adjust opacity as needed
          }}
        />
        <div className="relative max-w-7xl z-10 mx-auto pt-16 pb-48 px-4 sm:px-6 lg:px-8">
          <div className="text-center mt-32">
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <span style={{ color: colors.primary }} className="block">Automate Your Investment Banking Workflow</span>
              <span style={{ color: colors.accent }} className="block italic text-3xl sm:text-4xl md:text-5xl mt-4">From Conversations to Pitch Decks in Minutes</span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl" style={{ color: colors.lightText }}>
              Automate complex financial analysis and instantly generate polished deliverables. 
              Built by investment bankers, for investment bankers.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <a href="https://tally.so/r/mJWoqr" target="_blank" rel="noopener noreferrer">
                <Button 
                  style={{ backgroundColor: colors.primary }} 
                  className="w-full sm:w-auto hover:opacity-90 text-white text-lg py-6"
                >
                  Transform Your Deal Process
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold" style={{ color: colors.primary }}>
              End-to-End Deal Execution Platform
            </h2>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
            <Card className="border-2" style={{ borderColor: colors.secondary }}>
              <CardContent className="pt-6">
                <div style={{ backgroundColor: colors.primary }} className="flex items-center justify-center h-12 w-12 rounded-md text-white mb-4">
                  <Calculator className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium" style={{ color: colors.primary }}>Automated Valuation Models</h3>
                <p className="mt-2" style={{ color: colors.lightText }}>
                  Generate accurate DCF, LBO, and comparable analyses in minutes. Smart templates adapt to your industry and deal type.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2" style={{ borderColor: colors.secondary }}>
              <CardContent className="pt-6">
                <div style={{ backgroundColor: colors.primary }} className="flex items-center justify-center h-12 w-12 rounded-md text-white mb-4">
                  <Presentation className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium" style={{ color: colors.primary }}>Intelligent Pitch Decks</h3>
                <p className="mt-2" style={{ color: colors.lightText }}>
                  Create first-draft pitch books instantly. Our AI structures your narrative and populates key slides automatically.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2" style={{ borderColor: colors.secondary }}>
              <CardContent className="pt-6">
                <div style={{ backgroundColor: colors.primary }} className="flex items-center justify-center h-12 w-12 rounded-md text-white mb-4">
                  <FileSpreadsheet className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium" style={{ color: colors.primary }}>Smart Data Room</h3>
                <p className="mt-2" style={{ color: colors.lightText }}>
                  Automatically organize and analyze due diligence materials. Extract key metrics and flag potential issues instantly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="py-16" style={{ backgroundColor: colors.secondary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold" style={{ color: colors.primary }}>
                Deliver Excellence at Speed
              </h2>
              <p className="mt-3 max-w-3xl text-lg" style={{ color: colors.lightText }}>
                Focus on high-value analysis while ptchr handles the heavy lifting. Cut manual work by 80% without sacrificing quality.
              </p>
              
              <div className="mt-12 space-y-10">
                {[
                  {
                    icon: <Clock className="h-6 w-6" />,
                    title: "80% Time Savings",
                    description: "Automate repetitive tasks. First drafts of models and decks ready in minutes, not days."
                  },
                  {
                    icon: <Target className="h-6 w-6" />,
                    title: "Reduced Error Risk",
                    description: "Built-in validation and industry best practices ensure consistency and accuracy."
                  },
                  {
                    icon: <Sparkles className="h-6 w-6" />,
                    title: "Enhanced Deal Intelligence",
                    description: "AI-powered insights from market data, precedent transactions, and your firm's knowledge base."
                  }
                ].map((benefit) => (
                  <div key={benefit.title} className="flex">
                    <div className="flex-shrink-0">
                      <div style={{ backgroundColor: colors.primary }} className="flex items-center justify-center h-12 w-12 rounded-md text-white">
                        {benefit.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium" style={{ color: colors.primary }}>{benefit.title}</h4>
                      <p className="mt-2" style={{ color: colors.lightText }}>{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0 lg:pl-8">
              <div className="bg-white rounded-xl p-8">
                <blockquote>
                  <div className="text-xl font-medium italic" style={{ color: colors.primary }}>
                    &quot;ptchr has transformed our analyst workflow. What used to take days now takes hours, and the quality of our initial drafts has improved dramatically.&quot;
                  </div>
                  <footer className="mt-4">
                    <p className="text-base font-medium" style={{ color: colors.primary }}>James Chen</p>
                    <p className="text-base" style={{ color: colors.lightText }}>Director, M&A Advisory</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ backgroundColor: colors.primary }}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to transform your deal process?</span>
            <span className="block text-opacity-90 italic" style={{ color: colors.secondary }}>Join leading banks already using ptchr.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <a href="https://tally.so/r/mJWoqr" target="_blank" rel="noopener noreferrer">
              <Button 
                style={{ backgroundColor: colors.secondary, color: colors.primary }} 
                className="hover:opacity-90 font-medium"
              >
                Request Demo
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: colors.secondary }}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="mt-8 border-t border-opacity-20 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="#" style={{ color: colors.primary }} className="hover:opacity-80">
                Privacy Policy
              </a>
              <a href="#" style={{ color: colors.primary }} className="hover:opacity-80">
                Terms of Service
              </a>
              <a href="#" style={{ color: colors.primary }} className="hover:opacity-80">
                Contact
              </a>
            </div>
            <p className="mt-8 text-base md:mt-0 md:order-1" style={{ color: colors.lightText }}>
              © 2025 ptchr. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
