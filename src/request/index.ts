import Taro from '@tarojs/taro'

// 请求拦截器
const requestInterceptor = (chain) => {
    const requestParams = chain.requestParams;

    // 获取请求的url
    const { url } = requestParams
    // 配置基础路径
    const baseUrl = 'http://localhost:9090'
    // 添加基础路径
    if (!(url.startsWith("http://") || url.startsWith("https://"))) {
        requestParams.url = `${baseUrl}${url}`
    }

    return chain.proceed(requestParams)
}

// 添加请求拦截器
Taro.addInterceptor(requestInterceptor)