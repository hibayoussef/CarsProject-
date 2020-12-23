import MutationsTypes from '../types/mutations-types';


const mutations = {
  // add car
  [MutationsTypes.ADD_NEW_CAR_MUTATION](state, data) {
    state.loadedCar.push(data);
  },
  // add shMap
  [MutationsTypes.ADD_SHMAP_MUTATION](state , data){
    state.shMap.push(data);
  },
  // get all cars
  [MutationsTypes.GET_ALL_CARS_MUTATION](state , data){
    state.loadedCar = data;
  },
  [MutationsTypes.GET_ALL_CARS_SHMAP_MUTATION](state , data){
    state.loadedItems = data;
  },
  // get un sold cars
  [MutationsTypes.GET_UN_SOLD_CAR_MUTATION](state , data){
    state.unSoldCars = data;
  },
  // purchcase 
   [MutationsTypes.PURCHASE_CAR_MUTATION](state , car){
      let carFromState = state.loadedCar.filter(c => c.id === car.id)[0];
      const idx = state.cars.indexOf(carFromState);
      state.cars[idx] = car;
  },

  [MutationsTypes.DELETE_CAR_MUTATION](state,car){
    let carFromState = state.loadedCar.filter(c => c.id === car.id)[0];
    const idx = state.loadedCar.indexOf(carFromState);
    state.loadedCar.splice(idx,1)
  },

  [MutationsTypes.GET_CAR_BY_SELLING_DATE_MUTATION](state , data){
    state.loadedCar = data
  },
  
  [MutationsTypes.GET_REPORT_MUTATION](state , data){
    // The Data that comes from api in action => I want to put it in reports arrays
    state.reports = data
  },
  [MutationsTypes.CREATE_CAR_WITH_OPTEMISTIC_LOCK](state , data){
    state.cars = data
  },
  [MutationsTypes.EDIT_CAR_MUTATION](state,car){
    const carObj = state.loadedCar.filter(c => c.id=== car.id)[0];
    const idx = state.loadedCar.indexOf(carObj);
    state.loadedCar[idx] = {...car};
  }
};

export default mutations;
