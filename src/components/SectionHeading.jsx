export default function SectionHeading({ kicker, title, text, light = false }) {
  return <div className="max-w-2xl"><p className={`eyebrow mb-4 ${light ? 'text-signal' : ''}`}>{kicker}</p><h2 className="heading-lg">{title}</h2>{text && <p className="mt-5 max-w-xl text-base leading-7 text-white/55">{text}</p>}</div>
}