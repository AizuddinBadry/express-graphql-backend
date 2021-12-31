exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("products").insert([
        { id: 1, name: "AIA PERSONAL", price: 67.0, comission: 10 },
        { id: 2, name: "AXA BUSINESS", price: 44.0, comission: 10 },
        { id: 3, name: "ETIQA ACCIDENT", price: 71.98, comission: 10 },
      ]);
    });
};
