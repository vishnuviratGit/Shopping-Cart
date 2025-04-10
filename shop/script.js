let currUser = localStorage.getItem("currUser");
let mensItems = document.getElementById("mens-items");
let womensItems = document.getElementById("womens-items");
let electronicItems = document.getElementById("electronic-items");
let jewelleryItems = document.getElementById("jewellery-items");
let menSection = document.getElementById("mens");
let jewellerySection = document.getElementById("jewellery");
let womenSection = document.getElementById("womens");
let electronicSection = document.getElementById("electronics");
let allFilter = document.getElementById("all-filter");
let mensFilter = document.getElementById("mens-filter");
let womensFilter = document.getElementById("womens-filter");
let jewelleryFilter = document.getElementById("jewellery-filter");
let electronicFilter = document.getElementById("electronic-filter");

if (currUser) {
  let colors = ["red", "black", "blue", "green"];
  let sizes = ["S", "M", "L", "XL"];
  let products = [];

  if (localStorage.getItem("products")) {
    products = JSON.parse(localStorage.getItem("products"));
  } else {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        let newData = data.map((item) => {
          item.colors = colors.slice(Math.floor(Math.random() * 4));
          item.sizes = sizes.slice(Math.floor(Math.random() * 4));
          return item;
        });
        products = newData;
        localStorage.setItem("products", JSON.stringify(newData));
      });
  }
  console.log(products);

  let mensClothing = products.filter(
    (item) => item.category === "men's clothing"
  );
  let jewellery = products.filter((item) => item.category === "jewelery");
  let electronics = products.filter((item) => item.category === "electronics");
  let womensClothing = products.filter(
    (item) => item.category === "women's clothing"
  );
  mensClothing.forEach((element, index) => {
    mensItems.innerHTML += `
                 <div class="item">
                <img src="${element.image}" alt="Item" />
                <div class="info">
                  <div class="row">
                    <div class="price">Rs.${element.price}</div>
                    <div class="sized">${element.sizes}</div>
                  </div>
                  <div class="colors">
                    Colors:
                    <div class="row">
                      <div class="circle" style="background-color: black"></div>
                      <div class="circle" style="background-color: #4938af"></div>
                      <div class="circle" style="background-color: #203d3e"></div>
                    </div>
                  </div>
                  <div class="row">Rating:${element.rating.rate}</div>
                </div>
                <button id="addBtn" onclick="addCart1(${index})">Add to Cart</button>
              </div>
              `;
  });
  womensClothing.forEach((element, index) => {
    womensItems.innerHTML += ` <div class="item">
                <img src="${element.image}" alt="Item" />
                <div class="info">
                  <div class="row">
                    <div class="price">Rs.${element.price}</div>
                    <div class="sized">${element.sizes}</div>
                  </div>
                  <div class="colors">
                    Colors:
                    <div class="row">
                      <div class="circle" style="background-color: black"></div>
                      <div class="circle" style="background-color: #4938af"></div>
                      <div class="circle" style="background-color: #203d3e"></div>
                    </div>
                  </div>
                  <div class="row">Rating:${element.rating.rate}</div>
                </div>
                <button id="addBtn" onclick="addCart2(${index})">Add to Cart</button>
              </div>`;
  });
  jewellery.forEach((element, index) => {
    jewelleryItems.innerHTML += `
          <div class="item">
                <img src="${element.image}" alt="Item" />
                <div class="info">
                  <div class="row">
                    <div class="price">Rs.${element.price}</div>
                    <div class="sized">${element.sizes}</div>
                  </div>
                  <div class="colors">
                    Colors:
                    <div class="row">
                      <div class="circle" style="background-color: black"></div>
                      <div class="circle" style="background-color: #4938af"></div>
                      <div class="circle" style="background-color: #203d3e"></div>
                    </div>
                  </div>
                  <div class="row">Rating:${element.rating.rate}</div>
                </div>
                <button id="addBtn" onclick="addCart3(${index})">Add to Cart</button>
              </div>
              `;
  });
  electronics.forEach((element, index) => {
    electronicItems.innerHTML += `
         <div class="item">
                <img src="${element.image}" alt="Item" />
                <div class="info">
                  <div class="row">
                    <div class="price">Rs.${element.price}</div>
                    <div class="sized">${element.sizes}</div>
                  </div>
                  <div class="colors">
                    Colors:
                    <div class="row">
                      <div class="circle" style="background-color: black"></div>
                      <div class="circle" style="background-color: #4938af"></div>
                      <div class="circle" style="background-color: #203d3e"></div>
                    </div>
                  </div>
                  <div class="row">Rating:${element.rating.rate}</div>
                </div>
                <button id="addBtn" onclick="addCart4(${index})">Add to Cart</button>
              </div>
              `;
  });

  function addCart1(index) {
    let element = mensClothing[index];
    if (localStorage.getItem("cart")) {
      let cartNew = JSON.parse(localStorage.getItem("cart"));
      cartNew.push(element);
      localStorage.setItem("cart", JSON.stringify(cartNew));
    } else {
      let cartNew = [];
      cartNew.push(element);
      localStorage.setItem("cart", JSON.stringify(cartNew));
    }
  }
  function addCart2(index) {
    let element = womensClothing[index];
    if (localStorage.getItem("cart")) {
      let cartNew = JSON.parse(localStorage.getItem("cart"));
      cartNew.push(element);
      localStorage.setItem("cart", JSON.stringify(cartNew));
    } else {
      let cartNew = [];
      cartNew.push(element);
      localStorage.setItem("cart", JSON.stringify(cartNew));
    }
  }
  function addCart3(index) {
    let element = jewellery[index];
    if (localStorage.getItem("cart")) {
      let cartNew = JSON.parse(localStorage.getItem("cart"));
      cartNew.push(element);
      localStorage.setItem("cart", JSON.stringify(cartNew));
    } else {
      let cartNew = [];
      cartNew.push(element);
      localStorage.setItem("cart", JSON.stringify(cartNew));
    }
  }
  function addCart4(index) {
    let element = electronics[index];
    if (localStorage.getItem("cart")) {
      let cartNew = JSON.parse(localStorage.getItem("cart"));
      cartNew.push(element);
      localStorage.setItem("cart", JSON.stringify(cartNew));
    } else {
      let cartNew = [];
      cartNew.push(element);
      localStorage.setItem("cart", JSON.stringify(cartNew));
    }
  }
  allFilter.addEventListener("click", () => {
    allFilter.classList.add("active");
    mensFilter.classList.remove("active");
    womensFilter.classList.remove("active");
    jewelleryFilter.classList.remove("active");
    electronicFilter.classList.remove("active");
    menSection.style.display = "block";
    womenSection.style.display = "block";
    jewellerySection.style.display = "block";
    electronicSection.style.display = "block";
  });
  mensFilter.addEventListener("click", () => {
    allFilter.classList.remove("active");
    mensFilter.classList.add("active");
    womensFilter.classList.remove("active");
    jewelleryFilter.classList.remove("active");
    electronicFilter.classList.remove("active");
    menSection.style.display = "block";
    womenSection.style.display = "none";
    jewellerySection.style.display = "none";
    electronicSection.style.display = "none";
  });
  womensFilter.addEventListener("click", () => {
    allFilter.classList.remove("active");
    mensFilter.classList.remove("active");
    womensFilter.classList.add("active");
    jewelleryFilter.classList.remove("active");
    electronicFilter.classList.remove("active");
    menSection.style.display = "none";
    womenSection.style.display = "block";
    jewellerySection.style.display = "none";
    electronicSection.style.display = "none";
  });
  jewelleryFilter.addEventListener("click", () => {
    allFilter.classList.remove("active");
    mensFilter.classList.remove("active");
    womensFilter.classList.remove("active");
    jewelleryFilter.classList.add("active");
    electronicFilter.classList.remove("active");
    menSection.style.display = "none";
    womenSection.style.display = "none";
    jewellerySection.style.display = "block";
    electronicSection.style.display = "none";
  });
  electronicFilter.addEventListener("click", () => {
    allFilter.classList.remove("active");
    mensFilter.classList.remove("active");
    womensFilter.classList.remove("active");
    jewelleryFilter.classList.remove("active");
    electronicFilter.classList.add("active");
    menSection.style.display = "none";
    womenSection.style.display = "none";
    jewellerySection.style.display = "none";
    electronicSection.style.display = "block";
  });
  let itemsFilter = [];
  document.getElementById("search").oninput = (e) => {
    let input = e.target.value.toLowerCase().trim();
    if (!e.target.value) {
      menSection.style.display = "block";
      womenSection.style.display = "block";
      jewellerySection.style.display = "block";
      electronicSection.style.display = "block";
      document.getElementById("search-filter").style.display = "none";
    } else {
      document.getElementById("search-items").innerHTML = "";
      let filteredItems = products.filter(
        (item) =>
          item.title.includes(input) ||
          item.description.includes(input) ||
          item.category.includes(input)
      );
      itemsFilter = filteredItems;
      filteredItems.forEach((element, index) => {
        document.getElementById("search-items").innerHTML += `
                    <div class="item">
                   <img src="${element.image}" alt="Item" />
                   <div class="info">
                     <div class="row">
                       <div class="price">$${element.price}</div>
                       <div class="sized">${element.sizes}</div>
                     </div>
                     <div class="colors">
                       Colors:
                       <div class="row">
                         <div class="circle" style="background-color: black"></div>
                         <div class="circle" style="background-color: #4938af"></div>
                         <div class="circle" style="background-color: #203d3e"></div>
                       </div>
                     </div>
                     <div class="row">Rating:${element.rating.rate}</div>
                   </div>
                   <button id="addBtn" onclick="addCart5(${index})">Add to Cart</button>
                 </div>
                 `;
      });
      document.getElementById("search-filter").style.display = "block";
      menSection.style.display = "none";
      womenSection.style.display = "none";
      jewellerySection.style.display = "none";
      electronicSection.style.display = "none";
    }
  };
  function addCart5(index) {
    let element = itemsFilter[index];
    if (localStorage.getItem("cart")) {
      let cartNew = JSON.parse(localStorage.getItem("cart"));
      cartNew.push(element);
      localStorage.setItem("cart", JSON.stringify(cartNew));
    } else {
      let cartNew = [];
      cartNew.push(element);
      localStorage.setItem("cart", JSON.stringify(cartNew));
    }
  }
} else {
  window.location.href = "/login/login.html";
}
