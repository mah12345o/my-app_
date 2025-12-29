"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Campaign } from "@/src/app/interface";
import Link from "next/link";

interface CampaignDataTableProps {
  campaigns?: Campaign[];
}

export const CampaignDataTable = ({
  campaigns = [],
}: CampaignDataTableProps) => {
  return (
    <div className="rounded-lg border bg-white p-4">
      <h3 className="text-lg font-semibold mb-4">Campaign Overview</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Budget</TableHead>
            <TableHead>Daily Budget</TableHead>
            <TableHead>Platforms</TableHead>
            <TableHead>Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campaigns?.length > 0 ? (
            campaigns?.map((campaign) => (
              <TableRow key={campaign?.id}>
                <TableCell className="font-medium">{campaign?.name}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      campaign?.status === "active"
                        ? "bg-green-100 text-green-800"
                        : campaign?.status === "paused"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {campaign?.status}
                  </span>
                </TableCell>
                <TableCell>${campaign?.budget?.toLocaleString()}</TableCell>
                <TableCell>
                  ${campaign?.daily_budget?.toLocaleString()}
                </TableCell>
                <TableCell>{campaign?.platforms?.join(", ")}</TableCell>
                <TableCell>
                  {new Date(campaign?.created_at).toLocaleDateString()}
                  <Link
                    className="bg-blue-400 p-2 text-xs ml-3 rounded-2xl text-white hover:underline"
                    href={`campaign-metrics?id=${campaign?.id}`}
                  >
                    View Insight
                  </Link>
                  <Link
                    className="bg-blue-400 p-2 text-xs ml-3 rounded-2xl text-white hover:underline"
                    href={`campaign-details?id=${campaign?.id}`}
                  >
                    View Details
                  </Link>
                  <Link
                    className="bg-green-500 p-2 text-xs ml-3 rounded-2xl text-white hover:underline"
                    href={`/campaigns/${campaign?.id}/insights/stream`}
                  >
                    Stream
                  </Link>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center text-gray-500">
                No campaigns found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
