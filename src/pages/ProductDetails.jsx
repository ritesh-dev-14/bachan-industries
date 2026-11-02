
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Factory,
  Gauge,
  ShieldCheck,
  Zap,
} from 'lucide-react'

import { products } from '../data'
import Reveal from '../components/Reveal'

export default function ProductDetails() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)

  if (!product) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-black">404</h1>
        <p className="mt-4 text-white/60">Product not found.</p>
        <Link to="/products" className="btn-primary mt-8">
          Back to Products <ArrowRight size={16} />
        </Link>
      </section>
    )
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 3)

  const allImages = [product.image, ...(product.gallery || [])]

  return (
    <>
      {/* PRODUCT HERO */}
      <section className="relative min-h-[650px] overflow-hidden pt-28">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
        </div>

        <div className="container-shell relative z-10 flex min-h-[520px] flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link
              to="/products"
              className="mb-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-signal"
            >
              <ArrowLeft size={15} /> Back to Products
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow mb-5"
          >
            {product.category} / Bachan Industries
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl"
          >
            {product.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-white/60"
          >
            {product.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link to="/contact" className="btn-primary">
              Enquire About This Product <ArrowUpRight size={17} />
            </Link>
            <a href="#specifications" className="btn-secondary">
              Technical Details <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 h-[3px] w-2/5 bg-signal" />
      </section>

      {/* INTRODUCTION */}
      <section className="section-pad">
        <div className="container-shell grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <p className="eyebrow mb-4">Product Overview</p>
            <h2 className="heading-lg">
              Technology designed
              <br />
              for <span className="text-signal">performance.</span>
            </h2>
            <p className="mt-7 text-base leading-8 text-white/60">
              {product.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-signal/30 bg-signal/10 px-4 py-2 text-xs font-bold text-signal">
                {product.tag}
              </span>
              <span className="rounded-full border border-white/15 px-4 py-2 text-xs font-bold text-white/65">
                {product.category}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <motion.img
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.7 }}
                src={product.image}
                alt={product.name}
                className="h-[420px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <Factory className="text-signal" size={25} />
                <span className="text-sm font-bold">Bachan Industries</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      {product.features?.length > 0 && (
        <section className="section-pad bg-[#0a1d26]">
          <div className="container-shell">
            <Reveal>
              <p className="eyebrow mb-4">Key Capabilities</p>
              <h2 className="heading-lg">
                What makes it
                <br />
                <span className="text-signal">different.</span>
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.features.map((feature, i) => (
                <Reveal key={feature} delay={i * 0.05}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex h-full items-start gap-4 rounded-xl border border-white/10 bg-white/[.025] p-6 transition hover:border-signal/40"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-signal/10 text-signal">
                      <CheckCircle2 size={20} />
                    </div>
                    <p className="pt-2 text-sm font-medium leading-6 text-white/75">
                      {feature}
                    </p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TECHNICAL SPECIFICATIONS */}
      {product.specifications?.length > 0 && (
        <section id="specifications" className="section-pad scroll-mt-24">
          <div className="container-shell">
            <Reveal>
              <p className="eyebrow mb-4">Technical Information</p>
              <h2 className="heading-lg">
                Technical
                <br />
                <span className="text-signal">Specifications.</span>
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-white/50">
                Explore the technical details and configurations of this
                product.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full min-w-[600px] border-collapse text-left">
                  <thead>
                    {product.models ? (
                      <tr className="bg-signal text-white">
                        <th className="px-6 py-5 text-sm font-bold">
                          Parameters
                        </th>
                        {product.models.map(model => (
                          <th key={model} className="px-5 py-5 text-sm font-bold">
                            {model}
                          </th>
                        ))}
                      </tr>
                    ) : (
                      <tr className="bg-signal text-white">
                        <th className="px-6 py-5 text-sm font-bold">
                          Technical Parameters
                        </th>
                        <th className="px-6 py-5 text-sm font-bold">
                          Specifications
                        </th>
                      </tr>
                    )}
                  </thead>

                  <tbody>
                    {product.specifications.map((spec, i) => (
                      <tr
                        key={spec.label}
                        className={`border-t border-white/10 transition hover:bg-signal/5 ${
                          i % 2 === 0 ? 'bg-white/[.025]' : 'bg-transparent'
                        }`}
                      >
                        <td className="px-6 py-5 text-sm font-semibold text-white/80">
                          {spec.label}
                        </td>

                        {product.models ? (
                          spec.values.map((value, index) => (
                            <td
                              key={index}
                              className="px-5 py-5 text-sm text-white/55"
                            >
                              {value}
                            </td>
                          ))
                        ) : (
                          <td className="px-6 py-5 text-sm text-white/60">
                            {spec.value}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* MODELS */}
      {product.models && (
        <section className="pb-20">
          <div className="container-shell">
            <Reveal>
              <p className="eyebrow mb-5">Available Configurations</p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {product.models.map((model, i) => (
                  <motion.div
                    key={model}
                    whileHover={{ y: -5 }}
                    className="rounded-xl border border-white/10 bg-white/[.03] p-6"
                  >
                    <p className="text-xs uppercase tracking-widest text-white/40">
                      Model {i + 1}
                    </p>
                    <h3 className="mt-3 text-2xl font-black text-signal">
                      {model}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* APPLICATIONS */}
      {product.applications?.length > 0 && (
        <section className="section-pad bg-mist text-ink">
          <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <Reveal>
              <p className="eyebrow mb-4">Where It Works</p>
              <h2 className="heading-lg">
                Built for
                <br />
                real-world <span className="text-signal">applications.</span>
              </h2>
              <p className="mt-5 leading-7 text-ink/55">
                Explore the different applications and industries where this
                technology can be used.
              </p>
            </Reveal>

            <div className="grid gap-3 sm:grid-cols-2">
              {product.applications.map((application, i) => (
                <Reveal key={application} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 border-b border-ink/10 py-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-signal/10 text-signal">
                      <ChevronRight size={17} />
                    </span>
                    <span className="text-sm font-semibold">
                      {application}
                    </span>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* MATERIALS */}
      {product.materials?.length > 0 && (
        <section className="section-pad">
          <div className="container-shell">
            <Reveal>
              <p className="eyebrow mb-4">Material Compatibility</p>
              <h2 className="heading-lg">
                Materials we
                <br />
                <span className="text-signal">can work with.</span>
              </h2>
            </Reveal>

            <div className="mt-10 flex flex-wrap gap-3">
              {product.materials.map((material, i) => (
                <motion.span
                  key={material}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-full border border-white/15 bg-white/[.03] px-5 py-3 text-sm font-semibold text-white/75"
                >
                  {material}
                </motion.span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* COMPONENT GALLERY */}
      {product.components?.length > 0 && (
        <section className="section-pad bg-[#0a1d26]">
          <div className="container-shell">
            <Reveal>
              <p className="eyebrow mb-4">Components & Technology</p>
              <h2 className="heading-lg">
                Precision in
                <br />
                <span className="text-signal">every component.</span>
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {product.components.map((component, i) => (
                <Reveal key={component.name} delay={i * 0.1}>
                  <div className="overflow-hidden rounded-xl border border-white/10">
                    <img
                      src={component.image}
                      alt={component.name}
                      className="h-64 w-full object-contain bg-white p-5"
                    />
                    <div className="p-5">
                      <h3 className="font-bold">{component.name}</h3>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PRODUCT GALLERY */}
      {allImages.length > 1 && (
        <section className="section-pad">
          <div className="container-shell">
            <Reveal>
              <p className="eyebrow mb-4">Product Gallery</p>
              <h2 className="heading-lg">
                A closer look.
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {allImages.map((image, i) => (
                <Reveal key={image} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="overflow-hidden rounded-2xl border border-white/10"
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${i + 1}`}
                      className="h-[320px] w-full object-contain bg-white p-4"
                    />
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <section className="section-pad bg-[#0a1d26]">
          <div className="container-shell">
            <Reveal>
              <p className="eyebrow mb-4">Explore More</p>
              <h2 className="heading-lg">
                Related <span className="text-signal">products.</span>
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {relatedProducts.map((item, i) => (
                <Reveal key={item.id} delay={i * 0.1}>
                  <Link
                    to={`/products/${item.slug}`}
                    className="group block overflow-hidden rounded-xl border border-white/10 bg-white/[.025]"
                  >
                    <div className="h-52 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <p className="eyebrow !text-[9px]">{item.category}</p>
                      <h3 className="mt-3 font-bold">{item.name}</h3>
                      <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-signal">
                        Explore Product <ArrowUpRight size={15} />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ENQUIRY CTA */}
      <section className="section-pad">
        <div className="container-shell">
          <div className="relative overflow-hidden rounded-3xl bg-signal p-8 sm:p-14">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/20" />

            <div className="relative z-10 max-w-3xl">
              <p className="eyebrow !text-white/70">
                Let's Discuss Your Requirements
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                Interested in
                <br />
                {product.shortName}?
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-white/80">
                Contact Bachan Industries to discuss your application,
                technical requirements and suitable machine configurations.
              </p>

              <Link
                to="/contact"
                state={{ product: product.name }}
                className="btn-white mt-8"
              >
                Enquire Now <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
