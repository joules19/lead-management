import { Calendar, Mail, FileText, Tag } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils/date";
import type { Lead } from "@/lib/types";

interface LeadDetailsModalProps {
  lead: Lead | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const statusVariantMap = {
  New: "new" as const,
  Contacted: "contacted" as const,
  Qualified: "qualified" as const,
  Lost: "lost" as const,
};

export function LeadDetailsModal({
  lead,
  open,
  onOpenChange,
}: LeadDetailsModalProps) {
  if (!lead) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{lead.name}</DialogTitle>
          <DialogDescription>Lead Details and Information</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="h-4 w-4" />
                <span className="font-medium">Email</span>
              </div>
              <p className="text-sm font-mono">{lead.email}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Tag className="h-4 w-4" />
                <span className="font-medium">Status</span>
              </div>
              <Badge variant={statusVariantMap[lead.status]}>
                {lead.status}
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                <span className="font-medium">Created</span>
              </div>
              <p className="text-sm">
                {formatDate(lead.createdAt)}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FileText className="h-4 w-4" />
                <span className="font-medium">Lead ID</span>
              </div>
              <p className="text-sm font-mono">{lead.id}</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FileText className="h-4 w-4" />
              <span className="font-medium">Notes</span>
            </div>
            <div className="p-4 rounded-lg bg-nexcell-pink-pale border border-nexcell-pink-light">
              <p className="text-sm text-gray-700 leading-relaxed">
                {lead.notes}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
