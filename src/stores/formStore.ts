import { create } from 'zustand';

type UserState = {
  name: string;
  surname: string;
  phone: string;
  checkbox: boolean;
  setName: (name: string) => void;
  setSurname: (surname: string) => void;
  setPhone: (phone: string) => void;
  setCheckbox: (checked: boolean) => void;
};

export const useUserStore = create<UserState>((set) => ({
  name: '',
  surname: '',
  phone: '',
  checkbox: false,
  setName: (name) => set({ name }),
  setSurname: (surname) => set({ surname }),
  setPhone: (phone) => set({ phone }),
  setCheckbox: (checked) => set({ checkbox: checked }),
}));
