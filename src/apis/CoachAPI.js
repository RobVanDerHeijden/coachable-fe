import axios from "axios";

const BASE_URL = "http://localhost:8080/";

export const CoachAPI = {
  get: function () {
    return axios.get(BASE_URL + "coaches", );
  },
};
