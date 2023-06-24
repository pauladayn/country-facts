export type CardType = {
  title: string;
  subtitle: string;
  language: {};
  currencies: {};
  timezone: string;
  sectionName?: string;
  image: { png: string; alt: string };
  link: { google: string; openStreet: string };
  styleVariant?: string;
};
