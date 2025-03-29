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

const FeatureCard = ({ name, displayName, description, index }: Feature) => {
  return (
    <Card>
      <CardHeader>
        <span className="inline-flex items-center  rounded-full  text-xs font-medium">
          <Badge variant="default" className="rounded-full">
            Enabled
          </Badge>
        </span>
      </CardHeader>

      <CardContent className="space-y-2">
        <CardTitle>{displayName}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>

      <CardFooter>
        <p className="text-sm text-muted-foreground">
          This feature is now active and visible to users.
        </p>
      </CardFooter>
    </Card>
  );
};

export default FeatureCard;
