const products = [
  {
    name: "Syltherine",
    sName: "Stylish cafe chair",
    price: 3500000,
    img: "image 1.png",
    special: "-30",
    add: "#",
    share: "#",
    like: "#",
  },
  {
    name: "Leviosa",
    sName: "Stylish cafe chair",
    price: 2500000,
    img: "image 2.png",
    special: "",
    add: "#",
    share: "#",
    like: "#",
  },
  {
    name: "Lolito",
    sName: "Luxury big sofa",
    price: 14000000,
    img: "image 3.png",
    special: "-50",
    add: "#",
    share: "#",
    like: "#",
  },
  {
    name: "Respira",
    sName: "Minimalist fan",
    price: 500000,
    img: "image 4.png",
    special: "New",
    add: "#",
    share: "#",
    like: "#",
  },
  {
    name: "Grifo",
    sName: "Night lamp",
    price: 1500000,
    img: "image 5.png",
    special: "",
    add: "#",
    share: "#",
    like: "#",
  },
  {
    name: "Muggo",
    sName: "Small mug",
    price: 150000,
    img: "image 6.png",
    special: "New",
    add: "#",
    share: "#",
    like: "#",
  },
  {
    name: "Pingky",
    sName: "Cute bed set",
    price: 14000000,
    img: "image 7.png",
    special: "-50",
    add: "#",
    share: "#",
    like: "#",
  },
  {
    name: "Potty",
    sName: "Minimalist flower pot",
    price: 500000,
    img: "image 8.png",
    special: "New",
    add: "#",
    share: "#",
    like: "#",
  },
  {
    name: "Test",
    sName: "Test",
    price: 200000,
    img: "image 1.png",
    special: "New",
    add: "#",
    share: "#",
    like: "#",
  },
];

let productsIsShowed = 0;

function ButtonShowMore(n) {
  showProducts(n);
}

showProducts(8);

function showProducts(n) {
  var button = document.getElementsByClassName("buttonShow")[0];
  if (productsIsShowed >= products.length) {
    button.style.visibility = "hidden";
    return;
  }
  button.style.visibility = "visible";
  let dem = 0;
  for (let i = productsIsShowed; i < products.length; i++) {
    var parent = document.getElementsByClassName("product")[0];
    var khuyenMai = 1;
    if (products[i].special !== "" && products[i].special !== "New")
      khuyenMai = parseInt(products[i].special);
    var giaMoi =
      products[i].price * (khuyenMai !== 1 ? (100 + khuyenMai) / 100.0 : 1);
    var formattedPrice = products[i].price.toLocaleString("vi-VN");
    var formattedGiaMoi = giaMoi.toLocaleString("vi-VN");
    var specialClass = products[i].special === "New" ? "newSpecial" : "";
    var specialContent = products[i].special ? products[i].special : "";
    var specialDisplay = products[i].special ? "block" : "none";

    if (giaMoi === products[i].price)
      parent.innerHTML += `
        <div class="card">
          <div class="cardSpecial ${specialClass}" style="display: ${specialDisplay};">${specialContent}</div>
          <div class="cardImg">
            <img src="assets/images/${products[i].img}" alt="" />
          </div>
          <div class="cardInfo">
            <p class="cardName">${products[i].name}</p>
            <p class="cardSName">${products[i].sName}</p>
            <div class="cardPrice">
              <div class="priceTemp">Rp ${formattedPrice}</div>
            </div>
          </div>
          <div class="cardBehind">
            <div class="cardButtons">
              <a
                class="addProduct btn link-underline link-underline-opacity-0"
                href="${products[i].add}"
              >
                Add to cart
              </a>
              <div class="anotherButtons">
                <a
                  class="share btn link-underline link-underline-opacity-0"
                  href="${products[i].share}"
                >
                  <img src="assets/images/Vector (1).png" alt="" />
                  <span class="buttonText">Share</span>
                </a>
                <a
                  class="like btn link-underline link-underline-opacity-0"
                  href="${products[i].like}"
                >
                  <img src="assets/images/Heart copy.png" alt="" />
                  <span class="buttonText">Like</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
    else
      parent.innerHTML += `
        <div class="card">
          <div class="cardSpecial ${specialClass}" style="display: ${specialDisplay};">${specialContent}%</div>
          <div class="cardImg">
            <img src="assets/images/${products[i].img}" alt="" />
          </div>
          <div class="cardInfo">
            <p class="cardName">${products[i].name}</p>
            <p class="cardSName">${products[i].sName}</p>
            <div class="cardPrice">
              <div class="priceTemp">Rp ${formattedGiaMoi}</div>
              <div class="priceTotal">
                <strike>Rp ${formattedPrice}</strike>
              </div>
            </div>
          </div>
          <div class="cardBehind">
            <div class="cardButtons">
              <a
                class="addProduct btn link-underline link-underline-opacity-0"
                href="${products[i].add}"
              >
                Add to cart
              </a>
              <div class="anotherButtons">
                <a
                  class="share btn link-underline link-underline-opacity-0"
                  href="${products[i].share}"
                >
                  <img src="assets/images/Vector (1).png" alt="" />
                  <span class="buttonText">Share</span>
                </a>
                <a
                  class="like btn link-underline link-underline-opacity-0"
                  href="${products[i].like}"
                >
                  <img src="assets/images/Heart copy.png" alt="" />
                  <span class="buttonText">Like</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;

    dem += 1;
    if (dem === n) {
      break;
    }
  }
  productsIsShowed += dem;
}

let tipsIsShowed = 3;

const tips = [
  {
    name: "How to create a living room to love",
    date: "20 Jan 2020",
    img: "Rectangle 32.png",
    link: "#",
  },
  {
    name: "Solution for clean look working space",
    date: "10 Jan 2020",
    img: "Rectangle 32 (1).png",
    link: "#",
  },
  {
    name: "Make your cooking activity more fun with good setup",
    date: "20 Jan 2020",
    img: "Rectangle 32 (2).png",
    link: "#",
  },
  { name: "Test", date: "20 Jan 2020", img: "Rectangle 32.png", link: "#" },
];

function updatePagination() {
  totalPageOfTips = Math.ceil(tips.length / tipsIsShowed);
  if (presentPage > totalPageOfTips) presentPage = totalPageOfTips;
  if (presentPage < 1) presentPage = 1;
}

function showTips(n) {
  const parent = document.getElementsByClassName("tricks-slides")[0];
  if (!parent) return;
  parent.innerHTML = "";
  n = Math.min(n, tips.length);
  for (let i = 0; i < n; i++) {
    parent.innerHTML += `
    <div class="tricks-slide">
      <div class="slide-img">
        <img src="assets/images/${tips[i].img}" alt="" />
      </div>
      <div class="slide-name">${tips[i].name}</div>
      <div class="slide-date">${tips[i].date}</div>
    </div>
    `;
  }
}

let totalPageOfTips = Math.ceil(tips.length / tipsIsShowed);
let presentPage = 1;

function changePageTips(n) {
  presentPage += n;
  slidePageTips(presentPage);
}

function slidePageTips(n) {
  const parent = document.getElementsByClassName("tricks-slides")[0];
  if (!parent) return;
  updatePagination();
  var indicatorTip = document.querySelectorAll(".tips-indicator .circle");
  indicatorTip.forEach((pointer) => pointer.classList.remove("active"));
  parent.innerHTML = "";
  let start = (presentPage - 1) * tipsIsShowed;
  if (start >= tips.length) start = 0;
  if (start < 0) start = Math.max(0, tips.length - tipsIsShowed);
  let dem = 0;
  for (let i = start; i < tips.length && dem < tipsIsShowed; i++) {
    parent.innerHTML += `
    <div class="tricks-slide">
      <div class="slide-img">
        <img src="assets/images/${tips[i].img}" alt="" />
      </div>
      <div class="slide-name">${tips[i].name}</div>
      <div class="slide-date">${tips[i].date}</div>
    </div>
    `;
    dem++;
  }
  if (indicatorTip.length > 0) {
    indicatorTip[presentPage - 1]?.classList.add("active");
  }
}

showTips(tipsIsShowed);
