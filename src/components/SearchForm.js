import React from "react";

export default function SearchForm({ setSerachTerm }) {
  let searchTerm = React.useRef("");


  React.useEffect(()=>{
    searchTerm.current.focus();
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const setCocktail = () => {
    setSerachTerm(searchTerm.current.value);
  };
  return (
    <section className="section">
      <h1 className="section-title">Search cocktails</h1>
      <form className="form search-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Search your favorite cocktail</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={setCocktail}
              ref={searchTerm}
            />
          </div>
      </form>
    </section>
  );
}
