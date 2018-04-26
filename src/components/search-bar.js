import React from "react";
import './styles/search-bar.css';
import './styles/helper.css';

export default function SearchBar(props) {
  return (
    <section className="search-bar-wrapper">
      <form onSubmit={e => e.preventDefault()}>
        <label className="search-bar-label" htmlFor="search-bar">
          <input  onChange={e => props.onChange(e.target.value)}
            className="search-input"
            placeholder={props.placeholder} />
            <span className="fa fa-search"></span>
        </label>
      </form>
    </section>
  );
}