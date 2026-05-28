import { useEffect, useState } from "react"

import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

import { getStats } from "../services/leadService"


function Dashboard() {

  const [stats, setStats] = useState({
    total: 0,
    contacted: 0,
    converted: 0
  })


  useEffect(() => {
    fetchStats()
  }, [])


  const fetchStats = async () => {

    try {

      const data = await getStats()

      setStats(data)

    } catch (error) {

      console.log(error)

    }
  }


  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Navbar />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-6">
            Dashboard
          </h1>


          <div className="grid grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl shadow-md">

              <h2 className="text-xl font-semibold">
                Total Leads
              </h2>

              <p className="text-3xl font-bold text-blue-600 mt-4">
                {stats.total}
              </p>

            </div>


            <div className="bg-white p-6 rounded-xl shadow-md">

              <h2 className="text-xl font-semibold">
                Contacted
              </h2>

              <p className="text-3xl font-bold text-green-600 mt-4">
                {stats.contacted}
              </p>

            </div>


            <div className="bg-white p-6 rounded-xl shadow-md">

              <h2 className="text-xl font-semibold">
                Converted
              </h2>

              <p className="text-3xl font-bold text-purple-600 mt-4">
                {stats.converted}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard