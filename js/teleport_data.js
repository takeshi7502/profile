
const teleportItems = [
  {
    name: "Mondstadt",
    img: "https://static.wikia.nocookie.net/gensin-impact/images/9/99/Emblem_Mondstadt_White.png",
    link: "https://drive.google.com/drive/folders/1wQ8y32MEirUGRgfCzX6K6pZ9BJe-3gVs?usp=drive_link"
  },
  {
    name: "Liyue",
    img: "https://static.wikia.nocookie.net/gensin-impact/images/4/49/Emblem_Liyue_White.png",
    link: "https://drive.google.com/drive/folders/1SqQbpYMojoiAH5FEsiCy9r8Wk18_cE--?usp=drive_link"
  },
  {
    name: "Inazuma",
    img: "https://static.wikia.nocookie.net/gensin-impact/images/5/51/Emblem_Inazuma_White.png",
    link: "https://drive.google.com/drive/folders/1JDql9KxsBMPrcEvNPgLIcc--dXSGkI4T?usp=drive_link"
  }
];

const container = document.getElementById("telejson-list");
teleportItems.forEach(item => {
  container.innerHTML += `
    <div class="telejson-item padd-15">
      <div class="telejson-item-inner shadow-dark">
        <a href="${item.link}" target="_blank">
          <div class="telejson-img">
            <img src="${item.img}" alt="" title="${item.name}">
          </div>
        </a>
      </div>
    </div>
  `;
});
