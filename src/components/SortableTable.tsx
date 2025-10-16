import { useState } from 'react';
import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react';

interface DataRow {
  name: string;
  status: string;
  users: number;
  revenue: number;
  growth: number;
}

export function SortableTable() {
  const [sortKey, setSortKey] = useState<keyof DataRow>('revenue');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const data: DataRow[] = [
    { name: 'Project Alpha', status: 'Active', users: 1250, revenue: 45000, growth: 23 },
    { name: 'Project Beta', status: 'Active', users: 890, revenue: 32000, growth: 15 },
    { name: 'Project Gamma', status: 'Pending', users: 2100, revenue: 78000, growth: 45 },
    { name: 'Project Delta', status: 'Active', users: 650, revenue: 28000, growth: 8 },
    { name: 'Project Epsilon', status: 'Completed', users: 3400, revenue: 125000, growth: 67 },
    { name: 'Project Zeta', status: 'Active', users: 1800, revenue: 55000, growth: 32 },
    { name: 'Project Eta', status: 'Pending', users: 950, revenue: 38000, growth: 18 },
    { name: 'Project Theta', status: 'Active', users: 1450, revenue: 62000, growth: 28 }
  ];

  const sortedData = [...data].sort((a, b) => {
    const aVal = a[sortKey];
    const bVal = b[sortKey];
    const modifier = sortOrder === 'asc' ? 1 : -1;

    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return aVal.localeCompare(bVal) * modifier;
    }
    return (Number(aVal) - Number(bVal)) * modifier;
  });

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (key: keyof DataRow) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('desc');
    }
  };

  const SortIcon = ({ column }: { column: keyof DataRow }) => {
    if (sortKey !== column) return <ChevronsUpDown className="w-4 h-4 text-slate-400" />;
    return sortOrder === 'asc' ?
      <ChevronUp className="w-4 h-4 text-blue-600" /> :
      <ChevronDown className="w-4 h-4 text-blue-600" />;
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Project Performance
          </h2>
          <p className="text-lg text-slate-600">
            Click column headers to sort
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl border border-blue-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white border-b border-blue-200">
                <tr>
                  <th
                    onClick={() => handleSort('name')}
                    className="px-6 py-4 text-left font-semibold text-blue-900 cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      Project Name
                      <SortIcon column="name" />
                    </div>
                  </th>
                  <th
                    onClick={() => handleSort('status')}
                    className="px-6 py-4 text-left font-semibold text-blue-900 cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      Status
                      <SortIcon column="status" />
                    </div>
                  </th>
                  <th
                    onClick={() => handleSort('users')}
                    className="px-6 py-4 text-right font-semibold text-blue-900 cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center justify-end gap-2">
                      Users
                      <SortIcon column="users" />
                    </div>
                  </th>
                  <th
                    onClick={() => handleSort('revenue')}
                    className="px-6 py-4 text-right font-semibold text-slate-700 cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center justify-end gap-2">
                      Revenue
                      <SortIcon column="revenue" />
                    </div>
                  </th>
                  <th
                    onClick={() => handleSort('growth')}
                    className="px-6 py-4 text-right font-semibold text-slate-700 cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center justify-end gap-2">
                      Growth
                      <SortIcon column="growth" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {paginatedData.map((row, index) => (
                  <tr key={index} className="hover:bg-white transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900">{row.name}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                        row.status === 'Active' ? 'bg-white text-emerald-700' :
                        row.status === 'Pending' ? 'bg-white text-amber-700' :
                        'bg-white text-slate-700'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-slate-900">{row.users.toLocaleString()}</td>
                    <td className="px-6 py-4 text-right font-medium text-slate-900">${row.revenue.toLocaleString()}</td>
                    <td className="px-6 py-4 text-right text-emerald-600 font-medium">+{row.growth}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white px-6 py-4 border-t border-blue-200 flex items-center justify-between">
            <div className="text-sm text-slate-600">
              Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, sortedData.length)} of {sortedData.length} entries
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-blue-300 rounded-lg text-blue-900 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    currentPage === page
                      ? 'bg-white text-black'
                       : 'border border-blue-300 text-blue-900 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
