import { create } from 'zustand';

interface PopupStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

export const usePopupStore = create<PopupStore>((set) => ({
    isOpen: false,
    open: () => {
        set({ isOpen: true });
    },
    close: () => set({ isOpen: false }),
}));
