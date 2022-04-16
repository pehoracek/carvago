export const breakpoint = (point: string | number) => {
  if (typeof point === 'number') {
    return `@media screen and (min-width: ${point}px)`;
  }
  return `@media screen and (min-width: ${point})`;
};
