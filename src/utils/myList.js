// utils/myList.js

export const getMyList = () => {
  const saved = localStorage.getItem('myList');
  return saved ? JSON.parse(saved) : [];
};

export const toggleMyList = (movie) => {
  const currentList = getMyList();
  const exists = currentList.some((item) => item.id === movie.id);

  let updatedList;
  if (exists) {
    updatedList = currentList.filter((item) => item.id !== movie.id);
  } else {
    updatedList = [...currentList, movie];
  }

  localStorage.setItem('myList', JSON.stringify(updatedList));
  return updatedList;
};