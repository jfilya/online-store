import * as noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
import { IProducts, products } from "./product-list";
import "./product.scss";
class Products {
  public productItem: HTMLDivElement;
  public products: IProducts[];
  private workArray: IProducts[];
  private productsPopular: IProducts[];
  private productsManufacturer: IProducts[];
  private productsColors: IProducts[];
  private productsFilters: IProducts[];
  private productsCameras: IProducts[];
  constructor() {
    this.products = products;
    this.workArray = products;
    this.productItem = document.createElement("div");
    this.productsPopular = [];
    this.productsManufacturer = [];
    this.productsColors = [];
    this.productsFilters = [];
    this.productsCameras = [];
  }
  innerProduct(): void {
    (
      document.querySelector("section") as HTMLElement
    ).innerHTML += `<h4>Товары</h4>`;
    (
      document.querySelector("section") as HTMLElement
    ).innerHTML += `<p class="no-found">Извините, совпадений не обнаружено</p>`;
    (document.querySelector("section") as HTMLElement).append(this.productItem);
    this.productItem.className = "product";
  }
  buildProductitem(p: IProducts[]): void {
    (document.querySelector(".product") as HTMLElement).innerHTML = ``;
    for (const prod of p) {
      (
        document.querySelector(".product") as HTMLElement
      ).innerHTML += `<div id="${prod.id}" class="product__item ${prod.manufacturer}" name-sort="${prod.name}" year-sort="${prod.year}" popular="${prod.popular[0]}" cameras="${prod.numberOfCameras}">
        <img src="${prod.img}" alt="${prod.name}" class="product__item-image">
        <h5 class="product__item-title">${prod.name}</h5>
        <p>Цена: ${prod.price} руб</p>
        <p>Количество: ${prod.amount}</p>
        <p>Год: ${prod.year}</p>
        <p>Производитель: ${prod.manufacturer}</p>
        <p class="${prod.color[1]}">Цвет: ${prod.color[0]}</p>
        <p>Количество камер: ${prod.numberOfCameras}</p>
        <p>Популярный: ${prod.popular[0]}</p>
        <div class="product__item-btn">${prod.btn}</div>
      </div>`;
    }
    this.addCountOfBasket();
  }
  addCountOfBasket(): void {
    let count = +(
      document.querySelector(".header__basket-amount") as HTMLDivElement
    ).innerHTML;
    (
      document.querySelectorAll(
        ".product__item-btn"
      ) as unknown as HTMLDivElement[]
    ).forEach((element) => {
      if (element.innerHTML == "Добавить в корзину") {
        (element.parentNode as HTMLDivElement).classList.remove(
          "active-before"
        );
      }
      if (element.innerHTML == "Удалить") {
        (element.parentNode as HTMLDivElement).classList.add("active-before");
      }
      element.addEventListener("click", () => {
        if (element.innerHTML == "Добавить в корзину") {
          if (count == 20) alert("Извините, все слоты заполнены");
          if (count < 20) {
            this.products.forEach((p) => {
              if ((element.parentNode as HTMLDivElement).id === p.id) {
                p.btn = "Удалить";
              }
            });
            element.innerHTML = "Удалить";
            (element.parentNode as HTMLDivElement).classList.add(
              "active-before"
            );
            count += 1;
            (
              document.querySelector(".header__basket-amount") as HTMLDivElement
            ).innerHTML = `${count}`;
          }
        } else if (element.innerHTML == "Удалить") {
          this.products.forEach((p) => {
            if ((element.parentNode as HTMLDivElement).id === p.id) {
              p.btn = "Добавить в корзину";
            }
          });
          element.innerHTML = "Добавить в корзину";
          (element.parentNode as HTMLDivElement).classList.remove(
            "active-before"
          );
          count -= 1;
          (
            document.querySelector(".header__basket-amount") as HTMLDivElement
          ).innerHTML = `${count}`;
        }
      });
    });
  }
  rangeSlider(
    sliderName: noUiSlider.target,
    x: number,
    y: number,
    inputs: HTMLDivElement[]
  ): void {
    if (sliderName) {
      noUiSlider.create(sliderName, {
        start: [x, y],
        step: 1,
        connect: true,
        range: {
          min: [x],
          max: [y],
        },
      });
      sliderName.noUiSlider.on(
        "update",
        (values, handle: number): string =>
          (inputs[handle].innerText = `${Math.round(+values[handle])}`)
      );
      const sliderValueStart = document.querySelector(
        ".slider-value-start"
      ) as HTMLDivElement;
      const sliderValueEnd = document.querySelector(
        ".slider-value-end"
      ) as HTMLDivElement;
      const sliderYearStart = document.querySelector(
        ".slider-year-start"
      ) as HTMLDivElement;
      const sliderYearEnd = document.querySelector(
        ".slider-year-end"
      ) as HTMLDivElement;
      sliderName.noUiSlider.on("update", () => {
        this.products = this.filterBtnAll();
        this.buildProductitem(
          this.products.filter(
            (p: IProducts) =>
              p.amount >= +sliderValueStart.innerText &&
              p.amount <= +sliderValueEnd.innerText &&
              p.year >= +sliderYearStart.innerText &&
              p.year <= +sliderYearEnd.innerText
          )
        );
        this.searchBoxValue();
        this.outputMessageNotFound();
        this.sortAscendingDescending();
      });
    }
  }
  searchOninput(): void {
    (document.getElementById("search-text") as HTMLInputElement).oninput =
      (): void => {
        this.searchBoxValue();
      };
  }
  searchBoxValue(): void {
    const val = (
      document.getElementById("search-text") as HTMLInputElement
    ).value
      .trim()
      .toLowerCase();
    const elasticItems = document.querySelectorAll(".product__item-title");
    let flag = 0;
    if (val != "") {
      elasticItems.forEach((elem) => {
        if (
          (elem as HTMLHeadElement).innerText.toLowerCase().search(val) == -1
        ) {
          (elem.parentNode as HTMLDivElement).classList.add("not-search-text");
          flag++;
          if (flag === elasticItems.length) {
            (
              document.querySelector(".no-found") as HTMLParagraphElement
            ).style.display = "block";
          }
        } else {
          (elem.parentNode as HTMLDivElement).classList.remove(
            "not-search-text"
          );
          (
            document.querySelector(".no-found") as HTMLParagraphElement
          ).style.display = "none";
        }
      });
    } else {
      elasticItems.forEach((elem) => {
        (elem.parentNode as HTMLDivElement).classList.remove("not-search-text");
        (
          document.querySelector(".no-found") as HTMLParagraphElement
        ).style.display = "none";
      });
    }
  }
  sortAscendingDescendingOnchange(): void {
    (
      document.getElementById(
        "search-ascending-descending"
      ) as HTMLSelectElement
    ).onchange = (): void => {
      this.sortAscendingDescending();
    };
  }
  sortAscendingDescending(): void {
    const elementProducts: HTMLDivElement = document.querySelector(
      ".product"
    ) as HTMLDivElement;
    if (
      (document.getElementById("search-ascending-text") as HTMLOptionElement)
        .selected
    ) {
      for (let i = 0; i < elementProducts.children.length; i++) {
        for (let j = i; j < elementProducts.children.length; j++) {
          {
            if (
              (elementProducts.children[i].getAttribute(
                "name-sort"
              ) as string) >
              (elementProducts.children[j].getAttribute("name-sort") as string)
            ) {
              const replacedNode = elementProducts.replaceChild(
                elementProducts.children[j],
                elementProducts.children[i]
              );
              insertAfter(replacedNode, elementProducts.children[i]);
            }
          }
        }
      }
    } else if (
      (document.getElementById("search-descending-text") as HTMLOptionElement)
        .selected
    ) {
      for (let i = 0; i < elementProducts.children.length; i++) {
        for (let j = i; j < elementProducts.children.length; j++) {
          {
            if (
              (elementProducts.children[i].getAttribute(
                "name-sort"
              ) as string) <
              (elementProducts.children[j].getAttribute("name-sort") as string)
            ) {
              const replacedNode = elementProducts.replaceChild(
                elementProducts.children[j],
                elementProducts.children[i]
              );
              insertAfter(replacedNode, elementProducts.children[i]);
            }
          }
        }
      }
    } else if (
      (document.getElementById("search-ascending-year") as HTMLOptionElement)
        .selected
    ) {
      for (let i = 0; i < elementProducts.children.length; i++) {
        for (let j = i; j < elementProducts.children.length; j++) {
          if (
            +(elementProducts.children[i].getAttribute("year-sort") as string) >
            +(elementProducts.children[j].getAttribute("year-sort") as string)
          ) {
            const replacedNode = elementProducts.replaceChild(
              elementProducts.children[j],
              elementProducts.children[i]
            );
            insertAfter(replacedNode, elementProducts.children[i]);
          }
        }
      }
    } else if (
      (document.getElementById("search-descending-year") as HTMLOptionElement)
        .selected
    ) {
      for (let i = 0; i < elementProducts.children.length; i++) {
        for (let j = i; j < elementProducts.children.length; j++) {
          if (
            +(elementProducts.children[i].getAttribute("year-sort") as string) <
            +(elementProducts.children[j].getAttribute("year-sort") as string)
          ) {
            const replacedNode = elementProducts.replaceChild(
              elementProducts.children[j],
              elementProducts.children[i]
            );
            insertAfter(replacedNode, elementProducts.children[i]);
          }
        }
      }
    }

    function insertAfter(elem: Element, refElem: Element): Element {
      return (refElem.parentNode as HTMLDivElement).insertBefore(
        elem,
        refElem.nextSibling
      );
    }
  }
  filterBtnAll(): IProducts[] {
    const checkboxPupular = document.getElementById(
      "checkbox"
    ) as HTMLDivElement;

    const whiteBtn = document.getElementById("white") as HTMLDivElement;
    const purpleBtn = document.getElementById("purple") as HTMLDivElement;
    const blueBtn = document.getElementById("blue") as HTMLDivElement;
    const blackBtn = document.getElementById("black") as HTMLDivElement;

    const samsung = document.getElementById("samsung") as HTMLDivElement;
    const apple = document.getElementById("apple") as HTMLDivElement;
    const xiaomi = document.getElementById("xiaomi") as HTMLDivElement;

    const camera1 = document.getElementById("camera1") as HTMLDivElement;
    const camera2 = document.getElementById("camera2") as HTMLDivElement;
    const camera3 = document.getElementById("camera3") as HTMLDivElement;

    if (checkboxPupular.classList.contains("active-checkbox")) {
      this.productsPopular = this.workArray.filter((p) => p.popular[1]);
    }
    if (!checkboxPupular.classList.contains("active-checkbox")) {
      this.productsPopular = this.workArray;
    }
    if (this.productsPopular.length === 0) {
      this.productsPopular = this.workArray;
    }

    const selectColor = (): void => {
      if (whiteBtn.classList.contains("active-checkbox")) {
        this.productsColors = this.productsColors.filter(
          (p) => p.color[1] !== "white"
        );
        this.productsColors.push(
          ...this.workArray.filter((p) => p.color[1] === "white")
        );
      }
      if (!whiteBtn.classList.contains("active-checkbox")) {
        this.productsColors = this.productsColors.filter(
          (p) => p.color[1] !== "white"
        );
      }

      if (purpleBtn.classList.contains("active-checkbox")) {
        this.productsColors = this.productsColors.filter(
          (p) => p.color[1] !== "purple"
        );
        this.productsColors.push(
          ...this.workArray.filter((p) => p.color[1] === "purple")
        );
      }
      if (!purpleBtn.classList.contains("active-checkbox")) {
        this.productsColors = this.productsColors.filter(
          (p) => p.color[1] !== "purple"
        );
      }

      if (blueBtn.classList.contains("active-checkbox")) {
        this.productsColors = this.productsColors.filter(
          (p) => p.color[1] !== "blue"
        );
        this.productsColors.push(
          ...this.workArray.filter((p) => p.color[1] === "blue")
        );
      }
      if (!blueBtn.classList.contains("active-checkbox")) {
        this.productsColors = this.productsColors.filter(
          (p) => p.color[1] !== "blue"
        );
      }

      if (blackBtn.classList.contains("active-checkbox")) {
        this.productsColors = this.productsColors.filter(
          (p) => p.color[1] !== "black"
        );
        this.productsColors.push(
          ...this.workArray.filter((p) => p.color[1] === "black")
        );
      }
      if (!blackBtn.classList.contains("active-checkbox")) {
        this.productsColors = this.productsColors.filter(
          (p) => p.color[1] !== "black"
        );
      }
      if (this.productsColors.length === 0) {
        this.productsColors = this.workArray;
      }
    };
    selectColor();

    const selectManufacturer = (): void => {
      if (xiaomi.classList.contains("active-icon")) {
        this.productsManufacturer = this.productsManufacturer.filter(
          (p) => p.manufacturer !== "xiaomi"
        );
        this.productsManufacturer.push(
          ...this.workArray.filter((p) => p.manufacturer === "xiaomi")
        );
      }
      if (!xiaomi.classList.contains("active-icon")) {
        this.productsManufacturer = this.productsManufacturer.filter(
          (p) => p.manufacturer !== "xiaomi"
        );
      }
      if (apple.classList.contains("active-icon")) {
        this.productsManufacturer = this.productsManufacturer.filter(
          (p) => p.manufacturer !== "apple"
        );
        this.productsManufacturer.push(
          ...this.workArray.filter((p) => p.manufacturer === "apple")
        );
      }
      if (!apple.classList.contains("active-icon")) {
        this.productsManufacturer = this.productsManufacturer.filter(
          (p) => p.manufacturer !== "apple"
        );
      }
      if (samsung.classList.contains("active-icon")) {
        this.productsManufacturer = this.productsManufacturer.filter(
          (p) => p.manufacturer !== "samsung"
        );
        this.productsManufacturer.push(
          ...this.workArray.filter((p) => p.manufacturer === "samsung")
        );
      }
      if (!samsung.classList.contains("active-icon")) {
        this.productsManufacturer = this.productsManufacturer.filter(
          (p) => p.manufacturer !== "samsung"
        );
      }
      if (this.productsManufacturer.length === 0) {
        this.productsManufacturer = this.workArray;
      }
    };
    selectManufacturer();

    const selectCameras = (): void => {
      if (camera1.classList.contains("active-icon")) {
        this.productsCameras = this.productsCameras.filter(
          (p) => p.numberOfCameras !== 1
        );
        this.productsCameras.push(
          ...this.workArray.filter((p) => p.numberOfCameras === 1)
        );
      }
      if (!camera1.classList.contains("active-icon")) {
        this.productsCameras = this.productsCameras.filter(
          (p) => p.numberOfCameras !== 1
        );
      }
      if (camera2.classList.contains("active-icon")) {
        this.productsCameras = this.productsCameras.filter(
          (p) => p.numberOfCameras !== 2
        );
        this.productsCameras.push(
          ...this.workArray.filter((p) => p.numberOfCameras === 2)
        );
      }
      if (!camera2.classList.contains("active-icon")) {
        this.productsCameras = this.productsCameras.filter(
          (p) => p.numberOfCameras !== 2
        );
      }
      if (camera3.classList.contains("active-icon")) {
        this.productsCameras = this.productsCameras.filter(
          (p) => p.numberOfCameras !== 3
        );
        this.productsCameras.push(
          ...this.workArray.filter((p) => p.numberOfCameras === 3)
        );
      }
      if (!camera3.classList.contains("active-icon")) {
        this.productsCameras = this.productsCameras.filter(
          (p) => p.numberOfCameras !== 3
        );
      }
      if (this.productsCameras.length === 0) {
        this.productsCameras = this.workArray;
      }
    };
    selectCameras();

    this.productsFilters.splice(0, this.productsFilters.length);
    this.productsCameras.forEach((camera) => {
      this.productsManufacturer.forEach((m) => {
        this.productsPopular.forEach((p) => {
          this.productsColors.forEach((color) => {
            if (
              camera.id === m.id &&
              camera.id === p.id &&
              camera.id === color.id
            ) {
              this.productsFilters.push(color);
            }
          });
        });
      });
    }) as unknown as IProducts[];

    return (this.products = this.productsFilters);
  }
  filterBtnAllClick(): void {
    const sliderValueStart = document.querySelector(
      ".slider-value-start"
    ) as HTMLDivElement;
    const sliderValueEnd = document.querySelector(
      ".slider-value-end"
    ) as HTMLDivElement;
    const sliderYearStart = document.querySelector(
      ".slider-year-start"
    ) as HTMLDivElement;
    const sliderYearEnd = document.querySelector(
      ".slider-year-end"
    ) as HTMLDivElement;
    const activeBtnFilter = (
      checkbox: HTMLDivElement,
      nameClassAdd: string
    ) => {
      checkbox.addEventListener("click", () => {
        checkbox.classList.toggle(nameClassAdd);
        this.filterBtnAll();
        this.buildProductitem(
          this.products.filter(
            (p: IProducts) =>
              p.amount >= +sliderValueStart.innerText &&
              p.amount <= +sliderValueEnd.innerText &&
              p.year >= +sliderYearStart.innerText &&
              p.year <= +sliderYearEnd.innerText
          )
        );
        this.sortAscendingDescending();
        this.outputMessageNotFound();
        this.searchBoxValue();
      });
    };
    activeBtnFilter(
      document.getElementById("checkbox") as HTMLDivElement,
      "active-checkbox"
    );
    activeBtnFilter(
      document.getElementById("white") as HTMLDivElement,
      "active-checkbox"
    );
    activeBtnFilter(
      document.getElementById("purple") as HTMLDivElement,
      "active-checkbox"
    );
    activeBtnFilter(
      document.getElementById("blue") as HTMLDivElement,
      "active-checkbox"
    );
    activeBtnFilter(
      document.getElementById("black") as HTMLDivElement,
      "active-checkbox"
    );

    activeBtnFilter(
      document.getElementById("samsung") as HTMLDivElement,
      "active-icon"
    );
    activeBtnFilter(
      document.getElementById("apple") as HTMLDivElement,
      "active-icon"
    );
    activeBtnFilter(
      document.getElementById("xiaomi") as HTMLDivElement,
      "active-icon"
    );
    activeBtnFilter(
      document.getElementById("camera1") as HTMLDivElement,
      "active-icon"
    );
    activeBtnFilter(
      document.getElementById("camera2") as HTMLDivElement,
      "active-icon"
    );
    activeBtnFilter(
      document.getElementById("camera3") as HTMLDivElement,
      "active-icon"
    );
  }
  outputMessageNotFound(): void {
    if (
      (document.querySelector(".product") as unknown as HTMLDivElement)
        .childNodes.length === 0
    ) {
      (
        document.querySelector(".no-found") as HTMLParagraphElement
      ).style.display = "block";
    } else {
      (
        document.querySelector(".no-found") as HTMLParagraphElement
      ).style.display = "none";
    }
  }
  resetFilters(): void {
    (
      document.getElementById("reset-filters") as HTMLDivElement
    ).addEventListener("click", () => {
      const checkboxPupular = document.getElementById(
        "checkbox"
      ) as HTMLDivElement;
      const whiteBtn = document.getElementById("white") as HTMLDivElement;
      const purpleBtn = document.getElementById("purple") as HTMLDivElement;
      const blueBtn = document.getElementById("blue") as HTMLDivElement;
      const blackBtn = document.getElementById("black") as HTMLDivElement;
      const samsung = document.getElementById("samsung") as HTMLDivElement;
      const apple = document.getElementById("apple") as HTMLDivElement;
      const xiaomi = document.getElementById("xiaomi") as HTMLDivElement;
      const camera1 = document.getElementById("camera1") as HTMLDivElement;
      const camera2 = document.getElementById("camera2") as HTMLDivElement;
      const camera3 = document.getElementById("camera3") as HTMLDivElement;
      const arrayFiltersCheckbox = [
        checkboxPupular,
        whiteBtn,
        purpleBtn,
        blueBtn,
        blackBtn,
      ];
      const arrayFiltersIcon = [
        samsung,
        apple,
        xiaomi,
        camera1,
        camera2,
        camera3,
      ];
      arrayFiltersCheckbox.forEach((element) =>
        element.classList.remove("active-checkbox")
      );
      arrayFiltersIcon.forEach((element) =>
        element.classList.remove("active-icon")
      );
      (
        document.querySelector(".no-found") as HTMLParagraphElement
      ).style.display = "none";
      (document.getElementById("search-text") as HTMLInputElement).value = "";

      (
        document.querySelector(".slider-value") as noUiSlider.target
      ).noUiSlider.reset();
      (
        document.querySelector(".slider-year") as noUiSlider.target
      ).noUiSlider.reset();

      this.buildProductitem(this.workArray);
      (
        document.querySelectorAll("option") as unknown as HTMLOptionElement[]
      )[0].selected = true;
      this.sortAscendingDescending();
    });
  }
}

export default Products;

function rangeBuild(): void {
  new Products().rangeSlider(
    document.querySelector(".slider-value") as noUiSlider.target,
    1,
    10,
    [
      document.querySelector(".slider-value-start") as HTMLDivElement,
      document.querySelector(".slider-value-end") as HTMLDivElement,
    ]
  );
  new Products().rangeSlider(
    document.querySelector(".slider-year") as noUiSlider.target,
    2017,
    2022,
    [
      document.querySelector(".slider-year-start") as HTMLDivElement,
      document.querySelector(".slider-year-end") as HTMLDivElement,
    ]
  );
}

export { rangeBuild, noUiSlider };
