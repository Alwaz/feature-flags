import Title from '@/components/title';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { FEATURES } from '@/lib/constants';
import React from 'react';

export default function Settings() {
  return (
    <section className="flex w-full flex-col bg-gradient-to-b from-background to-background/80 py-12 md:py-24 lg:py-32">
      <div className=" mx-auto w-full max-w-4xl  space-y-10">
        <div className="container  mx-auto mt-10 flex   flex-col items-center px-4 md:mt-0 md:px-6">
          <Title
            title="Feature Settings"
            subTitle="Control which features are enabled or disabled"
          />
        </div>
        <div className="overflow-hidden rounded-2xl  bg-background shadow-sm">
          <div className="space-y-6 divide-y">
            {FEATURES.map(({ name, displayName, description }) => (
              <Card key={name} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">{displayName}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {description}
                    </p>
                  </div>
                  <div>
                    <Switch
                      // checked={flags[feature.name] || false}
                      // onCheckedChange={() => toggleFeature(feature.name)}
                      className="data-[state=checked]:bg-primary"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
