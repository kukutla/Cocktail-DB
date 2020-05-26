import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

export default function Home() {
  const [loading, setLoading] = React.useState(false);
  const [searchTerm, setSerachTerm] = React.useState("a");
  const [cocktails, setCocktails] = React.useState([]);
  React.useEffect(() => {
    setLoading(true);
    async function getDrinks() {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await response.json();
      //const drinks = data.drinks;
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else setCocktails([]);
      setLoading(false);
    }
    getDrinks();
  }, [searchTerm]);
  return (
    <main>
      <SearchForm setSerachTerm={setSerachTerm} />
      <CocktailList loading={loading} cocktails={cocktails} />
    </main>
  );
}
