import { get } from "./handlers";
import { URI } from "./uris";

export const getAllCountries = () => get({ url: `${URI.ALL_COUNTRIES}` });

export const getCountriesByName = (countryName: string) =>
  get({ url: `${URI.NAME}/${countryName}` });

export const getCountryByCapital = (capitalName: string) =>
  get({ url: `${URI.CAPITAL}/${capitalName}` });

export const getCountryByField = (
  service: string,
  firstField: string,
  secondField: string
) => get({ url: `/${service}?fields=${firstField},${secondField}` });
