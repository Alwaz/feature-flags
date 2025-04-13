import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Feature } from '@/lib/types';
import { Badge } from './ui/badge';

const FeatureCard = ({ displayName, description, enabled }: Feature) => {
  return (
    <Card>
      <CardHeader className="inline-flex">
        <Badge variant="destructive" className="rounded-full">
          {enabled && 'Enabled'}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-2">
        <CardTitle>{displayName}</CardTitle>

        <CardDescription>{description}</CardDescription>
      </CardContent>

      <CardFooter className="border-t">
        <p className="pt-3 text-sm text-muted-foreground/75">
          This feature is now active and visible to users.
        </p>
      </CardFooter>
    </Card>
  );
};

export default FeatureCard;
