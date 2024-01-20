const nav = document.querySelector(".nav");
const searchBtn = document.querySelector("#checkbox-search");
const cartInput = document.querySelector(".nav-container #checkbox-cart");

searchBtn.addEventListener("click", function () {
  click();
});

function click() {
  nav.innerHTML = "";
  nav.classList.remove("nav");

  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
    <div class="search-container">
      <label for="nav-cont-s" class="search-container">
        <input
          id="nav-cont-s"
          class="nav-conts"
          type="search"
          placeholder="Search here"
        />
        <button id="input-search-btn">SEARCH</button>
      </label>
    </div>
  `;
  nav.appendChild(newDiv);

  newDiv.addEventListener("click", function (event) {
    if (event.target.id === "input-search-btn") {
      handleSearchButtonClick();
    }
  });
}

function handleSearchButtonClick() {
  nav.innerHTML = "";
  nav.classList.add("nav");
  nav.innerHTML = `
  <label for="checkbox-toogle" class="hamburger">&#9776:</label>
  <ul>
  <li><a href="#">PERSONAL CARE</a></li>
  <li><a href="#">HEALTH CARE ESSENTIAL</a></li>
  <li><a href="#">AYURVEDIC</a></li>
  <li><a href="#">NUTRITION & SUPPLIMENTS</a></li>
  <li><a href="#">MEDICAL DEVICES</a></li>
  <li><a href="#">OTHOPEDIC DEVICES</a></li>
</ul>
<div class="nav-container">
  <input type="checkbox" id="checkbox-search" />
  <label for="checkbox-search"><i class="fas fa-search"></i></label>
  <input type="checkbox" id="checkbox-cart" />
  <label for="checkbox-cart"
    ><i class="fas fa-shopping-cart"></i
  ></label>
</div>
  `;
}
const medicines = [
  {
    Image: "./medicines/citamol.jpg",
    medicineName: "Paracetomal",
    Rs: 50,
  },
  {
    Image: "./medicines/drug.jpg",
    medicineName: "Ayahuasca",
    Rs: 500,
  },
  {
    Image: "./medicines/Normosol-R.jpg",
    medicineName: "Normosol-R",
    Rs: 120,
  },
  {
    Image: "./medicines/drug.jpg",
    medicineName: "Ayahuasca",
    Rs: 500,
  },
  {
    Image: "./medicines/drug.jpg",
    medicineName: "Ayahuasca",
    Rs: 500,
  },
  {
    Image: "./medicines/citamol.jpg",
    medicineName: "Paracetomal",
    Rs: 50,
  },
];

// Get the section body element
let sectionbodyright = document.querySelector("#section-body-cont");

// Call the function to populate the section body with medicines
populateSectionBody();

// Define the function to populate the section body
function populateSectionBody() {
  // Loop through each medicine in the array
  medicines.forEach(function (medicine) {
    let nsb = document.createElement("div");

    // Set the HTML content for the medicine card
    nsb.innerHTML = `  <div class="col ">
    <div class="card">
      <img src="${medicine.Image}" class="card-img-top"
        alt="" />
      <div class="card-body">
        <h5 class="card-title">${medicine.medicineName}</h5>
        <p class="card-text">
        Rs. ${medicine.Rs}
        </p>
        <button type="button" class="btn btn-primary">Add To Cart</button>
      </div>
    </div>
  </div>`;

    // Append the medicine card to the section body
    sectionbodyright.appendChild(nsb);
  });
}
