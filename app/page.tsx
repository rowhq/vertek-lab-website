import { Hero } from '@/components/sections/Hero';
import { Capabilities } from '@/components/sections/Capabilities';
import { HowWeWork } from '@/components/sections/HowWeWork';
import { ClientTypes } from '@/components/sections/ClientTypes';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <HowWeWork />
      <ClientTypes />
    </>
  );
}
