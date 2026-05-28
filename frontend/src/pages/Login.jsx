function Login() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter email"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Enter password"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
          Login
        </button>
      </div>
    </div>
  )
}

export default Login