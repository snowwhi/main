const images = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', { eager: true });

export const getImage = (fileName) => {
  const match = Object.entries(images).find(([path]) =>
    path.endsWith(fileName)
  );
  return match ? match[1].default : null;
};