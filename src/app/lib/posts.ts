export type Post = {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  content: string;
};

export const posts: Post[] = [
  {
    id: "the-anatomy-of-a-design-system",
    title: "The Anatomy of a Design System",
    category: "Design Systems",
    date: "May 28, 2025",
    readTime: "6 min read",
    image: "/images/post_design_systems.png",
    excerpt:
      "How the most scalable digital products are built on invisible infrastructure — and why design systems are the backbone of every great product.",
    content:
      "Design systems are more than a collection of components — they are the operating system of a product team. A well-crafted design system aligns designers and engineers, reduces decision fatigue, and allows teams to ship at velocity without sacrificing quality. At its core, a design system is composed of three layers: design tokens (the atomic values like color, spacing, and typography), components (the reusable building blocks), and patterns (the higher-order solutions for recurring UX problems). The most effective systems are those that evolve organically with the product, rather than being dictated from the top down.",
  },
  {
    id: "the-invisible-art-of-typography",
    title: "The Invisible Art of Typography",
    category: "Typography",
    date: "April 14, 2025",
    readTime: "4 min read",
    image: "/images/post_typography.png",
    excerpt:
      "Great typography is felt before it is read. The choices a designer makes about type communicate tone, authority, and emotion long before any word is processed.",
    content:
      "Typography is the single most powerful tool a designer has. A typeface communicates personality before a single word is absorbed. Serif fonts evoke tradition, authority, and trust; sans-serifs suggest clarity and modernity; display fonts express individuality and ambition. But the real craft in typography is not in the choice of a single typeface — it is in the relationships between them. Scale, weight, spacing, and contrast are the variables that make type feel either effortless or chaotic. The goal of great typography is to be invisible: to guide the reader so naturally that they never think about the container holding the words.",
  },
  {
    id: "what-makes-a-brand-unforgettable",
    title: "What Makes a Brand Unforgettable",
    category: "Brand Identity",
    date: "March 3, 2025",
    readTime: "5 min read",
    image: "/images/post_brand_identity.png",
    excerpt:
      "The world's most iconic brands are not defined by their logo or color palette — they are defined by the feeling they create. Here's how to engineer that feeling.",
    content:
      "An unforgettable brand is not built in a boardroom — it is discovered in the intersection of what a company genuinely believes and what its audience desperately wants. The most iconic brands in history — Apple, Nike, Dieter Rams-era Braun — succeeded not because they had perfect logos, but because every touchpoint, from product to packaging to communication, expressed a single coherent point of view. Brand identity design, at its best, is the translation of that point of view into a visual and verbal language. Color, form, typography, tone of voice — each of these is a signal. The question for every brand project is: what story do we want these signals to tell?",
  },
];
