import axios from "axios";

export default class JobAdvertisementService {
    getJobAdvertisement() {
        return axios.get("http://localhost:8081/api/jobadvertisement/getall")
    }
    getEmploymentType() {
        return axios.get("http://localhost:8081/api/employmenttype/getall")
    }
    add(jobAdvertisement) {
        return axios.post("http://localhost:8081/api/jobadvertisement/add", jobAdvertisement)
    }
}