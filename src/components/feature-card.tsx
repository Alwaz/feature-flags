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
          <Badge variant="destructive" className="rounded-full">
            Enabled
          </Badge>
        </span>
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
