# ChineseBQB-client

> 中国表情包大集合客户端

## 运行

* 克隆仓库

``` sh
git clone https://github.com/F-loat/ChineseBQB-client.git
```

* 安装依赖

``` sh
# 安装 CLI
npm install -g @tarojs/cli

# 安装项目依赖
npm install
```

* 执行构建（开发模式）

``` sh
npm run dev:weapp
```

* 预览效果

> 使用微信开发者工具导入项目，并将 AppID 清除

## 说明

* 本项目使用 [Taro](https://github.com/NervJS/taro) 框架开发

* 图片资源来自 [ChineseBQB](https://github.com/zhaoolee/ChineseBQB) 项目

* 由于小程序无法直接访问 GitHub，所以通过 Nginx 做了一层代理

```
server {
  listen      443 ssl;
  server_name proxy.youngon.com.cn;
  
  location / {
    root   /usr/share/nginx/html;
    index  index.html index.htm;
  }

  location /github/api/ {
    proxy_pass https://api.github.com/;
  }

  location /github/raw/ {
    proxy_pass https://raw.githubusercontent.com/;
  }

  ssl_certificate /etc/nginx/keys/proxy.youngon.com.cn.crt;
  ssl_certificate_key /etc/nginx/keys/proxy.youngon.com.cn.key;
}
```

## 截图

<p style="vertical-align: center">
  <img alt="首页" src="./screenshots/index.jpg" width="33%" />
  <img alt="小程序码" src="./screenshots/qrcode.jpg" width="33%" />
  <img alt="列表" src="./screenshots/list.jpg" width="33%" />
  <img alt="预览" src="./screenshots/preview.jpg" width="33%" />
  <img alt="关于" src="./screenshots/about.jpg" width="33%" />
  <img alt="分享" src="./screenshots/share.jpg" width="33%" />
</p>