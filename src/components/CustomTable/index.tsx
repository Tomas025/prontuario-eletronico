/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

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
};

export function CustomTable({ columns, data }: CustomTableProps) {
  return (
    <div className="w-full overflow-auto bg-white shadow-md rounded-lg font-sans">
      <Table>
        <TableHeader>
          <TableRow className="bg-blue-100">
            {columns.map((column) => (
              <TableHead
                key={column.key}
                className="p-4 font-semibold text-gray-700 text-lg"
              >
                {column.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              className="border-b border-gray-200 hover:bg-gray-50"
            >
              {columns.map((column) => (
                <TableCell
                  key={column.key}
                  className="p-4 text-gray-600 text-base"
                >
                  {column.render ? column.render(row) : row[column.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
