// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

// const selectCountry = document.querySelector(".country");
const CURRENT_C = "country";

function selectC(e) {
  const selectValue = e.target.value;
  localStorage.setItem(CURRENT_C, selectValue);
  const chk = localStorage.getItem(CURRENT_C);
  console.log(chk);
}

document.addEventListener("change", selectC);
