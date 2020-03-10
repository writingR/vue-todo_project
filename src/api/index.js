import axios from 'axios';

// HTTP Request & Response와 관련된 기본 설정
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