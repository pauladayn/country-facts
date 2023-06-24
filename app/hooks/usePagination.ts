"use client";
import { Dispatch, SetStateAction, useMemo} from "react";
import { CountryData } from "../types/model/CountryType";

export default function usePagination(
  countryList: CountryData[],
  foundedResults: number,
  currentPage: number,
  setCurrentPage: Dispatch<SetStateAction<number>>,
) {
  const maxItems = 9;
  const availablePages = Math.ceil(foundedResults / maxItems);
  const hasNextPage = currentPage < availablePages;
  const hasPreviousPage = currentPage > 1;

  const handleNextPage = () => {
    hasNextPage && setCurrentPage((prevState) => prevState + 1);
  };

  const handlePrevPage = () => {
    hasPreviousPage && setCurrentPage((prevState) => prevState - 1);
  };

  const currentPageContent = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * availablePages;
    const lastPageIndex = firstPageIndex + maxItems;
    return countryList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, availablePages, countryList]);

  return {
    currentPageContent,
    currentPage,
    handleNextPage,
    handlePrevPage,
    availablePages,
    maxItems
  };
}
