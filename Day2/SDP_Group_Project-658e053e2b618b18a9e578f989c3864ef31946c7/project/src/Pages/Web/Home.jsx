import { MarqueeDemo } from '@/components/MarqueeDemo';
import React from 'react';

const Home = () => {
  return (
    <>
      <div className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
        {/* Hero Section */}
        <section className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Protect Your Future with Our Life Insurance
            </h1>
            <p className="text-lg mb-8">
              Secure your loved ones with comprehensive coverage and peace of mind.
            </p>
            <a href="#contact" className="bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[hsl(var(--secondary-foreground))] hover:text-[hsl(var(--secondary))] transition">
              Get a Quote
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
              <p className="text-lg">
                Discover the benefits of choosing our life insurance plans.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-4">Comprehensive Coverage</h3>
                <p>
                  Our plans offer extensive coverage to protect you and your loved ones.
                </p>
              </div>
              <div className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-4">Flexible Plans</h3>
                <p>
                  Customize your insurance plan to fit your unique needs and budget.
                </p>
              </div>
              <div className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
                <p>
                  Our customer support team is available around the clock to assist you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section (Marquee) */}
        <section className="bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
            <MarqueeDemo />
          </div>
        </section>

        {/* Call to Action Section */}
        <section id="contact" className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8">
              Contact us today to get personalized insurance solutions.
            </p>
            <a href="mailto:info@yourcompany.com" className="bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[hsl(var(--secondary-foreground))] hover:text-[hsl(var(--secondary))] transition">
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
