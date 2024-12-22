import { StateCreator } from "zustand"
import { fetchIpDefault } from "../services/findMyIp"
import { fetchIpData } from "../services/findOtherIp"
import { TypeIpResultData } from "../types"

export type TypeIpDataSlice = {
    ip:string
    resultIpData: TypeIpResultData
    visibility: boolean
    stateInput: boolean
    disableButton: boolean
    setIp: () => Promise<void>
    isSameIp: () => void
    searchIpData: (ip:string) => Promise<void>
    activeInput: () => void
}

export const createIpDataSlice:StateCreator<TypeIpDataSlice> = (set) => ({
    ip: '',
    resultIpData: {} as TypeIpResultData,
    visibility: false,
    stateInput:false,
    disableButton: false,
    setIp: async () => {
        const ip = await fetchIpDefault()
        set({
            ip
        })
    },
    isSameIp: () => {
        set({
            disableButton: true
        })
    },
    searchIpData: async (ip) =>{
        const resultIpData = await fetchIpData(ip)
        set({
            resultIpData,
            visibility : true
        })
    },
    activeInput: () => {
        set({
            stateInput:true
        })
    }
})