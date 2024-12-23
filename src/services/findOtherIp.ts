import axios from "axios"
import { TypeIpDataSchema } from "../schema/fetchIpDataSchema"
/* import { TypeApiSchema } from "../schema/api-schema" */

export const fetchIpData = async (ip: string) => {

    const options = {
        method: 'GET',
        url: `https://api.ipapi.com/${ip}?access_key=fb35470c1a1a509d6d53cb93577adeb2`
    }
    //? 0fbecb1775d6075d3812acb549515ff4 /
    //? 5adbba24a453b279692742b43f4becb3 /
    //? fb35470c1a1a509d6d53cb93577adeb2 /
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