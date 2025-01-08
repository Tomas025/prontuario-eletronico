/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
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
  itemsPerPageOptions?: number[];
  showClassificationFilter?: boolean; // Controla a exibição do filtro de classificação
};

export function CustomTable({
  columns,
  data,
  itemsPerPageOptions = [10, 20, 30, 40, 50],
  showClassificationFilter = false // Padrão: não mostrar filtro de classificação
}: CustomTableProps) {
  const [globalFilter, setGlobalFilter] = useState('');
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(itemsPerPageOptions[0]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  // Configuração da tabela com TanStack Table
  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      columnFilters, // Adicionando estado para filtros de coluna
      pagination: { pageIndex, pageSize }
    },
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters, // Controle de filtros por coluna
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

  return (
    <div>
      {/* Barra de pesquisa e filtro de classificação */}
      <div className="flex items-center space-x-4 mb-4">
        <div
          className={`relative ${showClassificationFilter ? 'w-3/4' : 'w-full'}`}
        >
          <IoIosSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 size-6 text-blue/06" />
          <input
            type="text"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Pesquise paciente"
            className="p-2 pl-10 border border-blue/07 bg-gray/04 rounded-md shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue/07 placeholder-gray/01"
          />
        </div>
        {showClassificationFilter && (
          <div className="relative w-1/4">
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
      </div>

      {/* Tabela */}
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
            {table.getRowModel().rows.map((row) => (
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
            ))}
          </TableBody>
        </Table>

        {/* Controles de Paginação */}
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
