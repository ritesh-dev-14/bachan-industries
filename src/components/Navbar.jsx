import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../../Bachan.png'

const links = [{ to: '/', label: 'Home' }, { to: '/about', label: 'About' }, { to: '/products', label: 'Products' }, { to: '/contact', label: 'Contact' }]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-xl">
    <div className="container-shell flex h-[78px] items-center justify-between">
      <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
        <img src={logo} alt="Bachan Industries logo" className="h-12 w-12 object-contain" />
        <span className="leading-tight"><span className="block text-sm font-black tracking-[.16em]">BACHAN</span><span className="block text-[9px] font-semibold tracking-[.24em] text-white/55">INDUSTRIES PVT. LTD.</span></span>
      </Link>
      <nav className="hidden items-center gap-9 md:flex">
        {links.map(link => <NavLink key={link.to} to={link.to} className={({isActive}) => `nav-link ${isActive ? 'nav-active' : ''}`}>{link.label}</NavLink>)}
        <Link to="/contact" className="btn-primary !px-5 !py-3 text-xs">Let’s talk <ArrowUpRight size={15}/></Link>
      </nav>
      <button aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="rounded-lg border border-white/15 p-2 md:hidden">{open ? <X/> : <Menu/>}</button>
    </div>
    <AnimatePresence>{open && <motion.nav initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden border-t border-white/10 bg-ink md:hidden">
      <div className="container-shell flex flex-col gap-1 py-4">{links.map(link => <NavLink onClick={() => setOpen(false)} key={link.to} to={link.to} className="rounded-lg px-3 py-3 text-sm text-white/75 hover:bg-white/5 hover:text-white">{link.label}</NavLink>)}<Link onClick={() => setOpen(false)} to="/contact" className="btn-primary mt-2">Talk to our team <ArrowUpRight size={16}/></Link></div>
    </motion.nav>}</AnimatePresence>
  </header>
}