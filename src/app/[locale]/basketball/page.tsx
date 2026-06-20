import React from 'react'
import AnimatedContainer from '@/components/ui/AnimatedContainer'
import Section from '@/components/ui/Section'
import BasketballBadge from '@/components/ui/BasketballBadge'

export const metadata = {
  title: 'Basketball • Hoops Theme',
  description: 'A basketball-themed page with colors and UI elements inspired by the game.'
}

export default function BasketballPage() {
  return (
    <AnimatedContainer>
      <div className="relative overflow-hidden rounded-xl border border-orange-300/50 dark:border-orange-800/50 bg-gradient-to-br from-orange-100 via-amber-100 to-rose-100 dark:from-orange-950 dark:via-amber-900/40 dark:to-rose-950 p-8 mb-10">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          {/* subtle court lines */}
          <div className="h-full w-full opacity-20">
            <div className="h-full w-full" style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 38px, rgba(249,115,22,0.5) 39px), repeating-linear-gradient(90deg, transparent, transparent 38px, rgba(249,115,22,0.4) 39px)`
            }} />
          </div>
        </div>
        <div className="relative">
          <h1 className="text-3xl md:text-4xl font-extrabold text-orange-800 dark:text-orange-200 tracking-tight">Hoops Hub</h1>
          <p className="mt-2 text-orange-900/80 dark:text-orange-100/80 max-w-2xl">Stats, skills, and style inspired by basketball. Explore positions, fundamentals, and iconic moments with a warm orange palette.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <BasketballBadge label="Pick & Roll" />
            <BasketballBadge label="Zone Defense" />
            <BasketballBadge label="Fast Break" />
          </div>
        </div>
      </div>

      <Section title="Positions" subtitle="Understand each role on the court">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Point Guard', desc: 'Floor general, ball handling, playmaking.' },
            { title: 'Shooting Guard', desc: 'Perimeter scoring, off-ball movement.' },
            { title: 'Small Forward', desc: 'Versatile scorer and defender.' },
            { title: 'Power Forward', desc: 'Interior presence, rebounding, pick-and-pop.' },
            { title: 'Center', desc: 'Rim protection, post play, screens.' },
            { title: 'Sixth Man', desc: 'Energy and scoring off the bench.' },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-orange-300/60 dark:border-orange-800/60 bg-white/70 dark:bg-orange-950/30 p-4">
              <h3 className="font-semibold text-orange-900 dark:text-orange-100">{item.title}</h3>
              <p className="text-sm text-orange-900/80 dark:text-orange-100/80 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Fundamentals" subtitle="Build a strong foundation">
        <ul className="list-disc pl-6 space-y-1 text-orange-900/90 dark:text-orange-100/90">
          <li>Footwork and balance</li>
          <li>Ball handling and passing lanes</li>
          <li>Shooting mechanics and shot selection</li>
          <li>Team defense and communication</li>
          <li>Rebounding positioning</li>
        </ul>
      </Section>
    </AnimatedContainer>
  )
}


