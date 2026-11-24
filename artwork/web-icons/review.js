const studies = {
  cloakyard: {
    description:
      "An apricot tree grows inside a blue arcade. Two open doorways make a small courtyard out of the isometric blocks on the family homepage.",
    layers: [
      ["ground", "Porcelain"],
      ["terrace", "Stone terrace"],
      ["arcade", "Cobalt arcade"],
      ["tree", "Apricot topiary"],
    ],
  },
  cloakpdf: {
    description:
      "A turned handle lifts from the page, leaving one vermilion bar of ink. The impression is the cue for redaction.",
    layers: [
      ["ground", "Blue worktop"],
      ["sheets", "Proof sheets"],
      ["shoe", "Rubber shoe"],
      ["handle", "Turned handle"],
    ],
  },
  cloakresume: {
    description:
      "A brass nib catches the light on a clothbound portfolio. Cream paper and a ribbon bookmark peek out below the cover.",
    layers: [
      ["ground", "Sage ground"],
      ["leaves", "Paper and ribbon"],
      ["cover", "Book cloth"],
      ["nib", "Brass pen nib"],
    ],
  },
  cloakimg: {
    description:
      "A brass-rimmed lens enlarges the sunset on a photographic slide. The horizon continues through the glass.",
    layers: [
      ["ground", "Coral ground"],
      ["slide", "Mounted slide"],
      ["barrel", "Machined loupe"],
      ["optics", "Magnified sunset"],
    ],
  },
};

const product = document.getElementById("product");
const stage = document.getElementById("stage");
const spread = document.getElementById("spread");
const appearance = document.getElementById("appearance");
const layers = document.getElementById("layers");
const legend = layers.querySelector("legend");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

function selectedScheme() {
  if (appearance.value === "system") return systemDark.matches ? "dark" : "light";
  return appearance.value;
}

function updateAppearance() {
  const scheme = selectedScheme();
  document.documentElement.style.colorScheme = scheme;
  for (const card of document.querySelectorAll(".specimen")) {
    for (const image of card.querySelectorAll(".master, .header-mark")) {
      image.src = `${card.id}.svg#${scheme}`;
    }
  }
  stage.firstElementChild.src = `${product.value}.svg#ground-${scheme}`;
}

function inspectProduct() {
  const name = product.value;
  const study = studies[name];
  stage.replaceChildren();
  layers.replaceChildren(legend);
  document.getElementById("object-name").textContent = document.querySelector(
    `#${name} .object-name`,
  ).textContent;
  document.getElementById("description").textContent = study.description;
  document.getElementById("master-source").href = `${name}.svg`;
  document.getElementById("tab-source").href = `tabs/${name}.svg`;

  for (const [index, [id, label]] of study.layers.entries()) {
    const image = document.createElement("img");
    const view = id === "ground" ? `ground-${selectedScheme()}` : id;
    image.src = `${name}.svg#${view}`;
    image.alt = "";
    image.style.setProperty("--offset", index - (study.layers.length - 1) / 2);
    stage.append(image);

    const control = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = true;
    checkbox.addEventListener("change", () => {
      image.hidden = !checkbox.checked;
    });
    control.append(checkbox, label);
    layers.append(control);
  }
}

function setSpread() {
  stage.classList.toggle("spread-out", spread.checked);
}

product.addEventListener("change", inspectProduct);
spread.addEventListener("change", setSpread);
appearance.addEventListener("change", updateAppearance);
systemDark.addEventListener("change", updateAppearance);
inspectProduct();
setSpread();
updateAppearance();
document.getElementById("inspector").hidden = false;
appearance.closest("label").hidden = false;
