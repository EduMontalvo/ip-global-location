import { StateCreator } from "zustand"
import { TypeIpResultData } from "../types"

export type TypeHistorySlide = {
    historyArray: TypeIpResultData[]
    existInArrayIpData: (data: TypeIpResultData) => boolean
    addToHistory: (data: TypeIpResultData) => void
}
export const createHistorySlide: StateCreator<TypeHistorySlide> = (set, get) => ({
    historyArray: [],
    existInArrayIpData: (data) => {
        return get().historyArray.some(item => item.ip === data.ip)
    },
    addToHistory: (data) => {
        if (get().existInArrayIpData(data)) {
            console.log('ya se encuentra en el historial');
        } else {
            set((state) => ({
                historyArray: [...state.historyArray, data]
            }))
        }
    }
})