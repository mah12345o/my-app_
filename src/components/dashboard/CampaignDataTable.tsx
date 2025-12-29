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
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

interface CampaignDataTableProps {
  campaigns?: Campaign[];
}

export const CampaignDataTable = ({
  campaigns = [],
}: CampaignDataTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCampaigns = campaigns?.filter(
    (campaign) =>
      campaign?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign?.status?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign?.platforms?.some((platform) =>
        platform?.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="rounded-lg border bg-white p-2 sm:p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <h3 className="text-lg font-semibold">Campaign Overview</h3>
        <div className="relative w-full sm:w-64">
          <IoIosSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search campaigns..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[120px]">Name</TableHead>
              <TableHead className="min-w-[80px]">Status</TableHead>
              <TableHead className="min-w-[100px] hidden sm:table-cell">
                Budget
              </TableHead>
              <TableHead className="min-w-[120px] hidden md:table-cell">
                Daily Budget
              </TableHead>
              <TableHead className="min-w-[100px] hidden lg:table-cell">
                Platforms
              </TableHead>
              <TableHead className="min-w-[200px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCampaigns?.length > 0 ? (
              filteredCampaigns?.map((campaign) => (
                <TableRow key={campaign?.id}>
                  <TableCell className="font-medium">
                    {campaign?.name}
                  </TableCell>
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
                <TableCell
                  colSpan={6}
                  className="text-center text-gray-500 py-8"
                >
                  {searchTerm
                    ? "No campaigns found matching your search"
                    : "No campaigns found"}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
