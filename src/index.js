import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";
const books = [
  {
    id: 1,
    author: "Amelia Hepworth",
    title: "I Love You to the Moon and Back",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 2,
    author: "Mark Tappan",
    title: "My Dog Mattis",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/614s2iEcNzL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 3,
    author: "Mark Tappan",
    title: "My Dog Mattis",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/614s2iEcNzL._AC_UL200_SR200,200_.jpg",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // attribute, eventHandler

  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello world");
  };
  const complexExample = (author) => {
    console.log({ author });
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log({ title })}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
