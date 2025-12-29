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
    <div className="rounded-lg border bg-white p-2 sm:p-4">
      <h3 className="text-lg font-semibold mb-4">Campaign Overview</h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[120px]">Name</TableHead>
              <TableHead className="min-w-[80px]">Status</TableHead>
              <TableHead className="min-w-[100px] hidden sm:table-cell">Budget</TableHead>
              <TableHead className="min-w-[120px] hidden md:table-cell">Daily Budget</TableHead>
              <TableHead className="min-w-[100px] hidden lg:table-cell">Platforms</TableHead>
              <TableHead className="min-w-[200px]">Actions</TableHead>
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
                  <TableCell className="hidden sm:table-cell">
                    ${campaign?.budget?.toLocaleString()}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    ${campaign?.daily_budget?.toLocaleString()}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    {campaign?.platforms?.join(", ")}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                      <Link
                        className="bg-blue-400 p-1 sm:p-2 text-xs rounded text-white hover:underline text-center"
                        href={`campaign-metrics?id=${campaign?.id}`}
                      >
                        Insight
                      </Link>
                      <Link
                        className="bg-blue-400 p-1 sm:p-2 text-xs rounded text-white hover:underline text-center"
                        href={`campaign-details?id=${campaign?.id}`}
                      >
                        Details
                      </Link>
                      <Link
                        className="bg-green-500 p-1 sm:p-2 text-xs rounded text-white hover:underline text-center"
                        href={`/campaigns/${campaign?.id}/insights/stream`}
                      >
                        Stream
                      </Link>
                    </div>
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
    </div>
  );
};
