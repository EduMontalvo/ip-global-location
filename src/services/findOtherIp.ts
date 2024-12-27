import axios from "axios"
import { TypeIpDataSchema } from "../schema/fetchIpDataSchema"
/* import { TypeApiSchema } from "../schema/api-schema" */

export const fetchIpData = async (ip: string) => {

    const key = import.meta.env.VITE_API_KEY

    const options = {
        method: 'GET',
        url: `https://api.ipapi.com/${ip}?access_key=${key}`
    }

    try {
        const { data } = await axios.request(options)
        const response = TypeIpDataSchema.safeParse(data)
        if(response.success){
            return response.data
        }
    } catch (error) {
        console.error(error);
    }
}