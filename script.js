
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-links");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const soilWorkspaceUrl = "https://srinivas12viv.github.io/SoilWorkspace/";

// Point every SoilWorkspace mention to its hosted site, including the navigation and CTA links.
document.querySelectorAll('a[href="#software"]').forEach((link) => {
  if (link.textContent.includes("SoilWorkspace")) {
    link.href = soilWorkspaceUrl;
  }
});

// Make other visible mentions clickable as well, without nesting links.
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
const textNodes = [];
while (textWalker.nextNode()) {
  const node = textWalker.currentNode;
  if (node.nodeValue.includes("SoilWorkspace") && !node.parentElement.closest("a, script, style")) {
    textNodes.push(node);
  }
}

textNodes.forEach((node) => {
  const parts = node.nodeValue.split("SoilWorkspace");
  const fragment = document.createDocumentFragment();
  parts.forEach((part, index) => {
    if (part) fragment.appendChild(document.createTextNode(part));
    if (index < parts.length - 1) {
      const link = document.createElement("a");
      link.href = soilWorkspaceUrl;
      link.textContent = "SoilWorkspace";
      fragment.appendChild(link);
    }
  });
  node.replaceWith(fragment);
});

// Describe the DEM Visualization resource as open-source code, not software.
const demCard = [...document.querySelectorAll(".resource-card")].find((card) =>
  card.querySelector("h3")?.textContent.includes("DEM Visualization")
);
if (demCard) {
  const label = demCard.querySelector(".resource-label");
  const description = demCard.querySelector("p");
  if (label) label.textContent = "OPEN-SOURCE CODES";
  if (description) {
    description.textContent = "Open-source codes for analysis and visualization of Discrete Element Method simulation data.";
  }
}
