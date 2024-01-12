export default interface Tweak {
    isEnabled(): boolean,
    enable(): void,
    disable(): void
};