'use client';
import { FeatureFlagContext } from '@/context/feature-flag-context';
import { useContext } from 'react';

// Custom hook to use feature flag context
export const useFeatureFlags = () => {
  const context = useContext(FeatureFlagContext);
  if (context === undefined) {
    throw new Error(
      'useFeatureFlags must be used within a FeatureFlagProvider',
    );
  }
  return context;
};
