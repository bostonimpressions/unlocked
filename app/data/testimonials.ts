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
    name: 'John D.',
    source: 'Google Review',
    rating: 4,
    quote: 'Absolutely fantastic experience!',
    lead: 'Absolutely fantastic experience!',
    body: 'They guided us through every step and made the process stress-free...',
  },
  {
    name: 'Millie S.',
    source: 'Google Review',
    rating: 5,
    quote: `My husband and I decided it was time to sell our vacation home in NH. We were reached out by many companies about offering their services. We never felt completely comfortable with any of them. That changed when we were approached by Unlocked Home Project. From the initial outreach call and follow up call from Jonathan we decided this was the right company to do business with. Jonathan explained the various ways we could sell. We negotiated a fair price and the company set out to find an interested buyer. Jonathan now referred us to Jordan who was the coordinator. Throughout the entire process Jonathan and Jordan kept us informed.`,
    lead: `They were always available to answer question and address any concerns and clarifications that would arise.`,
    body: `It is obvious this is an outstanding company that goes above and beyond for their clients. I am so grateful to them for providing excellent service and support throughout the entire process.`,
  },
]
