"use client";

import { useQuery } from "@tanstack/react-query";
import type { Lead, LeadStats } from "@/lib/types";

async function fetchLeads(): Promise<Lead[]> {
  const response = await fetch("/api/leads");
  if (!response.ok) {
    throw new Error("Failed to fetch leads");
  }
  return response.json();
}

export function useLeads() {
  return useQuery({
    queryKey: ["leads"],
    queryFn: fetchLeads,
  });
}

export function useLeadStats(leads: Lead[] | undefined): LeadStats {
  if (!leads) {
    return {
      total: 0,
      new: 0,
      contacted: 0,
      qualified: 0,
      lost: 0,
    };
  }

  return {
    total: leads.length,
    new: leads.filter((lead) => lead.status === "New").length,
    contacted: leads.filter((lead) => lead.status === "Contacted").length,
    qualified: leads.filter((lead) => lead.status === "Qualified").length,
    lost: leads.filter((lead) => lead.status === "Lost").length,
  };
}
