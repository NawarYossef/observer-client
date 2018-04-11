import React from "react";
import './styles/search-bar.css';

export default function SearchBar(props) {
  return (
    <section className="search-bar-wrapper">
    <form onSubmit={e => e.preventDefault()}>
      <h2>Search jobs</h2>
      <input onChange={e => props.onChange(e.target.value)} 
      />
      </form>
    </section>
  );
}