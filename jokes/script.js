const generateJokes = async () => {
    try {
        const setHeader = {
          headers: {
            Accept: "application/json",
          },
        };
        const res = await fetch("https://icanhazdadjoke.com/", setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    } catch (error) {
        console.log(error);
        
    }
};
const jokes = document.querySelector("#jokes");
const jokesBtn = document.querySelector("#jokeBtn");


jokesBtn.addEventListener('click',generateJokes);
generateJokes()









// const generateJokes = () => {
//   const setHeader = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("GET https://icanhazdadjoke.com/", setHeader)
//     .then((res) => res.json())
//     .then((data) => {
//       jokes.innerHTML = data.joke;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };