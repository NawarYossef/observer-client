import React from "react";
import './styles/search-bar.css';

export default function SearchBar(props) {
  return (
    <section className="search-bar-wrapper">
    <form onSubmit={e => e.preventDefault()}>
      <h6>Search {props.category}</h6>
      <input onChange={e => props.onChange(e.target.value)} 
      />
      </form>
    </section>
  );
}