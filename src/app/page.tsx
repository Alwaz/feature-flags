import FeatureCard from '@/components/feature-card';
import { FEATURES } from '@/lib/constants';

export default function Home() {
  return (
    <section className="w-full space-y-10  bg-gradient-to-b from-background to-background/80 px-10 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto mt-10 flex max-w-6xl flex-col items-center px-4 md:mt-0 md:px-6">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Feature Flag Dashboard
        </h1>
        <p className="mt-3 text-muted-foreground">
          View and monitor the status of all enabled features.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ name, index, displayName, description }) => (
          <FeatureCard
            key={name}
            displayName={displayName}
            description={description}
            name={name}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
