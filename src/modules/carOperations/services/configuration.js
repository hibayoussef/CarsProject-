
const CarsConfigurations = {
    CREATE_CAR_URL: `api/services/cars/create` , 
    GETTING_CAR_INFO_URL: `api/services/cars` , 
    GET_CAR_UN_SOLD_URL: `api/services/cars/un-sold`,
   
    GET_SHARED_MAP_URL: `api/services/sharedMap`,
    DELETE_CAR_URL: id => `api/services/cars/del/${id}` , 
    GET_CAR_BY_SELLING_DATE_URL: sellingDate => `api/services/cars/selling-date/${sellingDate}`,
    GET_REPORT_URL: `api/services/cars/report`,
    EDIT_CAR_INFORMATION_URL: id => `api/services/cars/${id}` , 
    POST_CARS_WITH_OPTIMISTIC_LOCK:`api/services/cars/create/with-optimistic-lock`,
    EVICT_CACHING_URL: `api/services/cars/evict-caching`,
    ADD_SHARED_PARAM_URL: (key, value) => `api/services/sharedMap/?key=${key}&value=${value}`,
    PUT_PURCHASE_CAR_URL: id => `api/services/cars/purchase/${id}`
}


export default CarsConfigurations;
 