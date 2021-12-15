import { clear, get, remove, save } from '../src/storage';
declare const Storage: {
    get: typeof get;
    save: typeof save;
    remove: typeof remove;
    clear: typeof clear;
    session: {
        get: (key: string) => string | null;
        save: (key: string, value: string) => void;
        remove: (key: string) => void;
        clear: () => void;
    };
    on: any;
    off: any;
};
export default Storage;
