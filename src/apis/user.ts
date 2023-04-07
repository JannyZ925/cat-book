import { post } from "@/utils/request"

export const addOrUpdateUser = (data) => {
    return post("/user/addOrUpdate", data)
}