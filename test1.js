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


