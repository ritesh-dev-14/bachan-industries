// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronRight, Cog, Factory, Gauge, ShieldCheck, Zap } from 'lucide-react'
// import Reveal from '../components/Reveal'
// import SectionHeading from '../components/SectionHeading'
// import { products } from '../data'

// const heroImage = 'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=2000&q=90'
// export default function Home() {
//   return <>
//     <section className="hero-grid relative flex min-h-[780px] items-center overflow-hidden pt-28">
//       <div className="absolute inset-0"><img src={heroImage} alt="Industrial CNC machine in a modern workshop" className="h-full w-full object-cover opacity-35"/><div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/20"/><div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/15"/></div>
//       <div className="container-shell relative z-10 grid items-center gap-12 py-20 lg:grid-cols-[1.15fr_.85fr]">
//         <div>
//           <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[.22em] text-white/70"><span className="h-2 w-2 rounded-full bg-signal shadow-glow"/> Engineering a sharper future</motion.div>
//           <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.1}} className="max-w-4xl text-5xl font-black leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-[82px]">Precision that<br/>moves <span className="text-signal">industry.</span></motion.h1>
//           <motion.p initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.2}} className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">CNC Fiber Laser, Plasma Cutting and CNC Router solutions engineered for performance, reliability and the next generation of manufacturing.</motion.p>
//           <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.3}} className="mt-9 flex flex-wrap gap-4"><Link to="/products" className="btn-primary">Explore our machines <ArrowUpRight size={17}/></Link><Link to="/about" className="btn-secondary">Discover Bachan <ArrowRight size={16}/></Link></motion.div>
//           <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.6}} className="mt-14 flex items-center gap-4 text-xs uppercase tracking-[.16em] text-white/40"><span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15"><ArrowDown size={15}/></span> Scroll to explore</motion.div>
//         </div>
//         <motion.div initial={{opacity:0,scale:.94,x:25}} animate={{opacity:1,scale:1,x:0}} transition={{duration:1,delay:.25}} className="relative hidden lg:block">
//           <div className="absolute -inset-5 rounded-[2rem] border border-white/10"/><div className="absolute -right-4 -top-4 z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-signal text-center shadow-glow"><span className="text-3xl font-black">12+</span><span className="mt-1 text-[9px] font-bold uppercase tracking-widest">Years of<br/>experience</span></div>
//           <div className="overflow-hidden rounded-[1.5rem] border border-white/15"><img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=85" alt="Engineer working with industrial machinery" className="h-[480px] w-full object-cover"/></div>
//           <div className="absolute -bottom-7 -left-8 max-w-[260px] rounded-xl border border-white/10 bg-[#0b202a]/95 p-5 backdrop-blur"><div className="mb-3 flex items-center gap-2 text-signal"><Zap size={16}/><span className="eyebrow !text-[9px]">Built around precision</span></div><p className="text-sm leading-6 text-white/75">Smart cutting technology, backed by people who care about your production.</p></div>
//         </motion.div>
//       </div>
//       <div className="absolute bottom-0 left-0 h-[3px] w-2/5 bg-signal"/><div className="absolute bottom-0 right-0 h-[3px] w-3/5 bg-white/10"/>
//     </section>

//     <section className="border-b border-white/10 bg-[#081a23]"><div className="container-shell grid grid-cols-2 gap-6 py-8 md:grid-cols-4">{[{n:'12+',t:'Years of experience'},{n:'3',t:'Core CNC technologies'},{n:'360°',t:'Customer support'},{n:'India',t:'Based. Industry focused.'}].map((s,i)=><Reveal key={s.t} delay={i*.07} className="border-l border-white/10 pl-5"><p className="text-3xl font-black tracking-tight sm:text-4xl">{s.n}</p><p className="mt-2 text-[10px] uppercase tracking-[.14em] text-white/45 sm:text-xs">{s.t}</p></Reveal>)}</div></section>

//     <section className="section-pad"><div className="container-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><Reveal><SectionHeading kicker="Why Bachan Industries" title={<>Make every cut<br/><span className="text-signal">count.</span></>} text="We bring together dependable cutting technology, flexible service and practical expertise to help manufacturers move forward with confidence."/></Reveal><div className="grid gap-4 sm:grid-cols-2">{[{icon:Gauge,title:'Performance first',text:'Purpose-built cutting solutions designed around productivity and precision.'},{icon:ShieldCheck,title:'Dependable support',text:'Responsive technical guidance, maintenance and genuine spare parts.'},{icon:Cog,title:'Smarter solutions',text:'Technology and software that keep evolving with your requirements.'},{icon:Factory,title:'Industry experience',text:'A committed team with a practical understanding of manufacturing.'}].map((item,i)=><Reveal key={item.title} delay={i*.08}><div className="feature-card h-full"><div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-signal/25 bg-signal/10 text-signal"><item.icon size={22}/></div><h3 className="text-lg font-bold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-white/50">{item.text}</p></div></Reveal>)}</div></div></section>

//     <section className="section-pad bg-mist text-ink"><div className="container-shell"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><Reveal><p className="eyebrow mb-4">Our product portfolio</p><h2 className="heading-lg">Technology for<br/>the work ahead.</h2></Reveal><Reveal><Link to="/products" className="btn-dark">View all products <ArrowUpRight size={16}/></Link></Reveal></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{products.slice(0,3).map((p,i)=><Reveal key={p.id} delay={i*.1}><Link to="/products" className="product-card group block"><div className="relative h-64 overflow-hidden"><img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110"/><span className="absolute left-4 top-4 bg-signal px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white">{p.tag}</span><span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink transition group-hover:bg-signal group-hover:text-white"><ArrowUpRight size={18}/></span></div><div className="p-6"><p className="eyebrow !text-[9px]">{p.category}</p><h3 className="mt-3 text-xl font-bold">{p.name}</h3><p className="mt-3 text-sm leading-6 text-ink/60">{p.desc}</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest">Explore solution <ChevronRight size={14}/></span></div></Link></Reveal>)}</div></div></section>

//     <section className="section-pad"><div className="container-shell"><div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b202a] p-8 sm:p-14 lg:p-16"><div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border-[1px] border-white/10"/><div className="absolute -right-4 -top-12 h-60 w-60 rounded-full border-[1px] border-signal/30"/><div className="relative z-10 max-w-3xl"><p className="eyebrow mb-5">Let’s build something better</p><h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">Your next production<br/>upgrade starts <span className="text-signal">here.</span></h2><p className="mt-5 max-w-xl leading-7 text-white/55">Tell us what you make, what you need to cut and where you want to go. Our team will help you explore the right solution.</p><Link to="/contact" className="btn-primary mt-8">Talk to our team <ArrowUpRight size={17}/></Link></div></div></div></section>
//   </>
// }








import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Cog,
  Factory,
  Gauge,
  Headphones,
  Layers3,
  MoveUpRight,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench,
  Zap,
} from 'lucide-react'

import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { products, capabilities } from '../data'

const heroImage =
  'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=2000&q=90'

const benefits = [
  {
    icon: Gauge,
    number: '01',
    title: 'Precision Engineering',
    text: 'Cutting solutions developed around accuracy, repeatability and the real demands of industrial production.',
  },
  {
    icon: ShieldCheck,
    number: '02',
    title: 'Reliable Performance',
    text: 'Practical technology and dependable support to help keep your operations moving with confidence.',
  },
  {
    icon: Cog,
    number: '03',
    title: 'Smarter Solutions',
    text: 'Technology and software that evolve with your manufacturing requirements.',
  },
  {
    icon: Headphones,
    number: '04',
    title: 'Dedicated Support',
    text: 'Consultation, training, maintenance and service from a team that understands manufacturing.',
  },
]

const steps = [
  {
    n: '01',
    title: 'Understand Your Needs',
    text: 'We start with your materials, cutting thickness, production goals and the challenges you want to solve.',
  },
  {
    n: '02',
    title: 'Find the Right Solution',
    text: 'Explore suitable machine options and practical considerations for your manufacturing workflow.',
  },
  {
    n: '03',
    title: 'Move Forward',
    text: 'Discuss installation, training and ongoing support to make your next step easier.',
  },
]

const services = [
  {
    icon: Layers3,
    title: 'Spare Parts',
    text: 'Support for essential machine components and replacement requirements.',
  },
  {
    icon: Wrench,
    title: 'Repairs & Maintenance',
    text: 'Service assistance to help maintain machine performance and reliability.',
  },
  {
    icon: Sparkles,
    title: 'Retrofit & Upgrades',
    text: 'Explore ways to update existing equipment and extend its useful life.',
  },
  {
    icon: Target,
    title: 'Training & Consultation',
    text: 'Practical guidance to help your team understand the technology.',
  },
]

const checklist = [
  'A trained team focused on customer requirements',
  'Engineers based in the Mohali region for responsive assistance',
  'Training and demonstration facilities',
  'Transport links to serve customers across India',
]

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-grid relative flex min-h-[820px] items-center overflow-hidden pt-28">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            src={heroImage}
            alt="Industrial CNC machinery"
            className="h-full w-full object-cover opacity-35"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/15" />
        </div>

        <div className="container-shell relative z-10 grid items-center gap-14 py-20 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[.22em] text-white/70"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-signal shadow-glow" />
              Engineering a sharper future
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className="max-w-4xl text-5xl font-black leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-[82px]"
            >
              Precision that
              <br />
              moves <span className="text-signal">industry.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg"
            >
              Bachan Industries Pvt. Ltd. delivers CNC Fiber Laser, CNC Plasma
              Cutting and CNC Router solutions for manufacturers who want to
              work smarter, cut accurately and keep moving forward.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link to="/products" className="btn-primary">
                Explore Our Machines <ArrowUpRight size={17} />
              </Link>

              <Link to="/about" className="btn-secondary">
                Discover Bachan <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-14 flex items-center gap-4 text-xs uppercase tracking-[.16em] text-white/40"
            >
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.7, repeat: Infinity }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15"
              >
                <ArrowDown size={15} />
              </motion.span>
              Scroll to explore
            </motion.div>
          </div>

          {/* FLOATING HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute -inset-8 rounded-[2rem] border border-dashed border-white/15"
            />

            <div className="absolute -right-4 -top-4 z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-signal text-center shadow-glow">
              <span className="text-3xl font-black">12+</span>
              <span className="mt-1 text-[9px] font-bold uppercase tracking-widest">
                Years of
                <br />
                Experience
              </span>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-white/15 shadow-2xl">
              <motion.img
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=85"
                alt="Engineer working with industrial machinery"
                className="h-[490px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-7 -left-8 max-w-[270px] rounded-xl border border-white/10 bg-[#0b202a]/95 p-5 backdrop-blur">
              <div className="mb-3 flex items-center gap-2 text-signal">
                <Zap size={16} />
                <span className="eyebrow !text-[9px]">
                  Built around precision
                </span>
              </div>
              <p className="text-sm leading-6 text-white/75">
                Smart cutting technology, backed by people who care about your
                production.
              </p>
            </div>

            <div className="absolute -bottom-5 right-5 rounded-xl border border-white/10 bg-ink/90 px-4 py-3 backdrop-blur">
              <p className="text-[9px] uppercase tracking-[.18em] text-white/45">
                Core Technologies
              </p>
              <p className="mt-1 text-sm font-bold">
                Laser <span className="text-signal">/</span> Plasma{' '}
                <span className="text-signal">/</span> Router
              </p>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 h-[3px] w-2/5 bg-signal" />
        <div className="absolute bottom-0 right-0 h-[3px] w-3/5 bg-white/10" />
      </section>

      {/* COMPANY STATISTICS */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#081a23]">
        <div className="container-shell grid grid-cols-2 gap-6 py-9 md:grid-cols-4">
          {[
            { n: '12+', t: 'Years of Experience' },
            { n: '3', t: 'Core CNC Technologies' },
            { n: '360°', t: 'Customer Support' },
            { n: 'India', t: 'Based. Industry Focused.' },
          ].map((stat, i) => (
            <Reveal
              key={stat.t}
              delay={i * 0.08}
              className="border-l border-white/10 pl-5"
            >
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-3xl font-black tracking-tight sm:text-4xl"
              >
                {stat.n}
              </motion.p>
              <p className="mt-2 text-[10px] uppercase tracking-[.14em] text-white/45 sm:text-xs">
                {stat.t}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MOVING TECHNOLOGY BANNER */}
      <section className="overflow-hidden border-b border-white/10 bg-signal py-4 text-white">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="flex w-max items-center gap-8 whitespace-nowrap"
        >
          {[...capabilities, ...capabilities, ...capabilities, ...capabilities].map(
            (item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex items-center gap-8 text-xs font-bold uppercase tracking-[.2em]"
              >
                {item}
                <span className="text-white/50">✳</span>
              </span>
            ),
          )}
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-pad">
        <div className="container-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <SectionHeading
              kicker="Why Bachan Industries"
              title={
                <>
                  Make every cut
                  <br />
                  <span className="text-signal">count.</span>
                </>
              }
              text="We focus on practical, dependable cutting solutions for the metal-working and manufacturing industries. Our goal is simple: understand your needs and help you find a solution that works for your operation."
            />

            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-signal"
            >
              More About Our Journey <ArrowUpRight size={15} />
            </Link>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="feature-card h-full"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-signal/25 bg-signal/10 text-signal">
                      <item.icon size={22} />
                    </div>
                    <span className="text-xs font-bold tracking-widest text-white/25">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/50">
                    {item.text}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section-pad bg-mist text-ink">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <Reveal>
              <p className="eyebrow mb-4">Our Product Portfolio</p>
              <h2 className="heading-lg">
                Technology for
                <br />
                the work ahead.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-ink/60">
                Explore solutions designed for different materials,
                applications and production requirements.
              </p>
            </Reveal>

            <Reveal>
              <Link to="/products" className="btn-dark">
                View All Products <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((product, i) => (
              <Reveal key={product.id} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -7 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to="/products" className="product-card group block">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />

                      <span className="absolute left-4 top-4 bg-signal px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white">
                        {product.tag}
                      </span>

                      <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink transition group-hover:bg-signal group-hover:text-white">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>

                    <div className="p-6">
                      <p className="eyebrow !text-[9px]">
                        {product.category}
                      </p>
                      <h3 className="mt-3 text-xl font-bold">
                        {product.name}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-ink/60">
                        {product.desc}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                        Explore Solution <ChevronRight size={14} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER JOURNEY */}
      <section className="section-pad">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              kicker="A Clear Path Forward"
              title={
                <>
                  From your challenge
                  <br />
                  to the <span className="text-signal">right solution.</span>
                </>
              }
              text="Choosing industrial equipment starts with understanding the job. We aim to make the conversation clear, practical and focused on your requirements."
            />
          </Reveal>

          <div className="relative mt-14 grid gap-5 md:grid-cols-3">
            <div className="absolute left-[16%] right-[16%] top-7 hidden h-px bg-white/10 md:block" />

            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative h-full rounded-2xl border border-white/10 bg-white/[.025] p-7"
                >
                  <div className="relative z-10 mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-signal/40 bg-ink text-lg font-black text-signal">
                    {step.n}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/50">
                    {step.text}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AFTER-SALES SERVICES */}
      <section className="section-pad bg-[#0a1d26]">
        <div className="container-shell grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal>
            <p className="eyebrow mb-4">Support Beyond the Sale</p>
            <h2 className="heading-lg">
              Your partner
              <br />
              through the <span className="text-signal">journey.</span>
            </h2>
            <p className="mt-6 max-w-lg leading-7 text-white/55">
              Our portfolio also includes spare parts, environmental
              technology, retrofit, repairs, maintenance, service and in-house
              software solutions. Tell us what your operation needs.
            </p>
            <Link to="/contact" className="btn-primary mt-8">
              Talk to Our Team <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group h-full rounded-xl border border-white/10 bg-ink/40 p-6 transition-colors hover:border-signal/40"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-signal/10 text-signal transition group-hover:bg-signal group-hover:text-white">
                    <service.icon size={20} />
                  </div>
                  <h3 className="font-bold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/50">
                    {service.text}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="section-pad">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl">
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7 }}
                src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=85"
                alt="Industrial production facility"
                className="h-[430px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <Factory className="text-signal" size={24} />
                <span className="text-sm font-bold">
                  Our Base in Kurali, Punjab
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow mb-4">Infrastructure & Capability</p>
            <h2 className="heading-lg">
              Rooted locally.
              <br />
              <span className="text-signal">Built for industry.</span>
            </h2>

            <p className="mt-6 leading-7 text-white/55">
              Bachan Industries’ head office is located at the Industrial Focal
              Point, Kurali, in the Mohali region of Punjab. Company information
              describes a facility spread across approximately two acres, with
              6 kW plate and 3 kW pipe laser cutting machines installed for
              training and demonstrations.
            </p>

            <div className="mt-7 space-y-4">
              {checklist.map((text, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 text-sm text-white/75"
                >
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-signal"
                    size={18}
                  />
                  {text}
                </motion.div>
              ))}
            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-signal"
            >
              Learn About Our Facilities <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CEO MESSAGE */}
      <section className="section-pad bg-mist text-ink">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[.6fr_1.4fr]">
          <Reveal>
            <div className="eyebrow mb-4">A Message That Guides Us</div>
            <h2 className="heading-lg">
              Ideas become
              <br />
              <span className="text-signal">real through action.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative rounded-2xl border border-ink/10 bg-white p-8 shadow-xl sm:p-11">
              <span className="absolute right-7 top-3 font-serif text-8xl leading-none text-signal/15">
                “
              </span>

              <p className="relative text-xl leading-9 text-ink/75 sm:text-2xl">
                The best ideas come from within; they are inspired from the
                inner self. They breathe in us until we unleash the potential
                we bear in ourselves.
              </p>

              <div className="mt-8 flex items-center justify-between gap-4 border-t border-ink/10 pt-6">
                <div>
                  <p className="font-bold">S. Hardial Singh</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-ink/45">
                    CEO, Bachan Industries
                  </p>
                </div>

                <Link
                  to="/about"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white transition hover:bg-signal"
                  aria-label="Read more about Bachan Industries"
                >
                  <MoveUpRight size={18} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CONTACT CTA */}
      <section className="section-pad">
        <div className="container-shell">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b202a] p-8 sm:p-14 lg:p-16">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 55,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute -right-24 -top-28 h-96 w-96 rounded-full border border-white/10"
            />

            <div className="absolute -right-4 -top-12 h-60 w-60 rounded-full border border-signal/30" />

            <div className="relative z-10 max-w-3xl">
              <p className="eyebrow mb-5">Let’s Build Something Better</p>
              <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                Your next production
                <br />
                upgrade starts <span className="text-signal">here.</span>
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-white/55">
                Tell us what you make, what you need to cut and where you want
                to go. Our team will help you explore the right solution for
                your application.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Talk to Our Team <ArrowUpRight size={17} />
                </Link>

                <a href="tel:+919780962000" className="btn-secondary">
                  Call +91 97809 62000 <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
