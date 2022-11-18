import { useCallback, useEffect } from "react"

type SetLocalStorageValue = (value: string) => void
type GetLocalStorageValue = () => string

const useLocalStorage = (key: string, initialValue?: string): [GetLocalStorageValue, SetLocalStorageValue] => {
  const getLocalStorageValue = useCallback(() => {
    const item = window.localStorage.getItem(key)

    return item ? JSON.parse(item) : ''
  }, [key])

  const setLocalStorageValue = useCallback((value: string) => {
    const item = JSON.stringify(value)

    window.localStorage.setItem(key, item)
  }, [key])

  useEffect(() => {
    if(!initialValue) return

    setLocalStorageValue(initialValue || '')
  }, [initialValue, setLocalStorageValue])

  return [getLocalStorageValue, setLocalStorageValue]
}

export default useLocalStorage
