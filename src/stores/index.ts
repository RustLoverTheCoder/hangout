import create from 'zustand'

interface store {
  bears: number
  increasePopulation: () => void
  removeAllBears: () => void
  userProfile: any
  changeUser: (p: any) => void
}

const useStore = create<store>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  userProfile: {},
  changeUser: (data) => set(() => ({ userProfile: data })),
}))

export default useStore
