import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Search, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { products } from '../data'
import Reveal from '../components/Reveal'

const filters = ['All solutions', ...new Set(products.map(p => p.category))]

export default function Products() {
  const [active, setActive] = useState('All solutions')
  const [query, setQuery] = useState('')

  const shown = useMemo(
    () =>
      products.filter(
        p =>
          (active === 'All solutions' || p.category === active) &&
          `${p.name} ${p.description} ${p.category}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [active, query]
  )

  return (
    <>
      <section className="inner-hero">
        <div className="container-shell relative z-10 py-32 pt-44">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow mb-5"
          >
            Engineered for performance
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight sm:text-7xl"
          >
            The right tool
            <br />
            for <span className="text-signal">the next cut.</span>
          </motion.h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
            Discover our actual industrial product portfolio, from fiber laser
            and plasma cutting machines to laser welding and precision
            components.
          </p>

          <div className="mt-10 flex gap-8">
            <div>
              <p className="text-4xl font-black text-signal">09</p>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-white/45">
                Product Solutions
              </p>
            </div>
            <div>
              <p className="text-4xl font-black">12+</p>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-white/45">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-12">
        <div className="container-shell">

          <div className="mb-10 space-y-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="eyebrow mb-2">Explore Our Range</p>
                <h2 className="text-2xl font-black sm:text-3xl">
                  Our Products & Solutions
                </h2>
              </div>

              <label className="flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-white/45 focus-within:border-signal">
                <Search size={17} />
                <input
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35 sm:w-52"
                />
              </label>
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`rounded-full border px-4 py-2.5 text-xs font-bold transition ${
                    active === f
                      ? 'border-signal bg-signal text-white'
                      : 'border-white/15 text-white/60 hover:border-white/40 hover:text-white'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {shown.map((p, i) => (
                <motion.article
                  layout
                  key={p.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: i * 0.035 }}
                  className="product-card group overflow-hidden"
                >
                  <Link to={`/products/${p.slug}`} className="block">
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />

                      <span className="absolute left-4 top-4 bg-signal px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white">
                        {p.tag}
                      </span>

                      <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink transition group-hover:bg-signal group-hover:text-white">
                        <ArrowUpRight size={19} />
                      </span>
                    </div>

                    <div className="p-6">
                      <p className="eyebrow !text-[9px]">{p.category}</p>

                      <h2 className="mt-3 min-h-[56px] text-xl font-bold">
                        {p.name}
                      </h2>

                      <p className="mt-3 min-h-[72px] text-sm leading-6 text-white/55">
                        {p.description}
                      </p>

                      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                        <span className="text-xs font-bold uppercase tracking-widest text-white">
                          View Specifications
                        </span>
                        <ArrowRight
                          size={17}
                          className="text-signal transition group-hover:translate-x-2"
                        />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {shown.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-xl font-bold">No matching products found</p>
              <p className="mt-2 text-sm text-white/50">
                Try a different search or category.
              </p>
              <button
                onClick={() => {
                  setActive('All solutions')
                  setQuery('')
                }}
                className="btn-secondary mt-5"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="section-pad bg-[#0a1d26]">
        <div className="container-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow mb-4">More Than Machinery</p>
            <h2 className="heading-lg">
              Support across
              <br />
              the machine's life.
            </h2>
            <p className="mt-5 leading-7 text-white/55">
              From getting started to keeping production moving, Bachan
              Industries also offers service-oriented solutions for industrial
              customers.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Installation guidance',
              'Operator training',
              'Spare parts',
              'Repairs & maintenance',
              'Retrofit support',
              'Software solutions',
            ].map((s, i) => (
              <Reveal key={s} delay={i * 0.07}>
                <div className="flex items-center gap-3 border-b border-white/10 py-4 text-sm">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-signal/10 text-signal">
                    <ArrowRight size={14} />
                  </span>
                  {s}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell rounded-2xl bg-signal p-8 sm:p-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="eyebrow !text-white/70">
                Have a specific requirement?
              </p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Let's talk about your application.
              </h2>
            </div>

            <Link to="/contact" className="btn-white">
              Request a Consultation <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
