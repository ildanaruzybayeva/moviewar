const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'b3f45c0a',
      s: 'avengers'
    }
  });

  console.log(response.data);
};

fetchData();
