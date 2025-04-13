'use client';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { FEATURES } from '@/lib/constants';
import { Feature } from '@/lib/types';
import { createContext, ReactNode } from 'react';

interface FeatureFlagContextType {
  features: Feature[];
  toggleFeature: (featureName: string) => void;
}

export const FeatureFlagContext = createContext<
  FeatureFlagContextType | undefined
>(undefined);

export const FeatureFlagProvider = ({ children }: { children: ReactNode }) => {
  const [features, setFeatures] = useLocalStorage<Feature[]>(
    'featureFlags',
    FEATURES,
  );

  // Toggle feature enabled status
  const toggleFeature = (featureName: string) => {
    setFeatures((currentFeatures) =>
      currentFeatures.map((feature) =>
        feature.name === featureName
          ? { ...feature, enabled: !feature.enabled }
          : feature,
      ),
    );
  };

  return (
    <FeatureFlagContext.Provider value={{ features, toggleFeature }}>
      {children}
    </FeatureFlagContext.Provider>
  );
};
