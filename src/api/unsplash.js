import axios from 'axios';

export default axios.create ({
  baseURL : 'https://api.unsplash.com',
  headers:{
    Authorization: 'Client-ID 0dc4345a07cca528711e16faff67516d0cab6bc9cf80c4982f2ee90d46c2866b'
  }
});
