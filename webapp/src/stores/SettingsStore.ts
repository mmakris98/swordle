import { action, makeObservable, observable } from "mobx";
import { RootStore } from "./RootStore";

export class SettingsStore {
    rootStore: RootStore;
    version: string = 'ESV';
    testament: string = 'Both';

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeObservable(this, {
            version: observable,
            testament: observable,
        })
    }

    setVersion = action((version: string) => {
        this.version = version;
    });

    setTestament = action((testament: string) => {
        this.testament = testament;
    });
}