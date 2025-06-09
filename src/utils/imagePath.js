export const getImagePath = (path) => {
  if (!path) return '';
  // Remove leading slash if it exists
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return cleanPath;
}; 