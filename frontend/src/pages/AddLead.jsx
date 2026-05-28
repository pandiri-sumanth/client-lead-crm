import { useState } from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { addLead } from "../services/leadService"

function AddLead() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    status: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await addLead(formData)

      alert(response.message)

      setFormData({
        name: "",
        email: "",
        company: "",
        status: "",
      })

    } catch (error) {
      console.log(error)

      alert("Error adding lead")
    }
  }

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />

        <div className="p-8">
          <h1 className="text-4xl font-bold mb-6">
            Add Lead
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-md max-w-xl"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mb-4"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mb-4"
            />

            <input
              type="text"
              name="company"
              placeholder="Enter company"
              value={formData.company}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mb-4"
            />

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mb-4"
            >
              <option value="">Select Status</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Converted">Converted</option>
            </select>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Save Lead
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddLead