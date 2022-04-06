import axios from "axios";
const apiUrl = "http://localhost:4000/api/tasks";

export function getTasks() {
  return axios.get(apiUrl);
}
export function addTask(task) {
  return axios.post(apiUrl, task);
}
export function putTask(id, task) {
  return axios.put(apiUrl + "/" + id, task);
}
export function delTask(id) {
  return axios.delete(apiUrl + "/" + id);
}