/**
 * Navigation model. Markets and Projects are expandable groups; their
 * children come from the market and project data so menus stay in sync.
 * Contact has no item of its own: it is the first entry under Work With David.
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
    label: 'Projects',
    href: '/experience',
    children: [
      { label: 'Sales experience', href: '/sales', meta: 'Client stories' },
      ...projects.map((p) => ({ label: p.name, href: projectHref(p), meta: p.place })),
    ],
  },
  { label: 'Properties', href: '/properties' },
];

/** Footer link list: one flat column. */
export const footerLinks: readonly NavChild[] = [
  { label: 'About', href: '/about' },
  ...markets.map((m) => ({ label: m.name, href: m.href })),
  { label: 'Projects', href: '/experience' },
  { label: 'Sales experience', href: '/sales' },
  { label: 'Properties', href: '/properties' },
  { label: 'Buy with David', href: '/buy' },
  { label: 'Sell with David', href: '/sell' },
  { label: 'Contact', href: '/contact' },
];

export { navCta };
