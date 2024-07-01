import { configure } from "mobx";
import { GuessStore } from "./GuessStore";
import { ThemeStore } from "./ThemeStore";
import { ModalStore } from "./ModalStore";
import { SettingsStore } from "./SettingsStore";

configure({ enforceActions: 'always'});

export class RootStore {
    guessStore: GuessStore;
    themeStore: ThemeStore;
    modalStore: ModalStore;
    settingsStore: SettingsStore;

    constructor() {
        this.guessStore = new GuessStore(this);
        this.themeStore = new ThemeStore(this);
        this.modalStore = new ModalStore(this);
        this.settingsStore = new SettingsStore(this);
    }
}

export const rootStore = new RootStore();