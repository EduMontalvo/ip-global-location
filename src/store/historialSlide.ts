import { StateCreator } from "zustand"
import { TypeIpResultData } from "../types"

export type TypeHistorySlide = {
    historyArray: TypeIpResultData[]
    deleteItemMessage: boolean
    repeatItemMessage: boolean
    AddItemMessage: boolean
    existInArrayIpData: (data: TypeIpResultData) => boolean
    addToHistory: (data: TypeIpResultData) => void
    deleteFromHistory: (data: TypeIpResultData) => void
}
export const createHistorySlide: StateCreator<TypeHistorySlide> = (set, get) => ({
    historyArray: [],
    deleteItemMessage: false,
    repeatItemMessage: false,
    AddItemMessage: false,
    existInArrayIpData: (data) => {
        return get().historyArray.some(item => item.ip === data.ip)
    },
    addToHistory: (data) => {
        if (get().existInArrayIpData(data)) {
            set({
                repeatItemMessage: true,
            }),
            setTimeout(() => {
                set({
                    repeatItemMessage: false
                })
            }, 1200);
        } else {
            set((state) => ({
                historyArray: [...state.historyArray, data],
                /* AddItemMessage: true */
            })),
            set({
                AddItemMessage:true
            }),
            setTimeout(() => {
                set({
                    AddItemMessage:false
                })
            }, 1200);
        }
    },
    deleteFromHistory: (data) => {
        const newHistoryArray = get().historyArray.filter(item => item.ip !== data.ip)
        set({
            historyArray: newHistoryArray,
            deleteItemMessage: true
        }),
        setTimeout(() => {
            set({
                deleteItemMessage:false
            })
        }, 1200);
    }
})