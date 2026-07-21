// Student reviews shown in the scrollable testimonial rail on the home page.
// Add or remove entries freely — the carousel adapts to however many there are.

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  accent: "blue" | "indigo" | "sky" | "cyan";
}

export const testimonials: Testimonial[] = [
  {
    quote: "Sample Response",
    name: "Anonymous",
    role: "Calculus Student",
    accent: "blue",
  },
];
