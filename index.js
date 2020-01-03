const fetchData = async searchTerm => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'b3f45c0a',
      s: searchTerm
    }
  });

  console.log(response.data);
};

const input = document.querySelector('input');

const onInput = debounce(event => {
  fetchData(event.target.value);
}, 1000);

input.addEventListener('input', onInput);
