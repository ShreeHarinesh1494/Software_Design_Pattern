import BoxReveal from '@/components/magicui/box-reveal';
import GradualSpacing from '@/components/magicui/gradual-spacing';
import LetterPullup from '@/components/magicui/letter-pullup';
import ShineBorder from '@/components/magicui/shine-border';
import { MarqueeDemo } from '@/components/MarqueeDemo';
import { ShieldPlus } from 'lucide-react';
import React from 'react';

const Home = () => {
  return (
    <>
      <div className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
        
        <section className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] py-20">
          <div className="container mx-auto px-6 text-center">
            <LetterPullup
              words="Protect Your Future with Our Life Insurance"
              delay={0.05}
              className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white"
            />
            <p className="text-lg mb-8">
              Secure your loved ones with comprehensive coverage and peace of mind.
            </p>
            <a href="#contact" className="bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[hsl(var(--secondary-foreground))] hover:text-[hsl(var(--secondary))] transition">
              Get a Quote
            </a>
          </div>
        </section>

        
    
<section className="py-16">
  <div className="container mx-auto px-6">
    <div className="text-center mb-12">
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center">
          <ShieldPlus className="h-10 w-10 mr-2" />
          <GradualSpacing
            className="text-4xl font-bold tracking-[-0.1em]"
            text="LifePlus"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-9">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] p-6 rounded-lg shadow-lg text-center border border-black dark:border-white">
            <p className="text-lg">
              At LifePlus, we are dedicated to providing top-notch insurance solutions to ensure the security of you and your loved ones.
            </p>
          </div>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] p-6 rounded-lg shadow-lg text-center border border-black dark:border-white">
            <p className="text-lg">
              We pride ourselves on our commitment to excellence and our dedication to providing personalized insurance solutions.
            </p>
          </div>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] p-6 rounded-lg shadow-lg text-center border border-black dark:border-white">
            <p className="text-lg">
              Our mission is to help you safeguard your future with the best possible coverage, tailored to your unique needs.
            </p>
          </div>
        </BoxReveal>
      </div>
    </div>
  </div>
</section>






      
<section className="py-16 border bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">
  <div className="container mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
      <p className="text-lg">
        Discover the benefits of choosing our life insurance plans.
      </p>
    </div>
    <div className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] p-8 rounded-lg shadow-lg border border-black dark:border-white">
      <div className="flex flex-col space-y-5">
        <div className="flex items-start space-x-4">
          <ShieldPlus className="h-12 w-12 text-indigo-600" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Comprehensive Coverage</h3>
            <p className="text-lg">
            Our plans provide broad coverage to ensure the security of you and your loved ones. From life insurance to critical illness coverage, we offer protection tailored to your needs.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <ShieldPlus className="h-12 w-12 text-green-600" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Flexible Plans</h3>
            <p className="text-lg">
            Customize your insurance plan to fit your unique needs and budget. Whether you're looking for basic coverage or a comprehensive package, we offer a variety of options to suit your lifestyle.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <ShieldPlus className="h-12 w-12 text-red-600" />
          <div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-lg">
              Our customer support team is available around the clock to assist you. With LifePlus, you can count on prompt, friendly, and knowledgeable support any time of the day or night. Your peace of mind is our priority.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



        
        <section className="bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
            <MarqueeDemo />
          </div>
        </section>

        
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
