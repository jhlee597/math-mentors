// Site-wide copy and config. Edit this file to change text without touching components.

import { resources } from "@/data/resources";

// Said wherever we ask people to join (home back cover, About, Join).
const noLatexNeeded = "No LaTeX experience required. We'll teach you.";

export const site = {
  name: "Math Mentors",
  shortName: "MM",
  noLatexNeeded,
  tagline: "Free, comprehensive study guides for every kind of math learner",
  hook:
    "We're a student-run volunteer organization that writes LaTeX-typeset problem sheets, packets, equation sheets, and full guides, then gives them away for free, for any math course or level.",
  description:
    "Math Mentors is a volunteer organization where students write and typeset study materials in LaTeX so anyone can study math for free. Every guide is written by students, reviewed by students, and released for free to anyone who wants them, whatever math you're learning.",
  founded: 2025,

  // Shown in the header, in the order they should appear.
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Resources", href: "/resources" },
    { label: "Testimonials", href: "/testimonials/new" },
    { label: "Join", href: "/join" },
  ],

  // Join page / CTA form.
  joinFormUrl: "https://forms.gle/Dtjab1f5zGi8mrN5A",
  discordUrl: "https://discord.gg/replace-with-your-invite",
  // All "contact us" links use this email.
  contactEmail: "legorjuho@gmail.com",
  // Testimonial submissions POST here (a Formspree form endpoint). Sign up at
  // formspree.io, create a form, and replace this with your form's URL
  // (https://formspree.io/f/xxxxxxxx). Submissions land in your email + the
  // Formspree dashboard for you to review before adding them to testimonials.ts.
  testimonialFormEndpoint: "https://formspree.io/f/mdaqdgjp",

  // The three jobs on every volume. Shown on About and on Join's credits page.
  roles: [
    {
      title: "Writer",
      credit: "Written by",
      description:
        `Pick a topic from a class or competition you've just been through, then draft and typeset the guide in LaTeX: explanations, worked examples, and practice problems. ${noLatexNeeded}`,
    },
    {
      title: "Reviewer",
      credit: "Reviewed by",
      description: "Work through every draft for accuracy and clarity before it's published to the library.",
    },
    {
      title: "Outreach",
      credit: "Shared by",
      description: "Get finished guides to the students who need them: classmates, teachers, and clubs.",
    },
  ],

  // The people on the About page. `roles` must match a title above; `bio` is
  // one or two sentences and can be left empty until the person writes one.
  // The volumes each person wrote are picked up from resources.ts by name.
  team: [
    { name: "Juho Lee", roles: ["Writer"], bio: "" },
  ],

  features: [
    {
      title: "Created by students",
      description:
        "Every guide is created by students who recently went through the process of learning the materials themselves.",
      icon: "PencilRuler",
    },
    {
      title: "Always free to access",
      description:
        "Every guide on this site is free to use for anyone.",
      icon: "Gift",
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
    { value: "50+", label: "Practice Problems" },
    // Update this manually from your Vercel/analytics dashboard as traffic changes.
    { value: "100+", label: "Visitors per Month" },
    { value: String(2025), label: "Founded" },
  ],
};
