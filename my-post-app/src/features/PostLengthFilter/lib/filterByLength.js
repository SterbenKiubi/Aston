export const filterByLength = (posts, minLength = 0) => {
  return posts.filter(post => post.title.length >= minLength);
};

export const getAvailableLengths = (posts) => {
  const lengths = posts.map(post => post.title.length);
  const uniqueLengths = Array.from(new Set(lengths)).sort((a, b) => a - b);
  
  const standardOptions = [0, 10, 20, 30, 40, 50];
  const allOptions = [...new Set([...standardOptions, ...uniqueLengths])];
  
  return allOptions.filter(length => length <= Math.max(...uniqueLengths));
};