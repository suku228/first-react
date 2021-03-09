import axios from 'axios'

    const caxios = axios.create({
        baseURL:'https://jsonplaceholder.typicode.com'
    });
    caxios.interceptors.response.use((response) => {
      console.log('usde',response.status)
      if (response.status === 200)
            alert(".....")
      if (response.status === 401) {
        console.log("You are not authorized");
      }
      return response;
    });

    caxios.interceptors.request.use((config)=>{
        config.headers.headwt = 'bearer_gfr56vyut677fyughgu76tyuguy67'
        return config;
    })


export default caxios
