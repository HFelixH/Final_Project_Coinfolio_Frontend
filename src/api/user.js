import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

function logout() {
  return axios.delete("http://localhost:3000/api/v1/logout/");
}

function login(formData) {
  return axios.post("http://localhost:3000/api/v1/login/", formData);
}

function signup(formData) {
  return axios.post("http://localhost:3000/api/v1/signup/", formData);
}

function me() {
    return axios.get("http://localhost:3000/api/v1/me/");
}

function updateProfile(formData) {
    return axios.put("http://localhost:3000/api/v1/me/", formData);
}

export { logout, login, signup, me, updateProfile };
