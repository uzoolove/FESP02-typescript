import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useThemeStore = create(persist((set) => ({
  isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false,
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}), {
  name: 'dark-mode',
  storage: createJSONStorage(() => localStorage) // 생략시 기본 localStorage
}));

export default useThemeStore;