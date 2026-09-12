/** Shared content types used across the data files and components. */

/**
 * A photo slot. When `src` is set the component renders a real <img>;
 * otherwise it renders a labeled placeholder printing `suggestion` so David
 * can see which shot belongs there. Keep `suggestion` even after a photo
 * arrives; it doubles as the editor's note.
 */
export interface Photo {
  suggestion: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  /** A `-800.jpg` variant exists next to `src` for a srcset (market stock photos). */
  hasSmall?: boolean;
}

/** One figure in a stat row. Values are strings so "50+" and "1924" both work. */
export interface Stat {
  value: string;
  label: string;
}

export interface Cta {
  label: string;
  href: string;
  /** Open in a new tab (outbound links such as Compass). */
  external?: boolean;
}
