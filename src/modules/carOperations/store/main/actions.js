import CarsService from '../../services/cars.service';
import ActionsTypes from '../types/actions-types';
import MutationsTypes from '../types/mutations-types';


const actions = {


    // car actions to add new car
    async [ActionsTypes.ADD_NEW_CAR_ACTION]( {commit} , car)
    {
        const carService = new CarsService();
        const reply = await carService.sendRquestToCreateNewCar({car});
        console.log(reply);
        if(reply){
            commit(MutationsTypes.ADD_NEW_CAR_MUTATION , reply.data);
        }
    },

    
    // purchase
    async [ActionsTypes.PURCHASE_CAR_ACTION](_ , car){
        const carService = new CarsService();
        const reply = await carService.purchaseCar(car);
        if(reply.data){
            return true;
        }
        return false;
    },

    // Create shMap 
    async [ActionsTypes.ADD_CRAETE_SHARED_MAP_ACTION]({ commit } , {key , value}){
        const carService = new CarsService();
        const reply = await carService.createshMap(key , value);
        if(reply){
            commit(MutationsTypes.ADD_SHMAP_MUTATION , reply.data)
        }
    },


    // caching
    async [ActionsTypes.EVICT_CACHING_ACTION](){
        const carService = new CarsService();
        const reply = await carService.evictCaching();
        console.log(reply);
        if(reply && reply.data){
            return true;
        }
        return false;

    },
    // get all cars shMap 
    async [ActionsTypes.GET_ALL_CARS_SHMAP_ACTION]({ commit }){
            const carService = new CarsService();
            const reply = await carService.getCarShMap();
            if(reply){
                commit(MutationsTypes.GET_ALL_CARS_SHMAP_MUTATION , reply.data)
            }

    },
    // Get All Cars action 
    async [ActionsTypes.GET_ALL_CAR_ACTION] ({commit}){
        const carsService = new CarsService();
        const reply = await carsService.viewAllCars();
        if(reply){
            commit(MutationsTypes.GET_ALL_CARS_MUTATION , reply.data)
        } 
    },

    // Get All un_sold Cars action 
    async [ActionsTypes.GET_UN_SOLD_CAR_ACTION] ({commit}){
        const carsService = new CarsService();
        const reply = await carsService.getunsoldCar();
        if(reply){
            commit(MutationsTypes.GET_UN_SOLD_CAR_MUTATION , reply.data)
        } 
        // console.log('get all car action:',reply.data);
    },

    async [ActionsTypes.PURCHASE_CAR_ACTION] ({ commit } , car) {
        const carService = new CarsService();
        const reply = await carService.purchaseCar(car);
        console.log(reply.data);
        if(reply) {
             commit(MutationsTypes.PURCHASE_CAR_MUTATION ,reply.data)
        }
    }, 


    // delete Car action 
    async [ActionsTypes.DELETE_CAR_ACTION] ({ commit } , carId){
        const carService = new CarsService();
        const reply = await carService.deleteCar(carId);
        console.log(reply.data);
        if(reply && reply.data){
            commit(MutationsTypes.DELETE_CAR_MUTATION , carId)
            return true;
        }
    },


    async [ActionsTypes.GET_CAR_BY_SELLING_DATE_ACTION]({ commit } , sellingDate){
        const carService = new CarsService();
        const reply = await carService.getCarbySellingDate({ sellingDate });
        if(reply){
            commit(MutationsTypes.GET_CAR_BY_SELLING_DATE_MUTATION , reply.data.data)
        }
    }, 

    async [ActionsTypes.GET_REPORT_ACTION]({ commit }){
        const carService = new CarsService();
        const reply = await carService.generateReport();
        if(reply){
            commit(MutationsTypes.GET_REPORT_MUTATION , reply.data.report)
        }
    },
    // Edit Car's Information action
    async [ActionsTypes.EDIT_CAR_ACTION]({commit}, car) {
       const carService = new CarsService();
       const reply = await carService.editCar(car);
       console.log(reply);
       if(reply.data){
           commit(MutationsTypes.EDIT_CAR_MUTATION , reply.data)
       }
      },

   
}


export default actions;
