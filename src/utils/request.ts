import Taro from "@tarojs/taro";

type Method = "GET" | "POST" | "PUT" | "DELETE";

const defaultMethod: Method = "GET";

export const request = (url, method: Method = defaultMethod, data: Object) => {
  return new Promise((resolve, reject) =>
    Taro.request({
      url,
      method,
      data,
      header: {
        "cookie": `JSESSIONID=${Taro.getStorageSync("sessionId")}`,
        "content-type": "application/json",
      },
      success: (res) => {
        resolve(res.data);
      },
    })
  );
};

export const get = (url, data): Promise<any> => {
  return request(url, "GET", data);
};

export const post = (url, data): Promise<any> => {
  return request(url, "POST", data);
};

export const put = (url, data): Promise<any> => {
  return request(url, "PUT", data);
};

export const del = (url, data): Promise<any> => {
  return request(url, "DELETE", data);
};
