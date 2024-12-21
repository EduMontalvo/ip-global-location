import { create } from "zustand";
import { createIpDataSlice, TypeIpDataSlice } from "./ipDataSlice";
import { devtools } from "zustand/middleware";
import { createHistorySlide, TypeHistorySlide } from "./historialSlide";

export const useAppStore = create<TypeIpDataSlice & TypeHistorySlide>()(devtools((...a) => ({
    ...createIpDataSlice(...a),
    ...createHistorySlide(...a)
})))
