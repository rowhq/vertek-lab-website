import { Cases } from '@/components/sections/Cases';

export default function ProyectosPage() {
  return (
    <div>
      <div className="bg-black px-4 pt-32 lg:px-16 lg:pt-40">
        <h1
          className="text-4xl text-white lg:text-6xl"
          style={{ fontFamily: 'Helvetica Neue, sans-serif' }}
        >
          Proyectos
        </h1>
      </div>
      <Cases />
    </div>
  );
}
