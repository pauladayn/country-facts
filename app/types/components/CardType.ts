export type CardImageType = {
  png: string;
  alt: string
}

export type CardType = {
  title: string;
  subtitle: string;
  language: {};
  currencies: {};
  timezone: string;
  sectionName?: string;
  image: CardImageType;
  link: { googleMaps: string; openStreet: string };
};
