export const VERSION_KEY = 'vers';
export const TESTAMENT_KEY = 'test';

export function getLocalSettings(key: string) {
    return localStorage.getItem(key);
}

export function setLocalSettings(key: string, value: string) {
    return localStorage.setItem(key, value);
}