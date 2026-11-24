const studies = {
  cloakyard: {
    description:
      "The two panes meet in the original lower-left square. The overlap picks up both tints, and a small shadow lifts the upper-right tile.",
    layers: [
      ["ground", "Enamel disc"],
      ["horizontal", "Horizontal pane"],
      ["vertical", "Upright pane"],
      ["tile", "Floating square"],
    ],
  },
  cloakpdf: {
    description:
      "The shield takes the form of a sheet of paper. A turned corner and two page edges give it thickness. The three lines keep their original lengths and spacing.",
    layers: [
      ["ground", "Enamel disc"],
      ["leaves", "Page edges"],
      ["sheet", "Paper shield"],
      ["type", "Printed lines"],
    ],
  },
  cloakresume: {
    description:
      "The profile dot gains a shoulder line. A thin raised rim frames the emerald shield, with the short name and résumé lines in their familiar positions.",
    layers: [
      ["ground", "Enamel disc"],
      ["setting", "Shield setting"],
      ["face", "Emerald face"],
      ["profile", "Profile and type"],
    ],
  },
  cloakimg: {
    description:
      "The original twin peaks sit on separate planes inside the picture frame. The near ridge catches a thin edge of light, and the sun sits above the right peak.",
    layers: [
      ["ground", "Enamel disc"],
      ["frame", "Picture frame"],
      ["ridgelines", "Layered ridges"],
      ["sun", "Raised sun"],
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
