import { Hero } from '@/components/sections/Hero';
import { Capabilities } from '@/components/sections/Capabilities';
import { MethodTimeline } from '@/components/sections/MethodTimeline';
import { HowWeWork } from '@/components/sections/HowWeWork';
import { Cases } from '@/components/sections/Cases';
import { Testimonials } from '@/components/sections/Testimonials';
import { EnterpriseIntegration } from '@/components/sections/EnterpriseIntegration';
import { Pricing } from '@/components/sections/Pricing';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <MethodTimeline />
      <HowWeWork />
      <Cases />
      <Testimonials />
      <EnterpriseIntegration />
      <Pricing />
      <About />
      <Contact />
    </>
  );
}
