import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import './embla.css'
import LinkCard from '../LinkCard'

const OPTIONS: EmblaOptionsType = { loop: true }

const SLIDES = [
  {
    key: '1',
    title: 'UX Journal — Catalogue of Impossible Objects',
    url: 'https://bootcamp.uxdesign.cc/ux-journal-catalogue-of-impossible-objects-78269282696c',
    description: 'Did you know that the coffeepot featured on the cover of The Design of Everyday Things book was actually part of a 1969 catalogue?',
    img: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*by-1CJUc4k9MSzhLH-3XHw.png'
  },
  {
    key: '2',
    title: 'UX Journal — The Uncomfortable Collection',
    url: 'https://bootcamp.uxdesign.cc/ux-journal-the-uncomfortable-collection-a58b33f6ca94',
    description: "You thought it was over after the Jacques Carelman's catalogue? Nope, it's not. Introducing: The Uncomfortable!",
    img: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*IyYPhsOH_iK6kTUTKE00Rw.jpeg'
  },
  {
    key: '3',
    title: 'UX Journal —  Introduction',
    url: 'https://medium.com/design-bootcamp/ux-journey-day-0-introduction-bc91f4cb6015',
    description: 'Pull and push doors, stainless steel water bottles, and on and off buttons, what do they have in common? They are all so frustrating.',
    img: 'https://miro.medium.com/v2/resize:fit:640/format:webp/1*7NZqV7h6aBMkoLwWTzrZ4g.jpeg'
  },
  {
    key: '4',
    title: 'UX Journal —  Water bottles & Usability Heuristics',
    url: 'https://bootcamp.uxdesign.cc/ux-journal-day-1-water-bottles-usability-heuristics-26b22827c1a7',
    description: "Can you guess the difference between these two water bottles just by looking at them? Here's a tip: one of them is empty.",
    img: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*K6SDzlBq9SZOvyu3dizaHw.png'
  },
  {
    key: '5',
    title: 'UX Journal —  I/O switches',
    url: 'https://bootcamp.uxdesign.cc/ux-journal-day-2-i-o-switches-a844a910a528',
    description: 'Which is ON and which is OFF?',
    img: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*VBS51Q_9V1-szBcC-EqtrQ.jpeg'
  },
  {
    key: '6',
    title: "UX Journal —  Apple's Calculator Application",
    url: 'https://bootcamp.uxdesign.cc/ux-journal-day-3-apples-calculator-application-f5a78269b8c3',
    description: 'How do you delete a mistyped digit?',
    img: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*t8IGOfz3jFSBHZK0wNXxLg.png'
  },
  {
    key: '7',
    title: "UX Journal — What I've learned in my first UX Research and Design internship",
    url: 'https://bootcamp.uxdesign.cc/ux-journal-what-ive-learned-in-my-first-ux-research-and-design-internship-8dcd2d14169a',
    description: "In this story I explore what I've learned in my first UX internship that lasted 6 months.",
    img: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*VO-zppX7XuTh7iEKip4GpA.jpeg'
  }
]

const Carousel: React.FC = () => (
  <EmblaCarousel
    slides={SLIDES.map(({ key, ...props }) => (
      <div key={key} className="slide-content">
        <LinkCard {...props} />
      </div>
    ))}
    options={OPTIONS}
  />
)

export default Carousel