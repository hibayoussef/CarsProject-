const state = {
  loadedItems:[1,
  'Apricots',
  'Avocado'],
  loadedCar: [],
  unSoldCars:[],
  cars:[],
  reports: [],
  itemsHeaders:[{
   
      text: "Id",
      align: "start",
      sortable: false,
      value: "name",
      class: "red accent-4 white--text",
    },
    {
      text: "key",
      value: "numberofseats",
      class: "red accent-4 white--text",
    },
    { text: "value", value: "date", class: "red accent-4 white--text" },
    { text: "actions", value: "date", class: "red accent-4 white--text" }
  ],
  headers: [
    {
      text: "ID",
      align: "start",
      sortable: true,
      value: "id",
      class: "red accent-4 white--text",
    },
    {
      text: "Car name",
      align: "start",
      sortable: false,
      value: "name",
      class: "red accent-4 white--text",
    },
    { text: "Price", value: "price", class: "red accent-4 white--text" },
    {
      text: "Number of Seats",
      value: "seatsNumber",
      class: "red accent-4 white--text",
    },
    { text: "Date", value: "dateOfSale", class: "red accent-4 white--text" },
    {
      text: "selling price",
      value: "priceOfSale",
      class: "red accent-4 white--text",
    },
    {
      text: "Payer name",
      value: "payerName",
      class: "red accent-4 white--text",
    },
    {
      text: "Actions",
      value: "actions",
      class: "red accent-4 white--text",
    },
  ],
};

export default state;
