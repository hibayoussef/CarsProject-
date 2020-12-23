import Home from "./pages/Home.vue";
import Register from "./pages/Auth/Register.vue";
import Login from "./pages/Auth/login.vue";
import AddCar from './modules/carOperations/pages/addCar.vue';
import ViewAllCars from './modules/carOperations/pages/carsActions/viewAllCars.vue';
import DropDownList from './modules/carOperations/pages/carsActions/dropdownList.vue';
import sharedMap from './modules/carOperations/pages/carsActions/sharedMap.vue';
import EditCar from './modules/carOperations/pages/EditCar.vue';
import CreateshMap from './modules/carOperations/pages/CreateshMap.vue';
import Purchase from './modules/carOperations/pages/carsActions/purchase.vue';


export const routes = [
  { path: '/', redirect: '/home'},
  { path: "/home", name: "Hello", component: Home },
  { path: "/signup", name: "SignUp", component: Register },
  { path: "/signin", name: "SignIn", component: Login },
  { path: "/addcar", name: "AddCar", component: AddCar },
  { path: "/viewallcars", name: "ViewAllCars", component: ViewAllCars },
  { path: "/dropdownlist", name: "dropdownlist", component: DropDownList },
  { path: "/sharedMap", name: "sharedMap", component: sharedMap },
  { path: "/editcar", name: "Edit Car", component: EditCar },
  { path: "/createshMap", name: "Create shMap", component: CreateshMap },
  { path: "/purchase", name: "Purchase", component: Purchase }
]
