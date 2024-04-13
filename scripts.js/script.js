console.log('olá')

fetch("https://swapi.dev/api/").then((response) => {
    console.log("response", response);
    return response.json
})

.then((data) => {
    console.log("data", data);
})

const carregar = async () => {
    const response = await fetch("https://swapi.dev/api/");
    const data = await response.json();
    console.log("data", data);
}

carregar();
