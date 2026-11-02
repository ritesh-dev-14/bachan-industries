import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, Phone, MapPin, Instagram, Youtube, Facebook } from 'lucide-react'
import logo from '../../Bachan.png'

export default function Footer() {
  return <footer className="border-t border-white/10 bg-[#040d12]">
    <div className="container-shell grid gap-12 py-16 md:grid-cols-[1.4fr_.7fr_1fr]">
      <div><div className="mb-5 flex items-center gap-3"><img src={logo} alt="" className="h-12 w-12 object-contain"/><div><p className="font-black tracking-[.15em]">BACHAN INDUSTRIES</p><p className="text-[10px] tracking-[.2em] text-white/45">PRECISION. POWER. PROGRESS.</p></div></div><p className="max-w-sm text-sm leading-7 text-white/55">We work with a passion for taking challenges and creating dependable cutting solutions for modern industry.</p><div className="mt-6 flex gap-3"><a className="social-icon" href="https://www.facebook.com/bachanindustries/" aria-label="Facebook"><Facebook size={17}/></a><a className="social-icon" href="https://www.instagram.com/bachanindustries/" aria-label="Instagram"><Instagram size={17}/></a><a className="social-icon" href="https://www.youtube.com/@bachanindustries" aria-label="YouTube"><Youtube size={17}/></a></div></div>
      <div><h3 className="eyebrow mb-5">Explore</h3><div className="flex flex-col items-start gap-3 text-sm text-white/60">{[['Home','/'],['About us','/about'],['Products','/products'],['Contact','/contact']].map(([label,to])=><Link className="hover:text-signal" key={to} to={to}>{label}</Link>)}</div></div>
      <div><h3 className="eyebrow mb-5">Get in touch</h3><div className="space-y-4 text-sm text-white/60"><a className="flex gap-3 hover:text-white" href="mailto:bachancnc@gmail.com"><Mail className="shrink-0 text-signal" size={18}/>bachancnc@gmail.com</a><a className="flex gap-3 hover:text-white" href="tel:+919780962000"><Phone className="shrink-0 text-signal" size={18}/>+91 97809 62000</a><p className="flex gap-3 leading-6"><MapPin className="mt-1 shrink-0 text-signal" size={18}/>E-90-91-92, Industrial Focal Point, Kurali 140103, District Mohali, Punjab, India</p></div></div>
    </div>
    <div className="border-t border-white/10"><div className="container-shell flex flex-col justify-between gap-3 py-5 text-xs text-white/35 sm:flex-row"><span>© {new Date().getFullYear()} Bachan Industries Pvt. Ltd. All rights reserved.</span><Link to="/contact" className="flex items-center gap-1 hover:text-white">Build something precise <ArrowUpRight size={13}/></Link></div></div>
  </footer>
}