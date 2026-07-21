// Site-wide copy and config. Edit this file to change text without touching components.

import { resources } from "@/data/resources";

export const site = {
  name: "Math Mentors",
  shortName: "MM",
  tagline: "Free, comprehensive study guides for every kind of math learner",
  hook:
    "We're a student-run volunteering club that writes LaTeX-typeset problem sheets, packets, equation sheets, and full guides — then gives them away for free, for any math course or level.",
  description:
    "Math Mentors is a volunteer club where students write and typeset study materials in LaTeX so anyone can study math for free. Every guide is written by students, reviewed by students, and released to the whole school (and beyond) — whatever math you're learning.",
  founded: 2025,

  // Shown in the header, in the order they should appear.
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Resources", href: "/resources" },
    { label: "Testimonials", href: "/testimonials/new" },
    { label: "Join", href: "/join" },
  ],

  // Join page / CTA form. Point this at a real Google Form, Discord invite, etc.
  joinFormUrl: "https://forms.gle/replace-with-your-form",
  discordUrl: "https://discord.gg/replace-with-your-invite",
  // All "contact us" links point at this Google Form — swap for your own.
  contactFormUrl: "https://forms.gle/replace-with-your-contact-form",
  // Testimonial submissions POST here (a Formspree form endpoint). Sign up at
  // formspree.io, create a form, and replace this with your form's URL
  // (https://formspree.io/f/xxxxxxxx). Submissions land in your email + the
  // Formspree dashboard for you to review before adding them to testimonials.ts.
  testimonialFormEndpoint: "https://formspree.io/f/mdaqdgjp",

  features: [
    {
      title: "Written by students, for students",
      description:
        "Every guide is drafted, reviewed, and typeset by club members who just took the class themselves.",
      icon: "PencilRuler",
    },
    {
      title: "Always free to access",
      description:
        "No accounts, no paywalls. Every PDF on this site is free to view, download, and share.",
      icon: "Gift",
    },
    {
      title: "Built with LaTeX",
      description:
        "Clean, consistent typesetting across problem sets, cheat sheets, and full-length guides.",
      icon: "FileText",
    },
    {
      title: "Searchable resource library",
      description:
        "Filter by subject and resource type to find exactly the packet or guide you need.",
      icon: "Search",
    },
  ],

  stats: [
    { value: String(resources.length), label: "Study Guides" },
    { value: "1000+", label: "Practice Problems" },
    // Update this manually from your Vercel/analytics dashboard as traffic changes.
    { value: "500+", label: "Visitors per Month" },
    { value: String(2025), label: "Founded" },
  ],
};
