interface Maps {
  googleMaps: string;
  openStreet: string;
}

interface Name {
  common: string;
  official: string;
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface CountryData {
  name: Name;
  currencies: {};
  languages: {};
  capital: string;
  flag: string;
  maps: Maps;
  population: number;
  timezones: string;
  flags: Flags;
}
