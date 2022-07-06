import axios from "axios";

export async function getNewCountry() {
  console.log('SERVICE: get one country');
  return axios({
    method: "GET",
    url: `http://localhost:8081/getcountry`,
  });
}

export async function getNewCountries() {
  console.log('SERVICE: get countries');
  return axios({
    method: "GET",
    url: `http://localhost:8081/getcountries`,
  });
}

export async function getUserData() {
  console.log('SERVICE: get user');
  return axios({
    method: "GET",
    url: `http://localhost:8081/getuserdata`,
  });
}

export async function addCountry(country) {
  console.log('SERVICE: add country');
  return axios({
    method: "POST",
    url: "http://localhost:8081/addcountry",
    data: country,
  });
}
