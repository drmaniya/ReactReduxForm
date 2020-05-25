import data from './data/data.json';
function datareducers(state = data, action) {
    switch (action.type) {
        case "ADD_DATA":
            let datas = [...state, action.payload];
            return datas;
        default:
            return state;
    }
}
export default datareducers;