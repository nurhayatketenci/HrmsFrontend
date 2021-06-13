import axios from "axios"
export default class CityService {
    getCity() {
        return axios.get("http://localhost:8081/api/cities/getall")
    }
}