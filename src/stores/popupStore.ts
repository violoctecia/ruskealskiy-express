import { create } from 'zustand';

interface PopupStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;

    isGalleryOpen: boolean;
    openGallery: () => void;
    closeGallery: () => void;
}

export const usePopupStore = create<PopupStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),

    isGalleryOpen: false,
    openGallery: () => {
        console.log('opened gallery')
        set({ isGalleryOpen: true })
    },
    closeGallery: () => set({ isGalleryOpen: false }),
}));
