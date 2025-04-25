import React from "react";
import { ChevronDown, Plus } from "lucide-react";
import logo from "../assets/logo.png";

const bookings = [
  {
    id: "AB_US_001",
    status: "Confirmed",
    icon: "🚗",
    productType: "Car",
    agent: "ABC Pvt. Ltd.",
    accountManager: "Drishti Yadav",
    source: "API",
    date: "03-02-2025",
    leadPax: "Rahul Sharma",
    paxDetails: "2A, 2C (4yrs, 8yrs)",
    city: "Melbourne",
  },
  // Add more rows...
];

const statusColors = {
  Confirmed: "bg-green-500",
  Cancelled: "bg-red-500",
  Travelled: "bg-blue-500",
  Vouchered: "bg-cyan-400",
};

export default function BookingDashboard() {
  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#121212] p-4 flex flex-col">
        <h1 className="flex text-xl font-bold mb-6">
          <img src={logo} alt="activitybeds" className="w-40" />
          <i class="">{"<<"}</i>
        </h1>
        <nav className="space-y-4">
          <SidebarLink label="User Management" />
          <SidebarLink label="Booking" active />
          <SidebarLink label="Agent" />
          <SidebarLink label="Supplier" />
          <SidebarLink label="Product" />
          <SidebarLink label="Settings" />
          <SidebarLink label="Help" />
        </nav>
        <button className="mt-auto text-sm text-gray-400">Log Out →</button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-[#1e1e1e]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Booking</h2>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-full flex items-center gap-2">
            <Plus size={16} /> New
          </button>
        </div>

        {/* Filters */}
        <div className="bg-[#2b2b2b] p-4 rounded-xl mb-6 flex flex-wrap gap-4 items-center">
          {[
            "Agent",
            "Supplier",
            "Booking ID",
            "Lead Pax Name",
            "Booking Status",
          ].map((label) => (
            <select
              key={label}
              className="bg-[#121212] text-white px-3 py-2 rounded-lg border border-gray-700"
            >
              <option>{label}</option>
            </select>
          ))}
          <button className="bg-pink-500 px-4 py-2 rounded-xl">Apply</button>
          <button className="border border-gray-600 px-4 py-2 rounded-xl">
            Filters
          </button>
        </div>

        {/* Table */}
        <div className="bg-[#121212] rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-[#2b2b2b] text-gray-400">
              <tr>
                <th className="p-4">Booking Status</th>
                <th>Agent</th>
                <th>Booking Source</th>
                <th>Booking ID</th>
                <th>Booking Date</th>
                <th>Travel Date</th>
                <th>Lead Pax Name</th>
                <th>Product Type</th>
                <th>Status</th>
                <th>Product City</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b, i) => (
                <tr
                  key={i}
                  className="border-t border-gray-800 hover:bg-[#1a1a1a]"
                >
                  <td className="p-4 text-center">{b.icon}</td>
                  <td>
                    <div className="font-medium">{b.agent}</div>
                    <div className="text-sm text-gray-400">
                      Acc. Manager - {b.accountManager}
                    </div>
                  </td>
                  <td>{b.source}</td>
                  <td className="text-pink-500">{b.id}</td>
                  <td>{b.date}</td>
                  <td>{b.date}</td>
                  <td>
                    <div>{b.leadPax}</div>
                    <div className="text-sm text-gray-400">{b.paxDetails}</div>
                  </td>
                  <td>{b.productType}</td>
                  <td>
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        statusColors[b.status]
                      }`}
                    >
                      {b.status}
                    </span>
                  </td>
                  <td>{b.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

const SidebarLink = ({ label, active }) => (
  <button
    className={`text-left px-3 py-2 rounded-lg ${
      active ? "bg-pink-500 text-white" : "text-gray-400 hover:bg-[#1a1a1a]"
    }`}
  >
    {label}
  </button>
);
