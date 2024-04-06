// // const courses = [
// //   {
// //     id: 1,
// //     title: "Introduction to JavaScript",
// //     category: { id: 1, name: "Programming" },
// //   },
// //   { id: 2, title: "Advanced CSS", category: { id: 2, name: "Web Design" } },
// //   {
// //     id: 3,
// //     title: "Machine Learning Basics",
// //     category: { id: 1, name: "Programming" },
// //   },
// //   {
// //     id: 4,
// //     title: "Photoshop for Beginners",
// //     category: { id: 2, name: "Web Design" },
// //   },
// // ];

// // const getCategories = (obj) => {
// //   const categories = [];
// //   obj.forEach((course) => {
// //     const category = {
// //       id: course.category.id,
// //       name: course.category.name,
// //       courses: [],
// //     };
// //     if (categories.some((item) => item.id === category.id)) return;
// //     obj.filter((course) => {
// //       if (course.category.id === category.id) {
// //         category.courses.push({ id: course.id, title: course.title });
// //       }
// //     });
// //     categories.push(category);
// //   });

// //   return categories;
// // };

// // console.log(getCategories(courses));
// // /*
// //       [
// //           { id: 1, name: 'Programming', courses: [
// //             { id: 1, title: 'Introduction to JavaScript' },
// //             { id: 3, title: 'Machine Learning Basics' },
// //           ]},
// //           { id: 2, name: 'Web Design', courses: [
// //             { id: 2, title: 'Advanced CSS' },
// //             { id: 4, title: 'Photoshop for Beginners' },
// //           ]},
// //       ]
// //   */

// const products = [
//   { id: 1, name: "Молоко", category: "Еда", price: 60 },
//   { id: 2, name: "Компьютерная мышь", category: "Техника", price: 800 },
//   { id: 3, name: "Хлеб", category: "Еда", price: 40 },
//   { id: 4, name: "Смартфон", category: "Техника", price: 15000 },
//   { id: 5, name: "Чай", category: "Еда", price: 100 },
// ];

// function createCategoryFilter(category) {
//   return function (product) {
//     return product.category === category;
//   };
// }

// function createPriceFilter(maxPrice) {
//   return function (product) {
//     return product.price <= maxPrice;
//   };
// }

// // Функция для применения фильтров к каталогу товаров
// function filterCatalog(products, filters) {
//   return products.filter((product) => {
//     return filters.every((filter) => {
//       return filter(product);
//     });
//   });
// }

// const categoryFilter = createCategoryFilter("Еда");
// const priceFilter = createPriceFilter(50);

// // Применяем фильтры
// const filteredProducts = filterCatalog(products, [categoryFilter, priceFilter]);
// console.log(filteredProducts);
// categoryFilter();




// const myPromise = () => Promise.resolve().then(() => console.log("1"));

// const firstFunction = () => {
//   setTimeout(() => console.log("2"), 0);  // 1 макро
//   myPromise(); // 2 макро
// };

// async function secondFunction() {
//   await new Promise((resolve) => {
//     console.log("3");
//     resolve();
//   });
//   console.log("4");
// }

// console.log("5");
// firstFunction();
// secondFunction();

const booksList = [
  {
    id: 1,
    name: "Преступление и наказание",
    author: "Федор Михайлович Достоевский",
    genre: "драма",
  },
  {
    id: 2,
    name: "Война и мир",
    author: "Лев Николаевич Толстой",
    genre: "роман",
  },
  {
    id: 3,
    name: "Мастер и Маргарита",
    author: "Михаил Афанасьевич Булгаков",
    genre: "фанстастика",
  },
  {
    id: 4,
    name: "Воскресенье",
    author: "Лев Николаевич Толстой",
    genre: "роман",
  },
];

function getBooks(booksList, author = "", genre = "", substring = "") {
  const filteredBooks = booksList.filter((book) => {
    const isAuthor = author ? book.author === author : true;
    const isGenre = genre ? book.genre === genre : true;
    const isSubstring = substring ? book.name.includes(substring) : true;
    return isAuthor && isGenre && isSubstring;
  });
  console.log(filteredBooks);
  return filteredBooks;
}
getBooks(booksList, "Лев Николаевич Толстой", "", "");



// Исходные данные задачи

const hotels = [
  { id: 1, name: 'Luxury Plus', city: { id: 1, name: 'Amsterdam' } },
  { id: 2, name: 'Fairy Beach', city: { id: 2, name: 'Antalya' } },
  { id: 3, name: 'Moscow City Hotel', city: { id: 3, name: 'Moscow' } },
  { id: 4, name: 'Mystic Orange', city: { id: 2, name: 'Antalya' } },
];

const getCities = (hotelsList) => {
return hotelsList.reduce((citiesAcc, hotel) => {
  const existingCity = citiesAcc.find((c) => c.id === hotel.city.id);
  const city = { ...hotel.city };

  if (!existingCity) {
    city.hotels = [];
    city.hotels.push({ id: hotel.id, name: hotel.name });
    citiesAcc.push(city);
  } else {
    existingCity.hotels.push({ id: hotel.id, name: hotel.name });
  }

  return citiesAcc;
}, []);
};

console.log(getCities(hotels)); 