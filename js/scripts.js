// function empty() {
//     const value = document.getElementById("search__input").value;
//     if (value.trim() == "") return false;
// }

// Get github projects

// const url = new URL("http://api.github.com/users/jonathanzuniga/repos");
// const params = {
//     direction: "desc",
//     per_page: 100,
//     sort: "updated",
//     type: "owner",
// };
// const myHeaders = new Headers({
//     Accept: "application/vnd.github.v3+json",
// });

// Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

// fetch(url, {
//     headers: myHeaders,
// })
//     .then((response) => response.json())
//     .then((data) => {
//         const items = data
//             .filter(
//                 ({ fork, description, name }) =>
//                     !fork &&
//                     // !description?.toLowerCase().includes("xamarin") &&
//                     name !== "jonathanzuniga.github.io"
//             )
//             .slice(0, 10)
//             .map(({ description, html_url, name }) => {
//                 const li = `<li>
//                     <a href="${html_url}">${name}</a>
//                     ${description || ""}
//                 </li>`;

//                 console.table({ name, description, html_url });

//                 return li;
//             });

//         const projects = document.querySelector("#list-projects");

//         projects.innerHTML = items.join("");
//     })
//     .catch((error) => console.error(error));
