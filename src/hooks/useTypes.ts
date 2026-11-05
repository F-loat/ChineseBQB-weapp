import { useState, useEffect } from '@tarojs/taro'
import { stickerCategories } from '../data/stickers'

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

  const fetchTypes = () => setTypes(stickerCategories)

  return {
    loading,
    data: types
  }
}

export default useTypes
