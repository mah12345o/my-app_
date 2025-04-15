"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import * as React from "react";
import { FaEye } from "react-icons/fa";
import { IoMdArrowDropleft } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IoMdArrowDropright } from "react-icons/io";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock data
const data: Order[] = [
  {
    id: "1",
    product: "Handmade Pouch",
    otherProducts: 3,
    customer: "John Bushmill",
    email: "johnb@mail.com",
    total: 121.0,
    status: "Processing",
  },
  {
    id: "2",
    product: "Smartwatch E2",
    otherProducts: 1,
    customer: "Ilham Budi Agung",
    email: "ilahmbudi@mail.com",
    total: 590.0,
    status: "Processing",
  },
  {
    id: "3",
    product: "Smartwatch E1",
    otherProducts: 0,
    customer: "Mohammad Karim",
    email: "m.karim@mail.com",
    total: 125.0,
    status: "Shipped",
  },
  {
    id: "4",
    product: "Headphone G1 Pro",
    otherProducts: 1,
    customer: "Linda Blair",
    email: "lindablair@mail.com",
    total: 348.0,
    status: "Shipped",
  },
  {
    id: "5",
    product: "Iphone X",
    otherProducts: 0,
    customer: "Josh Adam",
    email: "josh.adam@mail.com",
    total: 607.0,
    status: "Delivered",
  },
];

export type Order = {
  id: string;
  product: string;
  otherProducts: number;
  customer: string;
  email: string;
  total: number;
  status: "Processing" | "Shipped" | "Delivered";
};

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "product",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-2"
        >
          Product
          <TiArrowSortedDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gray-200 rounded" />
        <div>
          <span className="text-black">{row.original.product}</span>

          {row.original.otherProducts > 0 && (
            <div className="text-sm text-gray-500">
              +{row.original.otherProducts} other products
            </div>
          )}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "customer",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-2"
        >
          Customer
          <TiArrowSortedDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div>
        <span className="text-black">{row.getValue("customer")}</span>
        <div className="sm:text-sm text-[10px] text-gray-500">
          {row.original.email}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "total",
    header: () => <div className="text-right">Total</div>,
    cell: ({ row }) => {
      const total = parseFloat(row.getValue("total"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(total);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      let bgColor = "bg-yellow-100 text-yellow-800";
      if (status === "Shipped") bgColor = "bg-blue-100 text-blue-800";
      if (status === "Delivered") bgColor = "bg-green-100 text-green-800";
      return (
        <Badge className={`px-2 py-1 rounded-lg ${bgColor}`}>{status}</Badge>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    enableHiding: false,
    cell: () => {
      return (
        <div className="flex text-gray-300">
          <FaEye className="mr-2 h-4 w-4" />
          <MdDelete className="mr-2 h-4 w-4" />
        </div>
      );
    },
  },
];

export function DataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="rounded-md border-0">
        <Table>
          <TableHeader className="bg-[#F9F9FC]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-gray-200">
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="text-gray-500 py-3 px-5"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="border-0">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="hover:bg-gray-50 border-gray-200 text-gray-500"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-3 px-5">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-gray-500"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between overflow-y-auto py-5 text-sm text-gray-500">
        <div className="py-3 px-5 whitespace-nowrap">Showing 1-5 of 100</div>
        <div className="space-x-2 flex items-center pr-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-2 bg-[#92cef178] border-0"
          >
            <IoMdArrowDropleft className="text-[#2086BF]" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="px-2 text-[#2086BF] bg-[#92cef178] border-0 w-8"
          >
            1
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="px-2 text-white bg-[#2086BF] w-8"
          >
            2
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="px-2 text-[#2086BF] bg-[#92cef178] border-0 w-8"
          >
            3
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-2 bg-[#92cef178] border-0"
          >
            <IoMdArrowDropright className="rotate-x  text-[#2086BF]" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
