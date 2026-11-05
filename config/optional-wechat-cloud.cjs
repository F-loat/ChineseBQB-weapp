// Taro 2 reads the cloud SDK eagerly, including methods this app never calls.
// Some WeChat runtimes expose a lazy getter whose SDK is unavailable.
module.exports = function optionalWechatCloud(source) {
  return source
    .replace('var wxC = wx.cloud || {};', 'var wxC = {}; try { wxC = wx.cloud || {}; } catch (error) {}')
    .replace('wxcloud[v] = wxC[v];', 'try { wxcloud[v] = wxC[v]; } catch (error) {}')
}
