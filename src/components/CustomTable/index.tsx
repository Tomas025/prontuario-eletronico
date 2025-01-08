/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { IoIosSearch } from 'react-icons/io';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

type Column = {
  accessorKey: string;
  header: string;
  cell?: (info: any) => React.ReactNode;
};

type CustomTableProps = {
  columns: Column[];
  data: any[];
  itemsPerPageOptions?: number[];
};

export function CustomTable({
  columns,
  data,
  itemsPerPageOptions = [10, 20, 30, 40, 50],
}: CustomTableProps) {
  const [globalFilter, setGlobalFilter] = useState('');
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(itemsPerPageOptions[0]);

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      pagination: { pageIndex, pageSize },
    },
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: (updater) => {
      if (typeof updater === 'function') {
        const newPagination = updater({ pageIndex, pageSize });
        setPageIndex(newPagination.pageIndex);
        setPageSize(newPagination.pageSize);
      } else {
        setPageIndex(updater.pageIndex);
        setPageSize(updater.pageSize);
      }
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const totalPages = table.getPageCount();

  return (
    <div> 
      <div className="relative mb-4">
        <IoIosSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 size-6 text-blue/06" />
        <input
          type="text"
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Pesquise paciente, status, data..."
          className="p-1 pl-10 border border-blue/07 bg-gray/04 rounded-md shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue/07 placeholder-gray/01"
        />
      </div>
      <div className="w-full bg-white shadow-md rounded-lg font-sans">
        {/* Barra de pesquisa */}
        
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-b border-blue/08">
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="p-5 font-semibold text-blue/03 text-sm hover:bg-blue/09 bg-blue/09"
                  >
                    {header.isPlaceholder
                      ? null
                      : typeof header.column.columnDef.header === 'function'
                        ? header.column.columnDef.header(header.getContext())
                        : header.column.columnDef.header}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} className="border-b border-blue/08">
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="p-5 text-blue/03 text-sm bg-gray/04">
                    {typeof cell.column.columnDef.cell === 'function'
                      ? cell.column.columnDef.cell(cell.getContext())
                      : cell.getValue()}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-evenly items-center px-4 py-3 bg-white border-t">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className={`w-8 h-8 flex justify-center items-center rounded-full mx-1 ${table.getCanPreviousPage()
                ? 'hover:bg-blue/07 text-blue/03'
                : 'text-gray-400 cursor-not-allowed'
              }`}
          >
            <FaAngleLeft />
          </button>
          <span>
            Página {pageIndex + 1} de {totalPages}
          </span>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className={`w-8 h-8 flex justify-center items-center rounded-full mx-1 ${table.getCanNextPage()
                ? 'hover:bg-blue/07 text-blue/03'
                : 'text-gray-400 cursor-not-allowed'
              }`}
          >
            <FaAngleRight />
          </button>
          <div className="flex items-center">
            <label htmlFor="itemsPerPage" className="text-sm font-medium text-gray-600">
              Mostrar por página:
            </label>
            <select
              id="itemsPerPage"
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPageIndex(0); // Resetar para a primeira página ao mudar o tamanho
              }}
              className="ml-2 px-3 py-1 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {itemsPerPageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
