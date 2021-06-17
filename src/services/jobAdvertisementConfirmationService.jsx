import axios from "axios";

export default class JobAdvertisementConfirmationService {
    getJobAdvertisementConfimation() {
        return axios.get("http://localhost:8081/api/jobadvertisementconfirmation/getByIsConfirmTrue")
    }
    save(id) {
        return axios.get("http://localhost:8081/api/jobadvertisementconfirmation/toggleConfirmation?id=" + id)
    }
}