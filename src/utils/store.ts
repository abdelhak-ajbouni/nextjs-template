import create from 'zustand'
import { DefaultSession } from "next-auth"

const useStore = create<Store>((set) => ({
  loading: false,
  me: {},
  dark: false,
  setLoading: (loading) => set((state) => ({ ...state, loading })),
  setMe: (me) => set((state) => ({ ...state, me })),
  setDark: (dark) => set((state) => ({ ...state, dark })),
}))

export default useStore;

export type Store = {
  loading: boolean
  me: DefaultSession['user']
  dark: boolean
  setLoading: (loading: boolean) => void
  setMe: (me: DefaultSession['user']) => void
  setDark: (dark: boolean) => void
}