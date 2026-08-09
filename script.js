const subjectsByClass = {
  "Class 1":["English","Mathematics","Assamese","Environmental Studies"],
  "Class 2":["English","Mathematics","Assamese","Environmental Studies"],
  "Class 3":["English","Mathematics","Assamese","Environmental Studies"],
  "Class 4":["English","Mathematics","Assamese","Environmental Studies"],
  "Class 5":["English","Mathematics","Assamese","Environmental Studies"],
  "Class 6":["English","Mathematics","Assamese","Science","Social Science"],
  "Class 7":["English","Mathematics","Assamese","Science","Social Science"],
  "Class 8":["English","Mathematics","Assamese","Science","Social Science"],
  "Class 9":["English","Mathematics","Assamese","General Science","Social Science"],
  "Class 10":["English","Mathematics","Assamese","General Science","Social Science"]
};

const classGrid = document.getElementById("classGrid");
const select = document.getElementById("classSelect");
const subjects = document.getElementById("subjects");

Object.keys(subjectsByClass).forEach((cls, i) => {
  const card = document.createElement("a");
  card.className = "class-card";
  card.href = "#study";
  card.innerHTML = `📚 ${cls}<small>View subjects & materials</small>`;
  card.onclick = () => { select.value = cls; renderSubjects(cls); };
  classGrid.appendChild(card);

  const option = document.createElement("option");
  option.value = cls;
  option.textContent = cls;
  select.appendChild(option);
});

function renderSubjects(cls){
  subjects.innerHTML = subjectsByClass[cls].map(s => `
    <div class="subject">
      <h3>${s}</h3>
      <a href="#" onclick="return comingSoon(event)">Notes & PDF →</a>
    </div>`).join("");
}
function comingSoon(e){
  e.preventDefault();
  alert("Study material for this subject will be uploaded by the school.");
  return false;
}
select.addEventListener("change", e => renderSubjects(e.target.value));
renderSubjects(select.value);

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("open");
});
document.querySelectorAll(".menu a").forEach(a => a.addEventListener("click", () => {
  document.querySelector(".menu").classList.remove("open");
}));
