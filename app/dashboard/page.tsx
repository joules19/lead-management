"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Header } from "@/components/shared/header";
import { AnalyticsSection } from "@/components/dashboard/analytics-section";
import { Filters } from "@/components/dashboard/filters";
import { LeadsTable } from "@/components/dashboard/leads-table";
import { LeadDetailsModal } from "@/components/dashboard/lead-details-modal";
import { DashboardSkeleton } from "@/components/dashboard/dashboard-skeleton";
import { useAuth } from "@/lib/hooks/use-auth";
import { useLeads, useLeadStats } from "@/lib/hooks/use-leads";
import type { Lead, LeadStatus } from "@/lib/types";

export default function DashboardPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const { data: leads, isLoading: leadsLoading, error } = useLeads();

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<LeadStatus | "All">("All");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, authLoading, router]);

  useEffect(() => {
    if (error) {
      toast.error("Failed to load leads", {
        description: "Please try refreshing the page.",
      });
    }
  }, [error]);

  const filteredLeads = useMemo(() => {
    if (!leads) return [];

    return leads.filter((lead) => {
      const matchesSearch =
        lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || lead.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [leads, searchQuery, statusFilter]);

  const stats = useLeadStats(filteredLeads);

  const handleLeadClick = (lead: Lead) => {
    setSelectedLead(lead);
    setIsModalOpen(true);
  };

  if (authLoading || !isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-nexcell-pink-pale">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {leadsLoading ? (
            <DashboardSkeleton />
          ) : (
            <>
              <AnalyticsSection stats={stats} />

              <Filters
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                statusFilter={statusFilter}
                onStatusChange={setStatusFilter}
              />

              <LeadsTable
                leads={filteredLeads}
                onLeadClick={handleLeadClick}
              />

              <LeadDetailsModal
                lead={selectedLead}
                open={isModalOpen}
                onOpenChange={setIsModalOpen}
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
}
