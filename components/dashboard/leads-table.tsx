"use client";

import { useState } from "react";
import { ArrowUpDown, Inbox } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pagination } from "@/components/dashboard/pagination";
import { formatDate } from "@/lib/utils/date";
import type { Lead } from "@/lib/types";

interface LeadsTableProps {
  leads: Lead[];
  onLeadClick: (lead: Lead) => void;
}

type SortField = "name" | "email" | "status" | "createdAt";
type SortOrder = "asc" | "desc";

const statusVariantMap = {
  New: "new" as const,
  Contacted: "contacted" as const,
  Qualified: "qualified" as const,
  Lost: "lost" as const,
};

export function LeadsTable({ leads, onLeadClick }: LeadsTableProps) {
  const [sortField, setSortField] = useState<SortField>("createdAt");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setCurrentPage(1);
  };

  const sortedLeads = [...leads].sort((a, b) => {
    let aValue: string | Date = a[sortField];
    let bValue: string | Date = b[sortField];

    if (sortField === "createdAt") {
      aValue = new Date(a.createdAt);
      bValue = new Date(b.createdAt);
    }

    if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
    if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sortedLeads.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedLeads = sortedLeads.slice(startIndex, endIndex);

  if (leads.length === 0) {
    return (
      <Card className="p-12">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="p-4 rounded-full bg-nexcell-pink-pale">
            <Inbox className="h-12 w-12 text-nexcell-burgundy-500" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900">
              No leads found
            </h3>
            <p className="text-gray-600 max-w-md">
              Try adjusting your search or filter criteria to find what you're
              looking for.
            </p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-nexcell-burgundy-500">
              <TableHead className="text-white">
                <Button
                  variant="ghost"
                  className="text-white hover:text-white hover:bg-nexcell-burgundy-600 -ml-4"
                  onClick={() => handleSort("name")}
                >
                  Name
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="text-white">
                <Button
                  variant="ghost"
                  className="text-white hover:text-white hover:bg-nexcell-burgundy-600 -ml-4"
                  onClick={() => handleSort("email")}
                >
                  Email
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="text-white">
                <Button
                  variant="ghost"
                  className="text-white hover:text-white hover:bg-nexcell-burgundy-600 -ml-4"
                  onClick={() => handleSort("status")}
                >
                  Status
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="text-white">
                <Button
                  variant="ghost"
                  className="text-white hover:text-white hover:bg-nexcell-burgundy-600 -ml-4"
                  onClick={() => handleSort("createdAt")}
                >
                  Created
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedLeads.map((lead) => (
              <TableRow
                key={lead.id}
                onClick={() => onLeadClick(lead)}
                className="cursor-pointer"
              >
                <TableCell className="font-medium">{lead.name}</TableCell>
                <TableCell className="text-gray-600">
                  {lead.email}
                </TableCell>
                <TableCell>
                  <Badge variant={statusVariantMap[lead.status]}>
                    {lead.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-600">
                  {formatDate(lead.createdAt)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          pageSize={pageSize}
          totalItems={sortedLeads.length}
          onPageChange={setCurrentPage}
          onPageSizeChange={handlePageSizeChange}
        />
      </div>
    </Card>
  );
}
