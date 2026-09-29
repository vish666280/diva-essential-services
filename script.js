const search = document.getElementById("search");
const filters = document.querySelectorAll(".filter");
const cards = [...document.querySelectorAll(".service-card")];
const empty = document.getElementById("empty");
let current = "all";

function render() {
  const q = search.value.trim().toLowerCase();
  let shown = 0;

  cards.forEach(card => {
    const matchesCategory = current === "all" || card.dataset.category === current;
    const matchesSearch = !q || card.dataset.search.includes(q) || card.innerText.toLowerCase().includes(q);
    const visible = matchesCategory && matchesSearch;
    card.style.display = visible ? "" : "none";
    if (visible) shown++;
  });

  empty.style.display = shown ? "none" : "block";
}

search.addEventListener("input", render);

filters.forEach(btn => {
  btn.addEventListener("click", () => {
    filters.forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    current = btn.dataset.filter;
    render();
  });
});
