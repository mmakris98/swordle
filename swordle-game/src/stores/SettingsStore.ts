import { action, makeObservable, observable } from "mobx";
import { RootStore } from "./RootStore";
import { TESTAMENT_KEY, VERSION_KEY, getLocalSettings, setLocalSettings } from "src/stores/LocalSettings";

export class SettingsStore {
    rootStore: RootStore;
    version: string = getLocalSettings(VERSION_KEY);
    testament: string = getLocalSettings(TESTAMENT_KEY);

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeObservable(this, {
            version: observable,
            testament: observable,
        })
    }

    setVersion = action((version: string) => {
        this.version = version;
        setLocalSettings(VERSION_KEY, version);
    });

    setTestament = action((testament: string) => {
        this.testament = testament;
        setLocalSettings(TESTAMENT_KEY, testament);
    });
}