export const isFormElement = (elementPath: string): boolean => {
  return (
    elementPath === "construct-input" ||
    elementPath === "construct-textarea" ||
    elementPath === "construct-checkbox" ||
    elementPath === "construct-radio" ||
    elementPath === "construct-select"
  );
};
