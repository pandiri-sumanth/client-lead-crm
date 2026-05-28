import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

import {
  getLeads,
  deleteLead,
  updateLead
} from "../services/leadService"


function Leads() {

  const [leads, setLeads] = useState([])

  const [searchTerm, setSearchTerm] = useState("")


  useEffect(() => {
    fetchLeads()
  }, [])


  const fetchLeads = async () => {

    try {

      const data = await getLeads()

      setLeads(data)

    } catch (error) {

      console.log(error)

    }
  }


  const handleDelete = async (id) => {

    try {

      const response = await deleteLead(id)

      alert(response.message)

      fetchLeads()

    } catch (error) {

      console.log(error)

    }
  }


  const handleEdit = async (lead) => {

    const updatedName = prompt(
      "Enter Name",
      lead.name
    )

    const updatedEmail = prompt(
      "Enter Email",
      lead.email
    )

    const updatedCompany = prompt(
      "Enter Company",
      lead.company
    )


    const statusChoice = prompt(
      "Select Status:\n1. New\n2. Contacted\n3. Converted"
    )


    let updatedStatus = lead.status


    if (statusChoice === "1") {
      updatedStatus = "New"
    }

    else if (statusChoice === "2") {
      updatedStatus = "Contacted"
    }

    else if (statusChoice === "3") {
      updatedStatus = "Converted"
    }


    if (
      !updatedName ||
      !updatedEmail ||
      !updatedCompany
    ) {
      return
    }


    try {

      const response = await updateLead(
        lead.id,
        {
          name: updatedName,
          email: updatedEmail,
          company: updatedCompany,
          status: updatedStatus
        }
      )

      alert(response.message)

      fetchLeads()

    } catch (error) {

      console.log(error)

    }
  }


  const filteredLeads = leads.filter((lead) =>

    lead.name.toLowerCase().includes(
      searchTerm.toLowerCase()
    )

  )


  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Navbar />

        <div className="p-8">

          <div className="flex justify-between items-center mb-6">

            <h1 className="text-4xl font-bold">
              Leads
            </h1>

            <Link
              to="/add-lead"
              className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
            >
              Add Lead
            </Link>

          </div>


          <input
            type="text"
            placeholder="Search Leads..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            className="w-full border p-3 rounded-lg mb-6"
          />


          <div className="bg-white rounded-xl shadow-md overflow-hidden">

            <table className="w-full">

              <thead className="bg-blue-600 text-white">

                <tr>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Company</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>

              </thead>


              <tbody>

                {filteredLeads.length === 0 ? (

                  <tr>

                    <td
                      colSpan="5"
                      className="text-center p-6 text-gray-500"
                    >
                      No Leads Found
                    </td>

                  </tr>

                ) : (

                  filteredLeads.map((lead) => (

                    <tr
                      key={lead.id}
                      className="border-b hover:bg-gray-50"
                    >

                      <td className="p-4">
                        {lead.name}
                      </td>

                      <td className="p-4">
                        {lead.email}
                      </td>

                      <td className="p-4">
                        {lead.company}
                      </td>

                      <td className="p-4">

                        <span
                          className={`px-3 py-1 rounded-full text-sm text-white

                          ${lead.status === "New"
                            ? "bg-blue-500"
                            : lead.status === "Contacted"
                            ? "bg-yellow-500"
                            : "bg-green-500"
                          }`}
                        >
                          {lead.status}
                        </span>

                      </td>

                      <td className="p-4 space-x-3">

                        <button
                          onClick={() => handleEdit(lead)}
                          className="bg-yellow-400 px-3 py-1 rounded"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(lead.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded"
                        >
                          Delete
                        </button>

                      </td>

                    </tr>

                  ))

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Leads