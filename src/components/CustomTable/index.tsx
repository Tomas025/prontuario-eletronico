/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useMemo } from 'react';
import { FaAngleLeft } from 'react-icons/fa6';
import { FaAngleRight } from 'react-icons/fa6';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../ui/table';

type Column = {
  key: string;
  label: string;
  render?: (data: any) => React.ReactNode;
};

type CustomTableProps = {
  columns: Column[];
  data: any[];
  pagination?: boolean;
  itemsPerPageOptions?: number[];
  searchQuery?: string;
  statusFilter?: string;
};

export function CustomTable({
  columns,
  data,
  pagination = true,
  itemsPerPageOptions = [10, 20, 30, 40, 50],
  searchQuery = '',
  statusFilter = ''
}: CustomTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);
  pagination = true;
  // Filtragem por barra de pesquisa e status
  const filteredData = useMemo(() => {
    return data.filter((row) => {
      const matchesSearchQuery = searchQuery
        ? columns.some((column) => {
            const cellValue = column.render
              ? String(column.render(row))
                  .replace(/<[^>]+>/g, '')
                  .trim()
              : String(row[column.key]);
            return cellValue.toLowerCase().includes(searchQuery.toLowerCase());
          })
        : true;

      const matchesStatusFilter = statusFilter
        ? row.status === statusFilter
        : true;

      return matchesSearchQuery && matchesStatusFilter;
    });
  }, [data, columns, searchQuery, statusFilter]);

  // Calcular dados da página atual
  const paginatedData = useMemo(() => {
    if (!pagination) return filteredData;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, currentPage, itemsPerPage, pagination]);
  // Calcular número total de páginas
  const totalPages = useMemo(() => {
    if (!pagination) return 1;
    return Math.ceil(filteredData.length / itemsPerPage);
  }, [filteredData, itemsPerPage, pagination]);
  // Função para determinar páginas visíveis
  const visiblePages = useMemo(() => {
    const pages = [];
    for (
      let i = Math.max(1, currentPage - 2);
      i <= Math.min(totalPages, currentPage + 2);
      i++
    ) {
      pages.push(i);
    }
    return pages;
  }, [currentPage, totalPages]);

  return (
    <div className="w-full bg-white shadow-md rounded-lg font-sans">
      <Table>
        <TableHeader>
          {/* n sei pq mas o hover ficava branco se eu não deixasse assim */}
          <TableRow className="bg-blue/09 hover:bg-blue/09">
            {columns.map((column) => (
              <TableHead
                key={column.key}
                className="p-4 font-semibold text-blue/03 text-lg"
              >
                {column.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((row, index) => (
            <TableRow
              key={index}
              className="border-b border-gray-200 hover:bg-gray-50"
            >
              {columns.map((column) => (
                <TableCell
                  key={column.key}
                  className="p-4 text-blue/03 text-base"
                >
                  {column.render ? column.render(row) : row[column.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {pagination && filteredData.length > itemsPerPageOptions[0] && (
        <div className="flex justify-between items-center px-4 py-3 bg-white border-t">
          <div></div>
          <div className="flex items-center">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`w-8 h-8 flex justify-center items-center rounded-full mx-1 ${
                currentPage === 1 ? 'text-blue/04' : 'hover:bg-blue/07'
              }`}
            >
              <FaAngleLeft />
            </button>
            {visiblePages.map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 flex justify-center items-center rounded-full mx-1 ${
                  currentPage === page
                    ? 'bg-blue/04 text-white'
                    : 'hover:bg-blue/07 text-blue/03'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`w-8 h-8 flex justify-center items-center rounded-full mx-1 ${
                currentPage === totalPages ? 'text-blue/04' : 'hover:bg-blue/07'
              }`}
            >
              <FaAngleRight />
            </button>
          </div>
          <div className="flex items-center">
            <label
              htmlFor="itemsPerPage"
              className="text-sm font-medium text-gray-600"
            >
              Mostrar por página:
            </label>
            <select
              id="itemsPerPage"
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
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
      )}
    </div>
  );
}
