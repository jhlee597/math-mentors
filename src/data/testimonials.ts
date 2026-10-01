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
    quote: "The complex numbers guide really helped me in my precalculus class! I didn't really understand them but this helped so much!",
    name: "Anonymous",
    role: "Precalculus Student",
    accent: "blue",
  },
];
