'use client';
import FeatureCard from '@/components/feature-card';
import { AlertCircle } from 'lucide-react';
import Title from '@/components/title';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useFeatureFlags } from '@/hooks/useFeatureFlags';

export default function Home() {
  const { features } = useFeatureFlags();
  const enabledFeatures = features?.filter((feature) => feature.enabled);

  return (
    <section className="w-full space-y-10  bg-gradient-to-b from-background to-background/80 px-10 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto mt-10 flex max-w-6xl flex-col items-center px-4 md:mt-0 md:px-6">
        <Title
          title="Feature Flag Dashboard"
          subTitle="View and monitor the status of all enabled features"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {enabledFeatures?.length === 0 ? (
          <Card className=" col-span-1  md:col-span-2 lg:col-span-3">
            <CardHeader>
              <AlertCircle
                size={48}
                className="mx-auto text-muted-foreground/75"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className=" text-center">No active features</CardTitle>
            </CardContent>

            <CardFooter>
              <p className="w-full  text-center text-sm text-muted-foreground/75">
                Head to the Settings page to enable some features.
              </p>
            </CardFooter>
          </Card>
        ) : (
          <>
            {enabledFeatures?.map(
              ({ name, enabled, displayName, description }) => (
                <FeatureCard
                  key={name}
                  displayName={displayName}
                  description={description}
                  name={name}
                  enabled={enabled}
                />
              ),
            )}
          </>
        )}
      </div>
    </section>
  );
}
