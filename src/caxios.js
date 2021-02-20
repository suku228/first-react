import axios from 'axios'

function caxios() {
    const axiosInstance = axios.create();
    axiosInstance.interceptors.response.use((response) => {
      console.log('usde',response.status)
      if (response.status === 401) {
        console.log("You are not authorized");
        //redirect
      }
      return response;
    });

    axiosInstance.interceptors.request.use((config)=>{
        // if (config.method !== 'OPTIONS')
        config.headers.headwt = 'sukesh'
        return config;
    })
    return axiosInstance
}

export default caxios
