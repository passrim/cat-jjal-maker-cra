const EMPTY_HEART = "🤍";
const FULL_HEART = "💖";

const CAT1 = "../../answers/cat-jjal-maker-cra/public/img/cat1.jpg";
const CAT2 = "../../answers/cat-jjal-maker-cra/public/img/cat2.jpg";
const CAT3 = "../../answers/cat-jjal-maker-cra/public/img/cat3.jpg";

const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);

const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};

const fetchCat = async (text) => {
  const OPEN_API_DOMAIN = "https://localhost:5500";
  const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
  const responseJson = await response.json();
  return `${OPEN_API_DOMAIN}/${responseJson.url}`;
};
