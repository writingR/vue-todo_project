import axios from 'axios';

const config = {
  baseUrl: 'https://jsonplaceholder.typicode.com'
}

// API 함수
function fetchTodoList() {
  return axios.get(`${config.baseUrl}/posts`);
}



export {
  fetchTodoList
}
