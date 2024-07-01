import { action, makeObservable, observable } from "mobx";
import { ITheme } from "./ITheme";
import { RootStore } from "./RootStore";


export class ThemeStore {
    rootStore: RootStore;
    themes: ITheme[] = [
        {
            name: 'classic',
            color: '#0000FF',
            compliment: '#000000',
            background: '#FFFFFF',
            positive: '#00E500',
            negative: '#ED18A4'
        },
        {
            name: 'ultraviolence',
            color: '#00FFFFFF',
            compliment: '#8F00FF90',
            background: '#000000',
            positive: '#00E500',
            negative: '#ED18A4'
        },
        {
            name: 'terra',
            color: '#023020',
            compliment: '#3A1F04',
            background: '#997950',
            positive: '#00E500',
            negative: '#ED18A4'
        }
    ];
    currentTheme: ITheme =  {
        name: 'ultraviolence',
        color: '#00FFFFFF',
        compliment: '#8F00FF90',
        background: '#000000',
        positive: '#00E500',
        negative: '#ED18A4'
    };

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeObservable(this, {
            themes: observable,
            currentTheme: observable
        })
    }

    setCurrentTheme = action((theme: ITheme) => {
        this.currentTheme = theme;
    });
}