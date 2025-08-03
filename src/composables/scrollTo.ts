export const scrollTo = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
        const yOffset = -200; // смещение вверх
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
            top: y,
            behavior: 'smooth',
        });
    }
};
