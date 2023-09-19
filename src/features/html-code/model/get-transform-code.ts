export const getTransformCode = (htmlRow: string): string[] => {
  const htmlList = htmlRow.split("<").map(item => "<" + item);

  return htmlList;
};
