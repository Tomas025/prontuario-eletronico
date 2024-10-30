import React from 'react';

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

const CustomTable: React.FC<CustomTableProps> = ({ columns, data }) => {
  return (
    <div className="w-full overflow-auto bg-white shadow-md rounded-lg">
      <table className="w-full text-left border-collapse">
        <thead className="bg-blue-100">
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="p-4 font-semibold text-gray-700">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
              {columns.map((column) => (
                <td key={column.key} className="p-4 text-gray-600">
                  {column.render ? column.render(row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

    
    </div>
  );
};

export default CustomTable;
