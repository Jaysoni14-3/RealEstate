import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "daa86aedebmsh6730e1a666cbd5bp16d1ebjsnbf8259cc85ab",
    },
  });

  return data;
};
