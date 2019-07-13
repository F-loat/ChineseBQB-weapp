import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import BQBImage from '../../components/bqb-image'
import './index.less'

interface ImageItem {
  src: string,
  name?: string,
}

interface State {
  images: Array<ImageItem>,
  urls: Array<string>
}

interface Props { }

export default class Index extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      urls: []
    }
  }

  config: Config = {
    navigationBarTitleText: '中国表情包',
    enablePullDownRefresh: true
  }

  fetchImages = async () => {
    Taro.showLoading({ title: '加载中' })

    const { name } = this.$router.params

    const { data } = await Taro.request({
      url: `https://proxy.youngon.com.cn/github/raw/zhaoolee/ChineseBQB/master/${name}/index.md`,
      mode: 'cors'
    })

    const tagMatchReg = /\!\[.*\]/g
    const imgTags = data && data.match(tagMatchReg)

    const infoMatchReg = /\!\[(.*master\/.*\/(.*))\]/
    const images: Array<ImageItem> = imgTags.map(item => {
      const matchInfos: Array<string> = item.match(infoMatchReg)

      if (!matchInfos) {
        return null
      }

      return {
        src: matchInfos[1],
        name: matchInfos[2].replace(/\..*$/, '')
      }
    })
    .filter(item => !!item)

    const urls = images.map(img => img.src)

    this.setState({ images, urls })

    Taro.hideLoading()
  }

  handlePreview = (src) => {
    Taro.previewImage({
      urls: this.state.urls,
      current: src
    })
  }

  componentDidMount() {
    const { title } = this.$router.params
    if (title) {
      Taro.setNavigationBarTitle({ title })
    }
    this.fetchImages()
  }

  async onPullDownRefresh() {
    await this.fetchImages()
    Taro.stopPullDownRefresh()
  }

  onShareAppMessage() {
    return {
      title: this.$router.params.title
    }
  }

  render() {
    const { images = [] } = this.state
    return (
      <View className='list'>
        {images.map(img => (<View className="item" key={img.src}>
          <BQBImage
            src={img.src}
            onClick={() => this.handlePreview(img.src)}
          />
          <Text className="item-name">{img.name}</Text>
        </View>))}
      </View>
    )
  }
}
