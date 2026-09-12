/**
 * Navigation model. Markets and Experience are expandable groups; their
 * children come from the market and project data so menus stay in sync.
 */
import { markets, navCta } from './site';
import { projects, projectHref } from './projects';

export interface NavChild {
  label: string;
  href: string;
  meta?: string;
}

export interface NavItem {
  label: string;
  /** Omit for a group without a landing page (Markets). */
  href?: string;
  /** Required for groups; used for aria-controls ids. */
  id?: string;
  children?: readonly NavChild[];
}

export const nav: readonly NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    id: 'markets',
    label: 'Markets',
    children: markets.map((m) => ({ label: m.name, href: m.href })),
  },
  {
    id: 'experience',
    label: 'Experience',
    href: '/experience',
    children: projects.map((p) => ({ label: p.name, href: projectHref(p), meta: p.place })),
  },
  { label: 'Properties', href: '/properties' },
  { label: 'Contact', href: '/contact' },
];

/** Footer link list: one flat column. */
export const footerLinks: readonly NavChild[] = [
  { label: 'About', href: '/about' },
  ...markets.map((m) => ({ label: m.name, href: m.href })),
  { label: 'Experience', href: '/experience' },
  { label: 'Properties', href: '/properties' },
  { label: 'Contact', href: '/contact' },
];

export { navCta };
