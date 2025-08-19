export interface Testimonial {
  name: string
  source: string
  rating: number
  quote: string
  lead: string
  body: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Stephanie G.',
    source: 'Google Review',
    rating: 5,
    quote: 'Cannot recommend Unlocked Home Project enough!',
    lead: 'The team at this company are some of the most genuine and caring real estate professionals ever.',
    body: `They put their heart & souls into helping both property sellers and buyers in every way possible. They bring to the table such creative ideas and thinking outside the box to help all parties. They've made huge differences in some families lives that it is just amazing to see. We have worked personally with Unlocked Home Project on a couple of occasions and everything could not have gone smoother. We have known families and other real estate professionals who have also had great experiences working with the team. Highly recommend this company to anyone!`,
  },
  {
    name: 'Beth C.',
    source: 'Google Review',
    rating: 5,
    quote: `This was not only the fastest closing I've ever had in my career, it was also the most efficient and smoothest closing as well. The staff were friendly and got things done swiftly.`,
    lead: `Additionally, they provided a solution, to the many challenges, of my Seller's financial situation, of which didn't seem possible.`,
    body: `I cannot wait to work with Jon and his company, Unlocked Home Project, again in the future.`,
  },
  {
    name: 'Aaron D.',
    source: '',
    rating: 5,
    quote: '',
    lead: `Working with Jon and Unlocked Home Project was a game changer!`,
    body: `They approach home buying in a truly refreshing way — creative, flexible, and focused on creating a win-win for everyone involved.\n What stood out most was how transparent and thoughtful the team was from start to finish. They listened, understood our seller’s needs, and offered options that we didn’t even know were possible. No pressure, no gimmicks — just smart, outside-the-box strategies that work for real people in real situations.\n Our team looks forward to working with Jon and his team again!`,
  },
  {
    name: 'Alexa D.',
    source: 'Real Estate Broker, NH/ME/MA',
    rating: 5,
    quote: `Their innovative approach to real estate challenges is truly impressive.`,
    lead: `Working with Jon and Unlocked Home Project was a game changer!`,
    body: `They provide creative solutions for homeowners, particularly those whose properties have been sitting on the market for far too long, properties that won’t pass inspection and help investors sell to avoid or defer capital gains. Jon and his team consistently think outside the box, finding unique ways to get deals done, help Agents, help Sellers and transform obstacles into opportunities.\n What I appreciate most about working with Unlocked Home Project is their genuine care for everyone involved in the transaction. They prioritize the needs and concerns of both buyers and sellers, ensuring a smooth and positive experience for all parties.\n If you're looking for a team that combines creativity, professionalism, and a heartfelt commitment to their clients, I wholeheartedly recommend Unlocked Home Project. They are a fantastic group of people to collaborate with, and I look forward to many more successful transactions together!`,
  },
  {
    name: 'Nicole Q.',
    source: 'Realtor, Keller Williams',
    rating: 5,
    quote: '',
    lead: `As a Realtor I have worked with Unlocked Home Project in the past and they have high business standards and are great to work with.`,
    body: `I appreciate their creative solutions and abilities to find ways to help sellers with both on and off market sales.`,
  },
]
