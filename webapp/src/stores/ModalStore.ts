import { action, makeObservable, observable } from "mobx";
import { RootStore } from "./RootStore";

export class ModalStore {
    rootStore: RootStore;
    open: boolean;
    body: JSX.Element;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeObservable(this, {
            open: observable,
            body: observable,
        })
    }

    closeModal = action(() => {
        this.open = false;
    });

    openModal = action((component: JSX.Element) => {
        this.open = true;
        this.body = component;
    });
}