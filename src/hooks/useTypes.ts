import { useState, useEffect } from '@tarojs/taro'
import newTypes from '../data/types.json'

interface Item {
  name: string;
  fullname: string;
  imgNum: number;
  imgSrc: string;
}

const useTypes = () => {
  const [loading] = useState(false)
  const [types, setTypes] = useState<Item[]>([])

  useEffect(() => {
    fetchTypes()
  }, [])

  const fetchTypes = () => setTypes(newTypes)

  return {
    loading,
    data: types
  }
}

export default useTypes
