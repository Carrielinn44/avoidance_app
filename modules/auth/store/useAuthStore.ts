import { create } from "zustand";

const useAuthStore = create((set: (arg0: { user: any; }) => any) => ({
 user: null,
 login: (user: any) => set({ user }),
 logout: () => set({ user: null }),
}));
export default useAuthStore;