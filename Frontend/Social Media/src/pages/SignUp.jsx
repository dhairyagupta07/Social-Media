import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { firstName, lastName, email, password, confirmPassword, agree } = formData

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError('Please fill in all required fields.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (!agree) {
      setError('You must agree to the terms and privacy policy.')
      return
    }

    navigate('/home')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top,_#111827,_#020617_55%)] px-4 py-10">
      <div className="w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/70 shadow-2xl shadow-violet-900/20 backdrop-blur-xl">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center justify-center bg-slate-950/80 p-6 sm:p-10 lg:p-12">
            <div className="w-full max-w-md">
              <div className="mb-8 text-center lg:text-left">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
                  Sign up
                </p>
                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Create your account</h2>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                {error && (
                  <div className="rounded-2xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300">
                    {error}
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-slate-300">
                      First name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-50 placeholder:text-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-slate-300">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-50 placeholder:text-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="signup-email" className="mb-2 block text-sm font-medium text-slate-300">
                    Email address
                  </label>
                  <input
                    id="signup-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-50 placeholder:text-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                  />
                </div>

                <div>
                  <label htmlFor="signup-password" className="mb-2 block text-sm font-medium text-slate-300">
                    Password
                  </label>
                  <input
                    id="signup-password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-50 placeholder:text-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-slate-300">
                    Confirm password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Repeat your password"
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-50 placeholder:text-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                  />
                </div>

                <div className="flex items-start gap-2 text-sm text-slate-300">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 accent-violet-500"
                  />
                  <span>
                    I agree to the <button type="button" className="font-medium text-violet-400">Terms</button> and{' '}
                    <button type="button" className="font-medium text-violet-400">Privacy Policy</button>
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-3.5 text-base font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:brightness-110"
                >
                  Create account
                </button>
              </form>

              <p className="mt-8 text-center text-sm text-slate-400">
                Already have an account?{' '}
                <Link to="/login" className="font-semibold text-violet-400 transition hover:text-violet-300">
                  Sign in
                </Link>
              </p>
            </div>
          </div>

          <div className="relative hidden min-h-[700px] flex-col justify-between overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-700 p-10 lg:flex">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.22),_transparent_45%)]" />

            <div className="relative z-10">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/15 text-xl font-bold backdrop-blur-md">
                  S
                </div>
                <span className="text-xl font-semibold tracking-wide">SocialWave</span>
              </div>

              <div className="space-y-6">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-100/80">
                  Join the community
                </p>
                <h1 className="max-w-sm text-5xl font-black leading-tight text-white">
                  Start building your digital story.
                </h1>
                <p className="max-w-md text-lg text-violet-50/80">
                  Connect with friends, creators, and brands worldwide in a vibrant social space built for sharing.
                </p>
              </div>
            </div>

            <div className="relative z-10 grid gap-4">
              {["Find your people", "Grow your network", "Share your voice"].map((item, index) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-lg font-medium text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
