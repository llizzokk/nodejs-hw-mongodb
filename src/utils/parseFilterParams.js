const parseType = (type) => {
  const allowedTypes = ['work', 'home', 'personal'];
  return allowedTypes.includes(type) ? type : undefined;
};

const parseBoolean = (value) => {
  if (typeof value !== 'string') return undefined;
  if (value === 'true') return true;
  if (value === 'false') return false;
  return undefined;
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;

  const parsedType = parseType(type);
  const parsedisFavourite = parseBoolean(isFavourite);

  return {
    contactType: parsedType,
    isFavourite: parsedisFavourite,
  };
};
