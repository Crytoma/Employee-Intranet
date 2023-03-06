import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

// let container = document.querySelector(".posts");

// // Getting the posts onto main
// const renderPosts = async () => {
//   let uri = "http://localhost:5000/posts";

//   const res = await fetch(uri);
//   const posts = await res.json();

//   let template = "";
//   posts.forEach((post) => {
//     template += `
//     <div class="post">
//     <h2>${post.title}</h2>
//     <p><small>${post.likes} likes</small</p>
//     <p>${post.description.slice(0, 200)}</p>
//     <a href="/details.html">read more...</a>
//     </div>
//     `;
//   });

//   console.log(posts);

//   container.innerHTML = template;
// };

// window.addEventListener("DomContentLoaded", () => renderPosts());

export default class Home extends React.Component {
  render() {
    return (
      <HomePageWrap>
        <h1>Home Page!</h1>
      </HomePageWrap>
    );
  }
}

const HomePageWrap = styled.div`
  color: orange;
`;
