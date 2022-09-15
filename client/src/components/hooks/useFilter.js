import { useMemo } from "react";

export const useSortedPosts = (eventsFeature, month) => {
  const sortedPosts = useMemo(() => {
    if (month === "Все") return eventsFeature;
    return eventsFeature.filter((event) =>
      event.month.toLowerCase().includes(month.toLowerCase())
    );
  }, [month, eventsFeature]);
  return sortedPosts;
};

export const useSortedPostsWas = (sortedPosts, was) => {
  const sortedPostsWas = useMemo(() => {
    if (was === "Все") return sortedPosts;
    return sortedPosts.filter((event) => event.was === was);
  }, [was, sortedPosts]);
  return sortedPostsWas;
};

export const useSortedPostsPay = (sortedPostsWas, isPay) => {
  const sortedPostsIsPay = useMemo(() => {
    if (isPay === "Все") return sortedPostsWas;
    return sortedPostsWas.filter((event) => event.pay === isPay);
  }, [isPay, sortedPostsWas]);
  return sortedPostsIsPay;
};

// export const useSortedPostsYear = (sortedPostsWasPay, year) => {
//   const sortedPostsIsYear = useMemo(() => {
//     if (year === "Все") return sortedPostsWasPay;
//     return sortedPostsWasPay.filter((event) => event.year === year);
//   }, [year, sortedPostsWasPay]);
//   return sortedPostsIsYear;
// };

// export const useFilter = (events, field, value) => {
//   const sortedEvents = useMemo(() => {
//     if (value === "Все") return events;
//     return events.filter((event) => event[field] === value);
//   }, [value, events]);
//   return sortedEvents;
// };

// export const useSortedAndSearchedPosts = (events, filtrParams) => {
//     const filtredMonth = useFilter(events, "pay", filtrParams.isPay)
//     return filtredMonth;

// };

export const useSortedAndSearchedPosts = (
  eventsFeature,
  month,
  format,
  was,
  isPay
) => {

const sortedPosts = useSortedPosts(eventsFeature, month);
const sortedPostsWas = useSortedPostsWas(sortedPosts, was);
const sortedPostsWasPay = useSortedPostsPay(sortedPostsWas, isPay);

const sortedAndSearchedPosts = useMemo(() => {
  if (format === "Все") return sortedPostsWasPay;
  return sortedPostsWasPay.filter((event) => event.place === format);
}, [format, sortedPostsWasPay]);
return sortedAndSearchedPosts;
};
///

export const useSortedPostsMonthPast = (eventsFeature, pastMonth) => {
  const sortedPostsMonthPast = useMemo(() => {
    if (pastMonth === "Все") return eventsFeature;
    return eventsFeature.filter((event) =>
      event.month.toLowerCase().includes(pastMonth.toLowerCase())
    );
  }, [pastMonth, eventsFeature]);
  return sortedPostsMonthPast;
};

export const useSortedPostsYearPast = (sortedPostsMonthPast, pastYear) => {
  const sortedPostsYearPast = useMemo(() => {
    if (pastYear === "Все") return sortedPostsMonthPast;
    return sortedPostsMonthPast.filter((event) => event.year === pastYear);
  }, [pastYear, sortedPostsMonthPast]);
  return sortedPostsYearPast;
};

export const useSortedAndSearchedPostsPast = (
  eventsFeature,
  pastMonth,
  was,
  pastYear
) => {
  const sortedPostsMonthPast = useSortedPostsMonthPast(
    eventsFeature,
    pastMonth
  );
  const sortedPostsYearPast = useSortedPostsYearPast(
    sortedPostsMonthPast,
    pastYear
  );

  const sortedAndSearchedPosts = useMemo(() => {
    if (was === "Все") return sortedPostsYearPast;
    return sortedPostsYearPast.filter((event) => event.was === was);
  }, [was, sortedPostsYearPast]);
  return sortedAndSearchedPosts;
};

///