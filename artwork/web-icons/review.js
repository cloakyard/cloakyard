const studies = {
  cloakyard: {
    description:
      "The three connected cells and detached tile retain the arrangement of the family mark. Filling the junction makes the overlap legible at tab size.",
    layers: [
      ["ground", "Blue field"],
      ["linked", "Connected tiles"],
      ["tile", "Detached tile"],
    ],
  },
  "cloakyard-cube": {
    description:
      "Six identical modules represent the six apps in the directory. The corner opening reveals the assembly even in one ink.",
    layers: [
      ["ground", "Lower pair"],
      ["tier", "Upper tier"],
      ["front", "Front module"],
    ],
  },
  "cloakpdf-stack": {
    description:
      "Two offset page outlines take the place of the shield. The three lines keep the lengths and spacing of the existing PDF mark.",
    layers: [
      ["ground", "Blue field"],
      ["back", "Rear sheet"],
      ["page", "Printed sheet"],
    ],
  },
  cloakpdf: {
    description:
      "The three lines are cut through a solid page. The curved opening at the lower right reveals the turned corner and the sheet beneath it.",
    layers: [
      ["ground", "Lower page"],
      ["page", "Printed page"],
      ["curl-tip", "Paper turn"],
    ],
  },
  cloakresume: {
    description:
      "The portrait and résumé lines are cut into an emerald index card. Two staggered tabs suggest a collection of drafts.",
    layers: [
      ["ground", "Rear tab"],
      ["divider", "Middle tab"],
      ["face", "Profile card"],
    ],
  },
  "cloakresume-cameo": {
    description:
      "A side profile grows out of the original portrait dot. Two short name lines sit alongside it, with two longer résumé lines underneath.",
    layers: [
      ["ground", "Portrait"],
      ["name", "Name lines"],
      ["body", "Résumé lines"],
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
  for (const image of document.querySelectorAll(".master, .header-mark, .tab-mark")) {
    const source = new URL(image.src);
    source.hash = scheme;
    image.src = source.href;
  }
  for (const image of stage.children) {
    image.src = layerSource(image.dataset.layer, scheme);
  }
}

function layerSource(id, scheme) {
  const hasAppearance = product.value !== "cloakimg" || id === "ground";
  const view = hasAppearance ? `${id}-${scheme}` : id;
  return `${product.value}.svg#${view}`;
}

function inspectProduct() {
  const name = product.value;
  const study = studies[name];
  stage.replaceChildren();
  layers.replaceChildren(legend);
  document.getElementById("object-name").textContent = product.selectedOptions[0].label;
  document.getElementById("description").textContent = study.description;
  document.getElementById("master-source").href = `${name}.svg`;
  document.getElementById("tab-source").href = `tabs/${name}.svg`;

  const inkSource = document.getElementById("ink-source");
  inkSource.href = `${name}.svg#ink`;
  inkSource.hidden = name === "cloakimg";
  for (const [index, [id, label]] of study.layers.entries()) {
    const image = document.createElement("img");
    image.dataset.layer = id;
    image.src = layerSource(id, selectedScheme());
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
