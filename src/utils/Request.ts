import axios from "axios";

// 1. 创建axios对象
const instance = axios.create({
    baseURL: 'http://localhost:9080/api', // 设置基本的URL，后续的请求会拼接在该URL后面
    timeout: 5000 // 设置超时时间
});

// 2. 添加请求拦截器
instance.interceptors.request.use(
    (config) => {
        // 在发送请求前可以对config进行一些处理，比如添加请求头等
        // 这里可以根据实际需求进行定制制
        return config;
    },
    // 请求失败
    (error: any) => {
        console.log(error);
        return Promise.reject(new Error(error));
    }
);

// 3. 添加响应拦截器
instance.interceptors.response.use(
    (response) => {
        const {data} = response.data;
        if (response.data.code === 200) {
            console.log("成功响应，响应数据：", data);
            return Promise.resolve(response.data);
            // return response.data;
        } else {
            console.error(data.message);
            return Promise.reject(new Error(data.message));
        }
     },
    (error: any) => {
        return Promise.reject(error);
    }
);

export default instance;
