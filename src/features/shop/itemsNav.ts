export const navShop = [
  {
    _id: "all",
    name: "All",
    link: "/shop/categories/all",
  },
  {
    _id: "best-seller",
    name: "Best Sellers",
    link: "/shop/categories/best-seller",
  },
  {
    _id: "body-line",
    name: "Body Line",
    link: "/shop/categories/body-line",
    subcategories: [
      {
        id: "moisturizers",
        title: "Moisturizers",
      },
      {
        id: "sunscreens",
        title: "Sunscreens",
      },
      {
        id: "exfoliator",
        title: "Exfoliator",
      },
    ],
  },
  {
    _id: "facial-line",
    name: "Facial Line",
    link: "/shop/categories/facial-line",
    subcategories: [
      {
        id: "cleaners",
        title: "Cleansers",
      },
      {
        id: "moisturizers",
        title: "Moisturizers",
      },
      {
        id: "serum",
        title: "Serums",
      },
      {
        id: "sunscreens",
        title: "Sunscreens",
      },
    ],
  },
  {
    _id: "hair-line",
    name: "Hair Line",
    link: "/shop/categories/hair-line",
    subcategories: [
      {
        id: "shampoos",
        title: "Shampoos",
      },
      {
        id: "conditioners",
        title: "Conditioners",
      },
      {
        id: "masks",
        title: "Hair Masks",
      },
    ],
  },
]
