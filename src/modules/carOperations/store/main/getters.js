import GettersTypes from '../types/getters-types'

const getters = {
    [GettersTypes.GET_CAR_FORM_GETTER](state) {
        return state.loadedCar;
    },
    [GettersTypes.GET_HEADERS_TABLE_GETTER](state){
        return state.headers;
    },
    [GettersTypes.GET_CARS_GETTERS](state){
        return state.loadedCar;
    },
    [GettersTypes.GET_HEADERS_ITEMS_GETTER](state){
        return state.itemsHeaders;
    },
    [GettersTypes.GET_ITEMS_FORM_GETTER](state){
       return state.loadedItems;
    },
    [GettersTypes.GET_UN_SOLD_CARS_GETTER](state){
        return state.unSoldCars; 
    }
}
 
export default getters;