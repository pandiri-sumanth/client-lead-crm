import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleLogin = () => {
    console.log("Email:", email)
    console.log("Password:", password)

    if (
      email.trim() === "admin@gmail.com" &&
      password.trim() === "admin123"
    ) {
      localStorage.setItem("isLoggedIn", "true")
      navigate("/dashboard")
    } else {
      alert("Invalid Email or Password")
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg mb-4">
          <p className="text-sm font-semibold text-blue-700">
            Demo Credentials
          </p>
          <p className="text-sm text-gray-700">
            Email: admin@gmail.com
          </p>
          <p className="text-sm text-gray-700">
            Password: admin123
          </p>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Login