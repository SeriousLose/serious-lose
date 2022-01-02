declare const Storage: {
  get: (key: string) => string | null;
  save: (key: string, value: string, time: number) => void;
  remove: (key: string) => void;
  clear: () => void;
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
