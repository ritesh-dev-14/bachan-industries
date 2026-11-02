import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react'
import Reveal from '../components/Reveal'

export default function Contact() {
  const [form, setForm] = useState({name:'',company:'',email:'',phone:'',interest:'CNC Fiber Laser',message:''})
  const [sent, setSent] = useState(false)
  const update = e => setForm({...form,[e.target.name]:e.target.value})
  const submit = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Website enquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nInterested in: ${form.interest}\n\nMessage:\n${form.message}`)
    window.location.href = `mailto:bachancnc@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }
  return <>
    <section className="inner-hero"><div className="container-shell relative z-10 py-32 pt-44"><motion.p initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} className="eyebrow mb-5">Start a conversation</motion.p><motion.h1 initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{delay:.1}} className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight sm:text-7xl">Let’s make your<br/><span className="text-signal">next move.</span></motion.h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">Share your requirement with our team. We’ll help you explore the right cutting solution for your work.</p></div></section>
    <section className="section-pad"><div className="container-shell grid gap-12 lg:grid-cols-[.72fr_1.28fr]"><Reveal><div><p className="eyebrow mb-4">Contact information</p><h2 className="text-3xl font-black">We’re ready to<br/>hear from you.</h2><p className="mt-5 leading-7 text-white/55">Tell us about your application, production goals or service needs. Our team will be glad to point you in the right direction.</p><div className="mt-9 space-y-5">{[{icon:Phone,label:'Call us',value:'+91 97809 62000',href:'tel:+919780962000'},{icon:Mail,label:'Email us',value:'bachancnc@gmail.com',href:'mailto:bachancnc@gmail.com'},{icon:MapPin,label:'Visit us',value:'E-90-91-92, Industrial Focal Point, Kurali 140103, District Mohali, Punjab, India'}].map(item=><div key={item.label} className="flex gap-4 rounded-xl border border-white/10 p-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-signal/10 text-signal"><item.icon size={20}/></div><div><p className="text-xs uppercase tracking-widest text-white/40">{item.label}</p>{item.href?<a href={item.href} className="mt-1 block text-sm font-semibold hover:text-signal">{item.value}</a>:<p className="mt-1 max-w-xs text-sm leading-6 text-white/75">{item.value}</p>}</div></div>)}</div><a href="https://maps.google.com/?q=E-90-91-92+Industrial+Focal+Point+Kurali+Punjab" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-signal">Find us on maps <ArrowUpRight size={15}/></a></div></Reveal>
      <Reveal delay={.1}><form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/[.03] p-6 sm:p-9"><div className="mb-8"><p className="eyebrow mb-3">Enquiry form</p><h2 className="text-2xl font-bold">Tell us what you need.</h2></div><div className="grid gap-5 sm:grid-cols-2">{[{name:'name',label:'Your name',placeholder:'Full name',required:true},{name:'company',label:'Company name',placeholder:'Company / organisation'},{name:'email',label:'Email address',placeholder:'you@company.com',required:true,type:'email'},{name:'phone',label:'Phone number',placeholder:'+91',required:true}].map(f=><label key={f.name} className="form-label">{f.label}<input className="form-input mt-2" name={f.name} value={form[f.name]} onChange={update} placeholder={f.placeholder} required={f.required} type={f.type||'text'}/></label>)}
      <label className="form-label sm:col-span-2">Interested in<select className="form-input mt-2" name="interest" value={form.interest} onChange={update}>{['CNC Fiber Laser','CNC Plasma Cutting','CNC Wood Router','Laser Welding / Marking','Spare Parts & Service','Other / Not sure yet'].map(x=><option key={x}>{x}</option>)}</select></label>
      <label className="form-label sm:col-span-2">Tell us about your requirement<textarea className="form-input mt-2 min-h-32 resize-y" name="message" value={form.message} onChange={update} placeholder="Material, thickness, production needs or anything else we should know..." required/></label></div>
      <button type="submit" className="btn-primary mt-7 w-full sm:w-auto">Send enquiry <Send size={16}/></button>
      {sent && <p className="mt-4 flex items-center gap-2 text-sm text-green-400"><CheckCircle2 size={17}/> Your email app should open with the enquiry details ready to send.</p>}
      <p className="mt-4 text-xs leading-5 text-white/35">Submitting opens your default email application. No form data is stored on this website.</p>
      </form></Reveal></div></section>
    <section className="section-pad pt-0"><div className="container-shell"><div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b202a] p-8 sm:p-12"><div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-signal/10 to-transparent"/><p className="eyebrow">Bachan Industries Pvt. Ltd.</p><h2 className="relative mt-4 max-w-2xl text-3xl font-black sm:text-4xl">We work with a passion for taking challenges and creating.</h2></div></div></section>
  </>
}