import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.email || !formData.password) {
      setError('Please enter both email and password.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address.')
      return
    }

    navigate('/home')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top,_#1e293b,_#020617_55%)] px-4 py-10">
      <div className="w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/70 shadow-2xl shadow-sky-900/20 backdrop-blur-xl">
        <div className="grid lg:grid-cols-2">
          <div className="relative hidden min-h-[700px] flex-col justify-between overflow-hidden bg-gradient-to-br from-sky-500 via-cyan-500 to-indigo-700 p-10 lg:flex">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.22),_transparent_45%)]" />
            <div className="relative z-10">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/15 text-xl font-bold backdrop-blur-md">
                  S
                </div>
                <span className="text-xl font-semibold tracking-wide">SocialWave</span>
              </div>

              <div className="space-y-6">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-100/80">
                  Welcome back
                </p>
                <h1 className="max-w-sm text-5xl font-black leading-tight text-white">
                  Stay connected to what matters.
                </h1>
                <p className="max-w-md text-lg text-sky-50/80">
                  Share moments, discover communities, and keep up with the people who inspire you.
                </p>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
              <div>
                <p className="text-sm text-sky-100/80">Today’s reach</p>
                <p className="mt-1 text-3xl font-bold text-white">2.4M</p>
              </div>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/20 bg-slate-200 text-xs font-bold text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-slate-950/80 p-6 sm:p-10 lg:p-12">
            <div className="w-full max-w-md">
              <div className="mb-8 text-center lg:text-left">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-400">
                  Login
                </p>
                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Sign in to your account</h2>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                {error && (
                  <div className="rounded-2xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300">
                    {error}
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-50 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-300">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-50 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-slate-300">
                    <input type="checkbox" className="h-4 w-4 accent-sky-500" />
                    Remember me
                  </label>
                  <button type="button" className="font-medium text-sky-400 transition hover:text-sky-300">
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 px-4 py-3.5 text-base font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:brightness-110"
                >
                  Sign in
                </button>
              </form>

              <div className="mt-7 flex items-center gap-3">
                <div className="h-px flex-1 bg-slate-700" />
                <span className="text-xs uppercase tracking-[0.3em] text-slate-500">or</span>
                <div className="h-px flex-1 bg-slate-700" />
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-600">
                  <span className="text-base">G</span>
                  Google
                </button>
                <button className="flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-600">
                  <span className="text-base">f</span>
                  Facebook
                </button>
              </div>

              <p className="mt-8 text-center text-sm text-slate-400">
                Don’t have an account?{' '}
                <Link to="/signup" className="font-semibold text-sky-400 transition hover:text-sky-300">
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
