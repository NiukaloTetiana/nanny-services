export const getNanniesFilter = (nannies, filterBy) => {
  let filtered = [...nannies];

  switch (filterBy) {
    case "A to Z":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "Z to A":
      filtered.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "Less than 10$":
      filtered = filtered
        .filter((nanny) => nanny.price_per_hour < 10)
        .sort((a, b) => a.price_per_hour - b.price_per_hour);
      break;
    case "Greater than 10$":
      filtered = filtered
        .filter((nanny) => nanny.price_per_hour > 10)
        .sort((a, b) => a.price_per_hour - b.price_per_hour);
      break;
    case "Popular":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case "Not popular":
      filtered.sort((a, b) => a.rating - b.rating);
      break;
    default:
      break;
  }
  return filtered;
};
