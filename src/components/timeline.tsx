"use client";

import { Rocket, Star, CheckCircle, Milestone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const timelineItems = [
  {
    icon: Rocket,
    title: "Launch",
    description: "Ready for takeoff.",
  },
  {
    icon: Milestone,
    title: "Market Analysis",
    description: "Navigating new frontiers.",
  },
  {
    icon: Star,
    title: "Insight Generation",
    description: "Discovering constellations of data.",
  },
  {
    icon: CheckCircle,
    title: "Execution",
    description: "Mission accomplished.",
  },
];

export const Timeline = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="relative">
          <div className="absolute left-3.5 top-0 h-full w-0.5 bg-border -z-10" />
          {timelineItems.map((item, index) => (
            <div key={index} className="relative flex items-start group mb-8 last:mb-0">
              <div className="flex-shrink-0 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center z-10 group-hover:bg-primary transition-colors duration-300">
                <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
