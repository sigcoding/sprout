export interface SectionTitleProps {
  size?: Size;
  href?: string;
  text?: string;
}

export type Size =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body-1"
  | "body-2"
  | "label-1"
  | "cap-1"
  | "cap-2"
  | "cap-3"
  | "cap-4"
  | "link";
