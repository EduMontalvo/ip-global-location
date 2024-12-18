import axios from "axios";
import { TypeIpDefaultSchema } from "../schema/fetchIpDefaultSchema";

export const fetchIpDefault = async () => {
    try {
        const {data} = await axios('https://api.ipify.org?format=json')
        const response = TypeIpDefaultSchema.safeParse(data)
        if(response.success) {
            return response.data.ip
        }
    } catch (error) {
        console.error(error)
    }

}