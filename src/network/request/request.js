import axios from 'axios'
export function request(config) {

    let instance = axios.create({
        baseURL: "https://cnodejs.org/api/v1",
        timeout: 5000
    });
    //请求拦截
    instance.interceptors.request.use(config => {
        return config;

    }, err => {
        //   console.log('请求失败');  

    })

    // 响应拦截
    instance.interceptors.response.use(config => {
        return config;
    }, err => {
        //   console.log('响应失败');
    })

    return instance(config);

}