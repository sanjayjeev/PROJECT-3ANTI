import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export type CarouselItem = { tag: string; titleLine1: string; desc: string; img: string }
const defaultDishes: CarouselItem[] = [
  { tag: '#Signature', titleLine1: 'Cloud Latte', desc: 'Velvety espresso, honey foam, very good energy.', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=85' },
  { tag: '#FanFavourite', titleLine1: 'Carton Burger', desc: 'Crispy, saucy, stacked with serious joy.', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=85' },
  { tag: '#SweetThing', titleLine1: 'Berry Shake', desc: 'A strawberry cloud with a cherry on top.', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1000&q=85' },
]

export function CoverFlowCarousel({ items = defaultDishes }: { items?: CarouselItem[] }) {
  const [current, setCurrent] = useState(0)
  return <div className="coverflow-wrap">{items.map((item, index) => <button className={`coverflow-item ${index === current ? 'active' : ''}`} key={item.titleLine1} onClick={() => setCurrent(index)}><img src={item.img} alt={item.titleLine1} /><div className="coverflow-overlay"><div className="coverflow-top"><span>{item.tag}</span>{index === current && <ArrowRight size={17} />}</div><div className="coverflow-bottom"><h3>{item.titleLine1}</h3><p>{item.desc}</p></div></div></button>)}</div>
}
