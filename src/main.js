import "./style.css";

const btnEl = document.getElementById("btn");
const moon1El = document.getElementById("moon1");
const moon2El = document.getElementById("moon2");
const lightEl = document.getElementById("lightmode");
const darkEl = document.getElementById("darkmode");
const countriesEl = document.getElementById("countries");

const getCountry = async () => {
  const Response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,cca3"
  );
  const Countries = await Response.json();
  console.log(Countries);
  Countries.forEach((country) => {
    container.innerHTML += `
  
  <li
          class="flex flex-col dark:bg-[#2B3945] rounded-md overflow-hidden hover:scale-105 "
        >
          <img class="w-[260px] h-[160px]" src=${country.flags.png} />
          <div class="flex flex-col gap-4 p-8">
            <div class="dark:text-white text-[20px] font-medium"> ${country.name.common}</div>
            <div class="flex flex-col gap-1">
              <p class="dark:text-white text-[16px]">
                Population:<span> ${country.population}</span>
              </p>
              <p class="dark:text-white text-[16px]">
                Region:<span> ${country.region}</span>
              </p>
              <p class="dark:text-white text-[16px]">
                Capital:<span> ${country.capital}</span>
              </p>
            </div>
          </div>
        </li>
  `;
  });
};
getCountry();

btnEl.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
