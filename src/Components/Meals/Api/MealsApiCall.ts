import axios from "axios";
import { get, set } from "lodash";

export type MealThumbnail = {
  id: string;
  imageUrl: string;
  title: string;
  ingredients: {
    [key: string]: string;
  }[];
  category: string;
  tags: string[];
  area: string;
  instructions: string;
  videoUrl: string;
};
const getIngredients = (data: any): MealThumbnail["ingredients"] => {
  const ingredients: MealThumbnail["ingredients"] = [];
  for (let i = 1; i <= 20; i++) {
    if (data[`strIngredient${i}`] === "") {
      break;
    }
    const obj = {};
    set(obj, get(data, `strIngredient${i}`), get(data, `strMeasure${i}`));
    ingredients.push(obj);
  }
  return ingredients;
};

export const fetchMeals = (searchText: string) => {
  return new Promise((resolve: (value: MealThumbnail[]) => void, reject) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((response) => {
        if (!response.data.meals) {
          reject("Not found");
          return;
        }
        const data: MealThumbnail[] = response.data.meals.map(
          (item: any): MealThumbnail => ({
            id: item.idMeal,
            imageUrl: item.strMealThumb || "",
            title: item.strMeal || "",
            ingredients: getIngredients(item) || [],
            tags: (item.strTags && item.strTags.split(",")) || "",
            category: item.strCategory || "",
            area: item.strArea || "",
            instructions: item.strInstructions || "",
            videoUrl: item.strYoutube || ""
          })
        );
        console.log(data);
        resolve(data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};
