import { create } from "zustand";
import { createIpDataSlice, TypeIpDataSlice } from "./ipDataSlice";
import { devtools } from "zustand/middleware";

export const useAppStore = create<TypeIpDataSlice>()(devtools((...a) => ({
    ...createIpDataSlice(...a)
})))
