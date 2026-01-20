import { Users, UserPlus, UserCheck, UserX, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LeadStats } from "@/lib/types";

interface AnalyticsSectionProps {
  stats: LeadStats;
}

export function AnalyticsSection({ stats }: AnalyticsSectionProps) {
  const cards = [
    {
      title: "Total Leads",
      value: stats.total,
      icon: Users,
      color: "text-nexcell-burgundy-700",
      bgColor: "bg-nexcell-pink-pale",
    },
    {
      title: "New",
      value: stats.new,
      icon: UserPlus,
      color: "text-status-new",
      bgColor: "bg-status-new-bg",
    },
    {
      title: "Contacted",
      value: stats.contacted,
      icon: TrendingUp,
      color: "text-status-contacted",
      bgColor: "bg-status-contacted-bg",
    },
    {
      title: "Qualified",
      value: stats.qualified,
      icon: UserCheck,
      color: "text-status-qualified",
      bgColor: "bg-status-qualified-bg",
    },
    {
      title: "Lost",
      value: stats.lost,
      icon: UserX,
      color: "text-status-lost",
      bgColor: "bg-status-lost-bg",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <Card
            key={card.title}
            className="border-nexcell-pink-light hover:shadow-md transition-shadow"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">
                {card.title}
              </CardTitle>
              <div className={`p-2 rounded-full ${card.bgColor}`}>
                <Icon className={`h-4 w-4 ${card.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className={`text-3xl font-bold ${card.color}`}>
                {card.value}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
