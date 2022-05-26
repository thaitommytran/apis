const getResidentsButton = document.querySelector("button");

const getResidents = () => {
  console.log("button clicked");

  axios.get("https://swapi.dev/api/planets/?search=Alderaan").then((res) => {
    console.log("1st response received");
    // console.log("res", res);
    // console.log("res.data", res.data);
    // console.log("res.data.results", res.data.results);
    // console.log("res.data.results['0']", res.data.results["0"]);
    // console.log("res.data.results['0'].residents", res.data.results["0"].residents);
    let { residents } = res.data.results["0"];
    console.log(residents);

    residents.forEach((element) => {
      axios.get(`${element}`).then((res2) => {
        // console.log("2nd response received");
        // console.log(res2);
        // console.log(res2.data);
        // console.log(res2.data.name);
        let { name } = res2.data;
        console.log(name);

        let newElement = document.createElement("h2");
        // console.log(newElement);
        console.log(newElement.textContent);

        newElement.textContent = name;
        document.body.appendChild(newElement);
      });
    });
  });
};

getResidentsButton.addEventListener("click", getResidents);
