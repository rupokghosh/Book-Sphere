const fetchData = (query) => {
  fetch(`https://openlibrary.org/search.json?q= + ${query} `)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

export default fetchData;
