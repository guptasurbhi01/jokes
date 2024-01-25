let btn = document.querySelector("button");
const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

async function showjoke(){
const response = await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1",options);
const data = await response.json();
console.log(data)
 if (data[0].joke) {
   document.querySelector("p").innerText = data[0].joke;
 } else {
   throw new Error("Failed to fetch joke");
 }
}

btn.addEventListener("click", showjoke)
