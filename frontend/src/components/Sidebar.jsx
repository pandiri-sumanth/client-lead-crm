import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-600 text-white p-6">
      <h2 className="text-3xl font-bold mb-10">
        CRM
      </h2>

      <ul className="space-y-6 text-lg">
        <li>
          <Link
            to="/dashboard"
            className="hover:text-gray-200"
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/leads"
            className="hover:text-gray-200"
          >
            Leads
          </Link>
        </li>

        <li>
          <Link
            to="/"
            className="hover:text-gray-200"
          >
            Logout
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar