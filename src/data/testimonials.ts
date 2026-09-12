/**
 * Testimonials. Real quotes are pending from David; the entries below are
 * placeholders and the section stays hidden until `enabled` is true.
 * When quotes arrive: replace the entries, set `enabled: true`.
 */
export interface Testimonial {
  quote: string;
  name: string;
  /** e.g. "Seller, Kensington" or "Buyer, Palm Springs" */
  context: string;
  placeholder?: boolean;
}

export const testimonials = {
  enabled: false,
  eyebrow: 'Client stories',
  title: 'In their words',
  items: [
    { quote: '[TESTIMONIAL PENDING]', name: 'Client name', context: 'Buyer or seller, market', placeholder: true },
    { quote: '[TESTIMONIAL PENDING]', name: 'Client name', context: 'Buyer or seller, market', placeholder: true },
    { quote: '[TESTIMONIAL PENDING]', name: 'Client name', context: 'Buyer or seller, market', placeholder: true },
  ] as readonly Testimonial[],
} as const;
