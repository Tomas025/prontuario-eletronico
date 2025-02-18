/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { IoIosSearch } from 'react-icons/io';

import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnFiltersState
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../ui/table';

type Column = {
  accessorKey: string;
  header: string;
  cell?: (info: any) => React.ReactNode;
};

type CustomTableProps = {
  columns: Column[];
  data: any[];
  loading?: boolean; // Propriedade de loading adicionada
  itemsPerPageOptions?: number[];
  showClassificationFilter?: boolean;
  showStatusFilter?: boolean;
  customButton?: {
    name: React.ReactNode;
    link: string;
    isActive: boolean;
  };
};

export function CustomTable({
  columns,
  data,
  loading = false,
  itemsPerPageOptions = [10, 20, 30, 40, 50],
  showClassificationFilter = false,
  showStatusFilter = false,
  customButton
}: CustomTableProps) {
  const [globalFilter, setGlobalFilter] = useState('');
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(itemsPerPageOptions[0]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      columnFilters,
      pagination: { pageIndex, pageSize }
    },
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
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
    getPaginationRowModel: getPaginationRowModel()
  });

  const totalPages = table.getPageCount();
  const visiblePages = Array.from({ length: totalPages }, (_, i) => i);

  const placeholderText = `Pesquise ${columns
    .map(
      (col) =>
        col.header.charAt(0).toUpperCase() + col.header.slice(1).toLowerCase()
    )
    .join(', ')
    .replace(/,([^,]*)$/, ' $1')}`;

  return (
    <div>
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative flex-1">
          <IoIosSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 size-6 text-blue/06" />
          <input
            type="text"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder={placeholderText}
            className="p-2 pl-10 border border-blue/07 bg-gray/04 rounded-md shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue/07 placeholder-gray/01"
          />
        </div>

        {showClassificationFilter && (
          <div className="relative">
            <select
              value={
                (columnFilters.find((filter) => filter.id === 'classificacao')
                  ?.value as string) || 'Todos'
              }
              onChange={(e) => {
                const value = e.target.value;
                if (value === 'Todos') {
                  setColumnFilters((filters) =>
                    filters.filter((filter) => filter.id !== 'classificacao')
                  );
                } else {
                  setColumnFilters((filters) => [
                    ...filters.filter(
                      (filter) => filter.id !== 'classificacao'
                    ),
                    { id: 'classificacao', value }
                  ]);
                }
              }}
              className="p-2 border border-blue/07 bg-gray/04 rounded-md shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue/07"
            >
              <option value="Todos">Classificação - Todos</option>
              <option value="Emergência">Emergência</option>
              <option value="Muito Urgentes">Muito Urgentes</option>
              <option value="Urgência">Urgência</option>
              <option value="Menos Graves">Menos Graves</option>
              <option value="Leves">Leves</option>
            </select>
          </div>
        )}

        {showStatusFilter && (
          <div className="relative">
            <select
              value={
                (columnFilters.find((filter) => filter.id === 'status')
                  ?.value as string) || 'Todos'
              }
              onChange={(e) => {
                const value = e.target.value;
                if (value === 'Todos') {
                  setColumnFilters((filters) =>
                    filters.filter((filter) => filter.id !== 'status')
                  );
                } else {
                  setColumnFilters((filters) => [
                    ...filters.filter((filter) => filter.id !== 'status'),
                    { id: 'status', value }
                  ]);
                }
              }}
              className="p-2 border border-blue/07 bg-gray/04 rounded-md shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue/07"
            >
              <option value="Todos">Status - Todos</option>
              <option value="Triagem">Triagem</option>
              <option value="Atend. Médico">Atend. Médico</option>
              <option value="Enfermagem">Enfermagem</option>
              <option value="Laboratório">Laboratório</option>
              <option value="Internação">Internação</option>
              <option value="Observação">Observação</option>
              <option value="Alta">Alta</option>
            </select>
          </div>
        )}

        {customButton?.isActive && (
          <button
            onClick={() => (window.location.href = customButton.link)}
            className="p-2 px-4 bg-blue/02 text-white rounded shadow hover:bg-blue/04"
          >
            {customButton.name}
          </button>
        )}
      </div>

      <div className="w-full bg-white shadow-md rounded-lg font-sans">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-b border-blue/08"
              >
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
            {loading ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="p-5 text-center">
                  <FaSpinner className="animate-spin inline-block mr-2" />
                  Carregando...
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} className="border-b border-blue/08">
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="p-5 text-blue/03 text-sm bg-gray/04"
                    >
                      {typeof cell.column.columnDef.cell === 'function'
                        ? cell.column.columnDef.cell(cell.getContext())
                        : cell.getValue()}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="p-5 text-center">
                  Ainda não há dados para exibir.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div className="flex justify-between items-center px-4 py-3 bg-white border-t">
          <div></div>

          <div className="flex items-center">
            <label
              htmlFor="itemsPerPage"
              className="text-sm font-medium text-gray-600"
            >
              Mostrar por página:
            </label>
            <select
              id="itemsPerPage"
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPageIndex(0);
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
      <div className="flex items-center justify-center mt-4">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className={`w-8 h-8 flex justify-center items-center rounded-full mx-1 ${
            !table.getCanPreviousPage() ? 'text-blue/04' : 'hover:bg-blue/07'
          }`}
        >
          <FaAngleLeft />
        </button>
        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => table.setPageIndex(page)}
            className={`w-8 h-8 flex justify-center items-center rounded-full mx-1 ${
              pageIndex === page
                ? 'bg-blue/04 text-white'
                : 'hover:bg-blue/07 text-blue/03'
            }`}
          >
            {page + 1}
          </button>
        ))}
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className={`w-8 h-8 flex justify-center items-center rounded-full mx-1 ${
            !table.getCanNextPage() ? 'text-blue/04' : 'hover:bg-blue/07'
          }`}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}
