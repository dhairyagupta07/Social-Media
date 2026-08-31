const stories = [
  { name: 'Ava', color: 'from-pink-500 to-orange-400' },
  { name: 'Noah', color: 'from-cyan-500 to-blue-500' },
  { name: 'Mia', color: 'from-violet-500 to-fuchsia-500' },
  { name: 'Leo', color: 'from-emerald-500 to-teal-500' },
  { name: 'Zoe', color: 'from-amber-500 to-red-500' },
]

const trending = [
  { tag: '#React', posts: '24.8K posts' },
  { tag: '#UIUX', posts: '18.2K posts' },
  { tag: '#Design', posts: '12.1K posts' },
  { tag: '#Tech', posts: '9.6K posts' },
]

const posts = [
  {
    user: 'Emma Wilson',
    handle: '@emmaw',
    time: '2h ago',
    text: 'Morning coffee, fresh ideas, and a clear plan for the day. What is everyone building today?',
    likes: 1240,
    comments: 188,
    shares: 62,
    accent: 'from-rose-500 to-orange-400',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80',
  },
  {
    user: 'Daniel Brooks',
    handle: '@danielb',
    time: '4h ago',
    text: 'Just shipped a new concept for a community dashboard. Feedback is always welcome — especially from users who live in the details.',
    likes: 980,
    comments: 121,
    shares: 47,
    accent: 'from-cyan-500 to-blue-600',
    image: null,
  },
  {
    user: 'Sofia Lee',
    handle: '@sofia',
    time: '7h ago',
    text: 'A little reminder to take a break and enjoy the process. Creativity is not a sprint — it is a rhythm.',
    likes: 2100,
    comments: 314,
    shares: 90,
    accent: 'from-violet-500 to-fuchsia-500',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
  },
]

const sidebarLinks = ['Home', 'Explore', 'Notifications', 'Messages', 'Bookmarks', 'Profile']

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-violet-500 text-lg font-bold text-white">
              S
            </div>
            <div>
              <p className="text-lg font-bold tracking-wide">SocialWave</p>
            </div>
          </div>

          <div className="hidden flex-1 justify-center md:flex">
            <div className="w-full max-w-lg rounded-full border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-slate-400">
              Search people, topics, or keywords
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-medium text-slate-200 hover:border-slate-600">
              New post
            </button>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 font-bold text-white">
              JW
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[260px_minmax(0,1fr)_320px] lg:px-8">
        <aside className="hidden lg:block">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-xl shadow-slate-950/20">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 to-pink-500 text-lg font-bold text-white">
                JW
              </div>
              <div>
                <p className="font-semibold text-white">Jamie Walker</p>
                <p className="text-sm text-slate-400">@jamiew</p>
              </div>
            </div>

            <div className="mb-5 space-y-2">
              {sidebarLinks.map((link, index) => (
                <div
                  key={link}
                  className={`flex cursor-pointer items-center justify-between rounded-2xl px-3 py-2.5 text-sm transition ${
                    index === 0
                      ? 'bg-sky-500/10 text-sky-300 ring-1 ring-sky-500/20'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <span>{link}</span>
                  {index === 2 && <span className="rounded-full bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white">9</span>}
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="mb-3 text-sm font-semibold text-white">Profile strength</p>
              <div className="mb-2 h-2 w-full overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-sky-500 to-violet-500" />
              </div>
              <p className="text-xs text-slate-400">82% complete</p>
            </div>
          </div>
        </aside>

        <section className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 shadow-xl shadow-slate-950/20">
            <div className="mb-4 flex items-center gap-3 overflow-x-auto pb-2">
              {stories.map((story) => (
                <div key={story.name} className="min-w-[80px] text-center">
                  <div className={`mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${story.color} p-[2px]`}>
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">
                      {story.name.slice(0, 2)}
                    </div>
                  </div>
                  <p className="text-xs text-slate-300">{story.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 shadow-xl shadow-slate-950/20">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 font-semibold text-white">
                JW
              </div>
              <div className="flex-1 rounded-full border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-400">
                Share something with your community...
              </div>
            </div>
            <div className="flex gap-3 text-sm text-slate-300">
              <button className="rounded-full bg-slate-800 px-3 py-2 hover:bg-slate-700">Photo</button>
              <button className="rounded-full bg-slate-800 px-3 py-2 hover:bg-slate-700">Video</button>
              <button className="rounded-full bg-slate-800 px-3 py-2 hover:bg-slate-700">Article</button>
            </div>
          </div>

          {posts.map((post) => (
            <article key={post.user} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 shadow-xl shadow-slate-950/20">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${post.accent} font-bold text-white`}>
                    {post.user.slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{post.user}</p>
                    <p className="text-xs text-slate-400">
                      {post.handle} • {post.time}
                    </p>
                  </div>
                </div>
                <button className="text-lg text-slate-400">•••</button>
              </div>

              <p className="mb-4 text-[15px] leading-7 text-slate-200">{post.text}</p>

              {post.image && (
                <div className="mb-4 overflow-hidden rounded-3xl border border-slate-700">
                  <img src={post.image} alt={post.user} className="h-72 w-full object-cover" />
                </div>
              )}

              <div className="flex items-center justify-between border-t border-slate-800 pt-3 text-sm text-slate-400">
                <div className="flex items-center gap-6">
                  <span>❤ {post.likes.toLocaleString()}</span>
                  <span>💬 {post.comments}</span>
                  <span>↗ {post.shares}</span>
                </div>
                <button className="rounded-full border border-slate-700 px-3 py-1.5 hover:border-slate-600 hover:text-slate-200">
                  Save
                </button>
              </div>
            </article>
          ))}
        </section>

        <aside className="hidden xl:block">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-xl shadow-slate-950/20">
              <p className="mb-4 text-lg font-semibold text-white">Trending</p>
              <div className="space-y-3">
                {trending.map((item) => (
                  <div key={item.tag} className="rounded-2xl bg-slate-950/60 p-3">
                    <p className="font-medium text-slate-200">{item.tag}</p>
                    <p className="text-xs text-slate-400">{item.posts}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-sky-500/10 via-slate-900 to-violet-500/10 p-5 shadow-xl shadow-slate-950/20">
              <p className="mb-3 text-lg font-semibold text-white">Suggested for you</p>
              <div className="space-y-4">
                {['Alicia', 'Marcus', 'Nora'].map((person) => (
                  <div key={person} className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-violet-500 text-xs font-bold text-white">
                        {person.slice(0, 2)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{person}</p>
                        <p className="text-xs text-slate-400">Product Designer</p>
                      </div>
                    </div>
                    <button className="rounded-full bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-200 hover:bg-slate-700">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  )
}

export default Home
