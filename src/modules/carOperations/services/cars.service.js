import api from "../../../axiosWithDelimiterFile";
import CarsConfigurations from "./configuration";

export default class CarsService {
  // Create new Car 
  sendRquestToCreateNewCar(car) {
    console.log('the car informations in the car services:' , car)
    return api.post(CarsConfigurations.CREATE_CAR_URL, { car });
  }


  createshMap(key , value){
    return api.post(CarsConfigurations.ADD_SHARED_PARAM_URL,{key , value})
  }

  // Caching
  evictCaching() {
    return api.post(CarsConfigurations.EVICT_CACHING_URL);
  }

  // get all cars shMap 
  getCarShMap(){
    return api.get(CarsConfigurations.GET_SHARED_MAP_URL);
  }
  // get Cars 
  viewAllCars(){
    return api.get(CarsConfigurations.GETTING_CAR_INFO_URL);
  }

  // get car that un sold
  getunsoldCar(){
    return api.get(CarsConfigurations.GET_CAR_UN_SOLD_URL);
  }
  
  //purchase car action 
  purchaseCar(car){
    return api.put(CarsConfigurations.PUT_PURCHASE_CAR_URL(car.id) , { payerName: car.payerName , priceOfSale: car.priceOfSale })
  }

  // edit car service
  editCar(car){
    return api.post(CarsConfigurations.EDIT_CAR_INFORMATION_URL , {car})
  }


  cachingservice(){
    return api.delete(CarsConfigurations.CACHING_URL)
  }

  // delete car service 
  deleteCar(carId){
    return api.delete(CarsConfigurations.DELETE_CAR_URL(carId))
  }
  // const key = this.key;
  // const value = this.value
  // this,action({key, value}) // .vue
  // servicesss.addASharedParam(payload.key, payload.value); // action
  // addSharedParam(key, value) {
  //   return api.put(CarsConfigurations.ADD_SHARED_PARAM_URL(key, value));
  // }

  // get car by selling Date 
  getCarbySellingDate(sellingDate){
    return api.get(CarsConfigurations.GET_CAR_BY_SELLING_DATE_URL , {sellingDate})
  }


  // generate report 
  generateReport(){
    return api.get(CarsConfigurations.GET_REPORT_URL)
  }


  createcarwithoptimisticlok(id , name , price, version){
    return api.post(CarsConfigurations.POST_CARS_WITH_OPTIMISTIC_LOCK , {id , name , price, version} )
  }
}
