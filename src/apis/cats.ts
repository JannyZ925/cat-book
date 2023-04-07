import { get, post } from "@/utils/request"

// 获取所有的猫咪数据
export const getCatList = (data) => {
    return post("/cat/list", data)
}

// 根据id获取猫咪的信息和照片
export const getCatInfoAndPicsById = (id) => {
    return get(`/cat/pics/${id}`, id)
}