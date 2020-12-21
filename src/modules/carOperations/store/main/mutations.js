import MutationsTypes from '../types/mutations-types';


const mutations = {
  // add car
  [MutationsTypes.ADD_NEW_CAR_MUTATION](state, data) {
    state.loadedCar.push(data);
  },
  // get all cars
  [MutationsTypes.GET_ALL_CARS_MUTATION](state , data){
    state.loadedCar = data;
  },
  // get un sold cars
  [MutationsTypes.GET_UN_SOLD_CAR_MUTATION](state , data){
    state.unSoldCars = data;
  },
  // purchcase 
   [MutationsTypes.PURCHASE_CAR_MUTATION](state , car){
      const carIndex = state.loadedCar.filter(c => c.id === car.id)[0];
      state[carIndex] = car;
  },

  [MutationsTypes.DELETE_CAR_MUTATION](state,data){
    state.loadedCar = data
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
    state[carObj] = car;
  }
};

export default mutations;
