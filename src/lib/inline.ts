/**
 * Inline links inside authored copy. Paragraph strings in src/data may contain
 * `[label](href)`; everything else is escaped. Internal hrefs (starting with
 * "/") get the preview base prefix, so the same copy works on the GitHub
 * Pages preview and in production.
 */
import { withBase } from './paths';

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function hasInline(text: string): boolean {
  return /\[[^\]]+\]\([^)]+\)/.test(text);
}

export function renderInline(text: string): string {
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)|([^[]+|\[)/g, (m, label, href, plain) => {
    if (label && href) {
      const external = /^https?:/.test(href);
      const url = external ? href : withBase(href);
      const rel = external ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `<a href="${escape(url)}"${rel}>${escape(label)}</a>`;
    }
    return escape(plain ?? m);
  });
}
