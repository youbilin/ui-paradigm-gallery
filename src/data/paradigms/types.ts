export interface ColorToken {
  name: string;
  value: string;
}

export interface FontToken {
  role: string;
  stack: string;
}

export interface ParadigmTokens {
  colors: ColorToken[];
  fonts: FontToken[];
  radius?: string;
  shadow?: string;
  extras?: { label: string; value: string }[];
}

export interface ParadigmDemo {
  html: string;
  height: number;
  heightMobile?: number;
}

export interface Paradigm {
  id: string;
  no: string;
  name: string;
  nameEn: string;
  tagline: string;
  origin: string;
  year: string;
  tags: string[];
  kind?: 'paradigm' | 'anti-pattern';
  bestFor: string[];
  avoid: string[];
  prompt: string;
  spec: string[];
  tokens: ParadigmTokens;
  demo: ParadigmDemo;
}
