export const getFromLocalStorage = (key:string) => localStorage.getItem(key)

export const setToLocalStorage = (key:string, val:string) => localStorage.setItem(key, val)

export const removeFromLocalStorage = (key:string) => localStorage.removeItem(key)