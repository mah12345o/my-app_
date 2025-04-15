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

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BsFilterSquare } from "react-icons/bs";
import { FaCalendarAlt, FaEye } from "react-icons/fa";
import {
  IoIosSearch,
  IoMdArrowDropleft,
  IoMdArrowDropright,
} from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { TiArrowSortedDown } from "react-icons/ti";
import { CommonBtn } from "../dashboard/CommonBtn";
import { MenuBar } from "./MenuBar";
import Link from "next/link";

// Mock data
const data: Product[] = [
  {
    id: "1",
    product: "Handmade Pouch",
    variants: 3,
    sku: "302012",
    category: "Bag & Pouch",
    stock: 10,
    price: 121.0,
    status: "Low Stock",
    added: "29 Dec 2022",
  },
  {
    id: "2",
    product: "Smartwatch E2",
    variants: 2,
    sku: "302011",
    category: "Watch",
    stock: 204,
    price: 590.0,
    status: "Published",
    added: "24 Dec 2022",
  },
  {
    id: "3",
    product: "Smartwatch E1",
    variants: 3,
    sku: "302002",
    category: "Watch",
    stock: 48,
    price: 125.0,
    status: "Draft",
    added: "12 Dec 2022",
  },
  {
    id: "4",
    product: "Headphone G1 Pro",
    variants: 1,
    sku: "301901",
    category: "Audio",
    stock: 401,
    price: 348.0,
    status: "Published",
    added: "21 Oct 2022",
  },
  {
    id: "5",
    product: "Iphone X",
    variants: 4,
    sku: "301900",
    category: "Smartphone",
    stock: 120,
    price: 607.0,
    status: "Published",
    added: "21 Oct 2022",
  },
  {
    id: "6",
    product: "Puma Shoes",
    variants: 3,
    sku: "301881",
    category: "Shoes",
    stock: 432,
    price: 234.0,
    status: "Published",
    added: "21 Oct 2022",
  },
  {
    id: "7",
    product: "Logic+ Wireless Mouse",
    variants: 1,
    sku: "301643",
    category: "Mouse",
    stock: 0,
    price: 760.0,
    status: "Out of Stock",
    added: "19 Sep 2022",
  },
  {
    id: "8",
    product: "Nike Shoes",
    variants: 3,
    sku: "301600",
    category: "Shoes",
    stock: 347,
    price: 400.0,
    status: "Published",
    added: "19 Sep 2022",
  },
  {
    id: "9",
    product: "Lego Car",
    variants: 2,
    sku: "301555",
    category: "Toys",
    stock: 299,
    price: 812.0,
    status: "Published",
    added: "19 Sep 2022",
  },
  {
    id: "10",
    product: "PS Wireless Controller",
    variants: 3,
    sku: "301002",
    category: "Beauty",
    stock: 38,
    price: 123.0,
    status: "Draft",
    added: "10 Aug 2022",
  },
];

export type Product = {
  id: string;
  product: string;
  variants: number;
  sku: string;
  category: string;
  stock: number;
  price: number;
  status: "Published" | "Low Stock" | "Out of Stock" | "Draft";
  added: string;
};

export const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "product",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="px-2"
      >
        Product
        <TiArrowSortedDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gray-200 rounded" />
        <div>
          {row.original.product}
          {row.original.variants > 0 && (
            <div className="text-sm text-gray-500">
              {row.original.variants} Variants
            </div>
          )}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "sku",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="px-2"
      >
        SKU
        <TiArrowSortedDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-blue-600">{row.getValue("sku")}</div>
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="px-2 text-start"
      >
        Category
        <TiArrowSortedDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      return <div className="text-start pl-2">{row.getValue("category")}</div>;
    },
  },
  {
    accessorKey: "stock",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="px-2"
      >
        Stock
        <TiArrowSortedDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      return <div className="text-start pl-2">{row.getValue("stock")}</div>;
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="px-2"
      >
        Price
        <TiArrowSortedDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-start pl-2">
          {parseFloat(row.getValue("price"))}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="px-2"
      >
        Status
        <TiArrowSortedDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      let bgColor = "bg-gray-200 text-gray-700";
      if (status === "Published") bgColor = "bg-green-100 text-green-800";
      if (status === "Low Stock") bgColor = "bg-orange-100 text-orange-800";
      if (status === "Out of Stock") bgColor = "bg-red-100 text-red-800";
      return <Badge className={`px-2 py-1 rounded ${bgColor}`}>{status}</Badge>;
    },
  },
  {
    accessorKey: "added",
    header: "Added",
    cell: ({ row }) => row.getValue("added"),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <div className="flex text-gray-300">
          <Link href={`products/${row.getValue("sku")}`}>
            <MdEdit className="mr-2 h-4 w-4" />
          </Link>
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
    <div className="overflow-x-auto flex flex-col">
      <div className="flex items-center py-4">
        <div className="flex justify-between w-full items-center">
          <MenuBar />
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 border border-gray-200 rounded-lg p-2 bg-white">
              <IoIosSearch size={20} color="#4A4C56" />
              <input
                placeholder="Search products..."
                value={
                  (table.getColumn("product")?.getFilterValue() as string) ?? ""
                }
                onChange={(event) =>
                  table.getColumn("product")?.setFilterValue(event.target.value)
                }
                type="text"
                className="w-full focus:outline-0"
              />
            </div>
            <CommonBtn
              className="bg-white w-fit text-gray-400 h-fit py-2 rounded-lg px-3 border-gray-200 "
              text="Seletc Date"
            >
              <FaCalendarAlt className="text-[20px]" />
            </CommonBtn>
            <CommonBtn
              className="bg-white w-fit text-gray-400 h-fit py-2 rounded-lg px-3 border-gray-200 "
              text="Filters"
            >
              <BsFilterSquare className="text-[20px]" />
            </CommonBtn>
            <CommonBtn
              className="bg-white w-fit text-gray-400 h-fit py-2 rounded-lg px-3 border-gray-200 "
              text="Edit Column"
            >
              <RiDashboardHorizontalFill className="text-[20px]" />
            </CommonBtn>
          </div>
        </div>
      </div>
      <div className="rounded-md">
        <Table className="">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-b-neutral-100">
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="text-gray-500 bg-white py-3 px-4"
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
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="bg-white border-0"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-3 px-4">
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
      <div className="flex items-center bg-white justify-between overflow-y-auto py-5 text-sm text-gray-500">
        <div className="py-3 px-5 whitespace-nowrap">Showing 1-5 of 100</div>
        <div className="space-x-2 flex items-center pr-4">
          <Button
            variant="outline"
            size="sm"
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
            className="px-2 bg-[#92cef178] border-0"
          >
            <IoMdArrowDropright className="rotate-x  text-[#2086BF]" />
          </Button>
        </div>
      </div>
    </div>
  );
}
