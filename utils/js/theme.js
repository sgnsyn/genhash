function applyTheme(mode){
    const root = document.documentElement;

    if (mode === 'dark') {
        root.style.setProperty('--primary-color', 'var(--color-black)');
        root.style.setProperty('--secondary-color', 'var(--color-charcoal)');
        root.style.setProperty('--tertiary-color', 'var(--color-white)');
        root.style.setProperty('--accent-color', 'var(--color-green)');
        root.style.setProperty('--mode-svg', 'url("../assets/light-mode.svg")');
        root.style.setProperty('--copy-svg', 'url("../assets/copy.svg")');
    } else {
        root.style.setProperty('--primary-color', 'var(--color-white)');
        root.style.setProperty('--secondary-color', 'var(--color-ivory)');
        root.style.setProperty('--tertiary-color', 'var(--color-black)');
        root.style.setProperty('--accent-color', 'var(--color-orange)');
        root.style.setProperty('--mode-svg', 'url("../assets/dark-mode.svg")');
        root.style.setProperty('--copy-svg', 'url("../assets/copy-light.svg")');
    }
}

export default applyTheme
