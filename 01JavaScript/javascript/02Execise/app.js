let url = "https://swapi.dev/api/films/";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let index = 0; index < data.results.length; ++index) {
      const element = data.results[index];
      console.log(element);
      getDetail(index, data);
    }
  });

function getDetail(index, data) {
  const element = data.results[index].title;
  const element1 = data.results[index].producer;
  const element2 = data.results[index].director;
  console.log(element);
  console.log(element1);
  console.log(element2);

  for (let i = 0; i < data.results[index].planets.length; ++i) {
    var url = " ";
    url = data.results[index].planets[i];
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((planet) => {
        console.log("planet:", planet.name);
      });
  }
}

// dosent work ok
// getplanet
function getPlanet(array) {}
