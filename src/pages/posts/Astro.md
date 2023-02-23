---
layout: '../../layouts/MarkdownPost.astro'
title: '搭建一个有果味的静态博客-Astro'
pubDate: 2023-02-23
description: '搭建一个有果味的静态博客-Astro'
author: 'Apple Newsroom'
cover:
    url: 'https://camo.githubusercontent.com/4451a8e685af1e53e1ca506a951cd9cec5f77f672703d8aac16863e1e2731be0/68747470733a2f2f636f732e6c6f6f6b636f732e636e2f626c6f672f7374617469632f696d616765732f707265766965772f707265766965775f6461726b2e706e673f'
    square: 'https://camo.githubusercontent.com/4451a8e685af1e53e1ca506a951cd9cec5f77f672703d8aac16863e1e2731be0/68747470733a2f2f636f732e6c6f6f6b636f732e636e2f626c6f672f7374617469632f696d616765732f707265766965772f707265766965775f6461726b2e706e673f'
    alt: 'cover'
tags: ["Steve 分享", "Blog", "Astro"]
theme: 'dark'
featured: false
---

## 前言

偶然在推上看到  **Austin aka 驭风** 大佬写的 Astro 博客这个项目,一时间觉得颜值耐打,还有一股熟悉的果味,很不错.想着就自己来搭建一个自己的博客.

## 开始搭建

1.先去大佬的 github 上 Fork 一下该项目.  项目地址: https://github.com/austin2035/astro-air-blog

![img](https://0ttfy-my.sharepoint.com/personal/zhou_steve_0ttfy_onmicrosoft_com/_layouts/15/download.aspx?UniqueId=8d69c1f9-9aa5-46a5-8769-7946f0a27838&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvMHR0ZnktbXkuc2hhcmVwb2ludC5jb21AMjJmNTI3ZjctNWMxZi00N2Y0LTg0NzctZTI1OGExOGJhMmZmIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTY3NzEzNTU4NiIsImV4cCI6IjE2NzcxMzkxODYiLCJlbmRwb2ludHVybCI6ImFKMDcrT1pJNGMwR1ErQjZqelVHaG8xZWlMRTBqNTdsUERPSXZjWnZnWjg9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxNjEiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsImNpZCI6Ik1XVTJZamsxWldZdE1EZ3lPUzAwTjJWbUxXRTNOell0TkRjMk56bGpaRGMyTkRneSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJabUl4TlRnd05EUXRNRFUyT1MwME1ERmhMVGcxWkRJdE1UUTRPRGRoT0RNMU9UWTIiLCJhcHBfZGlzcGxheW5hbWUiOiJhbGlzdCIsImdpdmVuX25hbWUiOiJTdGV2ZSIsImZhbWlseV9uYW1lIjoiWmhvdSIsInNpZ25pbl9zdGF0ZSI6IltcImttc2lcIl0iLCJhcHBpZCI6IjI2MjBiNGJhLTkyNWUtNDg3OC1iYzA2LWNjYWYxMDBkM2ViYSIsInRpZCI6IjIyZjUyN2Y3LTVjMWYtNDdmNC04NDc3LWUyNThhMThiYTJmZiIsInVwbiI6Inpob3Uuc3RldmVAMHR0Znkub25taWNyb3NvZnQuY29tIiwicHVpZCI6IjEwMDMyMDAxRDlCQTM2MUEiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHwxMDAzMjAwMWQ5YmEzNjFhQGxpdmUuY29tIiwic2NwIjoiYWxsZmlsZXMud3JpdGUiLCJ0dCI6IjIiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjpudWxsLCJpcGFkZHIiOiIyMC4xOTAuMTQ0LjE3MCJ9.NzRhSmdjZUdzdHVWdDlKMCtQNWNmNkJMVi81ZjIxQ0VtYVBmLzZOWE9END0&ApiVersion=2.0)

2.把项目名称改为 xxx.github.io 其实 xxx 为你的用户名,如下图,用户名为 zxfccmm 即改为 zxfccmm.github.io 

之后点击创建.

![img](https://0ttfy-my.sharepoint.com/personal/zhou_steve_0ttfy_onmicrosoft_com/_layouts/15/download.aspx?UniqueId=485b8239-a98b-4cd5-8b02-bce31708967d&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvMHR0ZnktbXkuc2hhcmVwb2ludC5jb21AMjJmNTI3ZjctNWMxZi00N2Y0LTg0NzctZTI1OGExOGJhMmZmIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTY3NzEzNTk4MSIsImV4cCI6IjE2NzcxMzk1ODEiLCJlbmRwb2ludHVybCI6ImhoY1hiQ3djelFKZGtOUFByaHQweVV2YnFoS1cxcytNUllSUTU2ZTVEYW89IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxNjEiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsImNpZCI6Ik5UZGxOV1F5TnpRdE5ESmtNaTAwTkRJeExXSTJZell0TVRVNU5HUXpaREpqT1RFdyIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJabUl4TlRnd05EUXRNRFUyT1MwME1ERmhMVGcxWkRJdE1UUTRPRGRoT0RNMU9UWTIiLCJhcHBfZGlzcGxheW5hbWUiOiJhbGlzdCIsImdpdmVuX25hbWUiOiJTdGV2ZSIsImZhbWlseV9uYW1lIjoiWmhvdSIsInNpZ25pbl9zdGF0ZSI6IltcImttc2lcIl0iLCJhcHBpZCI6IjI2MjBiNGJhLTkyNWUtNDg3OC1iYzA2LWNjYWYxMDBkM2ViYSIsInRpZCI6IjIyZjUyN2Y3LTVjMWYtNDdmNC04NDc3LWUyNThhMThiYTJmZiIsInVwbiI6Inpob3Uuc3RldmVAMHR0Znkub25taWNyb3NvZnQuY29tIiwicHVpZCI6IjEwMDMyMDAxRDlCQTM2MUEiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHwxMDAzMjAwMWQ5YmEzNjFhQGxpdmUuY29tIiwic2NwIjoiYWxsZmlsZXMud3JpdGUiLCJ0dCI6IjIiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjpudWxsLCJpcGFkZHIiOiIyMC4xOTAuMTQ0LjE2OSJ9.ZWJxQ3ZWN1Vqa1YxcU1rMEpRakh1TVpsZnl6NHFaTVpraHF3UWgyamZLMD0&ApiVersion=2.0)

3.接着就会到下面这个界面,我们新建一个文件点击 Add file - Create new file 

![img](https://0ttfy-my.sharepoint.com/personal/zhou_steve_0ttfy_onmicrosoft_com/_layouts/15/download.aspx?UniqueId=e52330ba-673f-43b9-a0d5-a2d0356353b7&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvMHR0ZnktbXkuc2hhcmVwb2ludC5jb21AMjJmNTI3ZjctNWMxZi00N2Y0LTg0NzctZTI1OGExOGJhMmZmIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTY3NzEzODQ0NCIsImV4cCI6IjE2NzcxNDIwNDQiLCJlbmRwb2ludHVybCI6Iko0b0dJcWUxU2p5b0pabXJSU2Nvb3dYS2c5UFRMcE9hMnBUSVlCazRxczA9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxNjEiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsImNpZCI6Ik5HWm1aVGt3WkRBdE9XSTJZaTAwWVdFNUxUa3hPRFV0WkdJM1lqazFPVGRpTlRReiIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJabUl4TlRnd05EUXRNRFUyT1MwME1ERmhMVGcxWkRJdE1UUTRPRGRoT0RNMU9UWTIiLCJhcHBfZGlzcGxheW5hbWUiOiJhbGlzdCIsImdpdmVuX25hbWUiOiJTdGV2ZSIsImZhbWlseV9uYW1lIjoiWmhvdSIsInNpZ25pbl9zdGF0ZSI6IltcImttc2lcIl0iLCJhcHBpZCI6IjI2MjBiNGJhLTkyNWUtNDg3OC1iYzA2LWNjYWYxMDBkM2ViYSIsInRpZCI6IjIyZjUyN2Y3LTVjMWYtNDdmNC04NDc3LWUyNThhMThiYTJmZiIsInVwbiI6Inpob3Uuc3RldmVAMHR0Znkub25taWNyb3NvZnQuY29tIiwicHVpZCI6IjEwMDMyMDAxRDlCQTM2MUEiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHwxMDAzMjAwMWQ5YmEzNjFhQGxpdmUuY29tIiwic2NwIjoiYWxsZmlsZXMud3JpdGUiLCJ0dCI6IjIiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjpudWxsLCJpcGFkZHIiOiIyMC4xOTAuMTQ0LjE2OSJ9.c3RhZTNIS1R5R0hNdXhlanFMY2hGMGNjS1BtWWd0OGlYTHFDdldWM2xXND0&ApiVersion=2.0)

在你的项目中的 `.github/workflows/` 目录创建一个新文件 `deploy.yml`，并粘贴以下 YAML 配置信息。

``` .github/workflows/deploy.yml ```

```yml
name: Github Pages Astro CI

on:
  # 每次推送到 `main` 分支时触发这个“工作流程”
  # 如果你使用了别的分支名，请按需将 `main` 替换成你的分支名
  push:
    branches: [ main ]
  # 允许你在 GitHub 上的 Actions 标签中手动触发此“工作流程”
  workflow_dispatch:
  
# 允许 job 克隆 repo 并创建一个 page deployment
permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout your repository using git
        uses: actions/checkout@v3
      - name: Install, build, and upload your site
        uses: withastro/action@v0

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```

4.接着我们点击 Settings - Pages - Source 选择 **Github Actions**

![img](https://0ttfy-my.sharepoint.com/personal/zhou_steve_0ttfy_onmicrosoft_com/_layouts/15/download.aspx?UniqueId=5f6f61fb-0c25-4e55-8182-1ad8907202c3&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvMHR0ZnktbXkuc2hhcmVwb2ludC5jb21AMjJmNTI3ZjctNWMxZi00N2Y0LTg0NzctZTI1OGExOGJhMmZmIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTY3NzEzODQ2NSIsImV4cCI6IjE2NzcxNDIwNjUiLCJlbmRwb2ludHVybCI6IlVWc2xSODgwemlBM1p2THhFMEFqUVdpcFNsY1M4djFWekFrMmpjNWVtdk09IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxNjEiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsImNpZCI6IlkyUTNNamN6TldRdE1EYzRaaTAwTURBNUxUbGtNek10WmpWalpqWmlObUkzT0dReiIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJabUl4TlRnd05EUXRNRFUyT1MwME1ERmhMVGcxWkRJdE1UUTRPRGRoT0RNMU9UWTIiLCJhcHBfZGlzcGxheW5hbWUiOiJhbGlzdCIsImdpdmVuX25hbWUiOiJTdGV2ZSIsImZhbWlseV9uYW1lIjoiWmhvdSIsInNpZ25pbl9zdGF0ZSI6IltcImttc2lcIl0iLCJhcHBpZCI6IjI2MjBiNGJhLTkyNWUtNDg3OC1iYzA2LWNjYWYxMDBkM2ViYSIsInRpZCI6IjIyZjUyN2Y3LTVjMWYtNDdmNC04NDc3LWUyNThhMThiYTJmZiIsInVwbiI6Inpob3Uuc3RldmVAMHR0Znkub25taWNyb3NvZnQuY29tIiwicHVpZCI6IjEwMDMyMDAxRDlCQTM2MUEiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHwxMDAzMjAwMWQ5YmEzNjFhQGxpdmUuY29tIiwic2NwIjoiYWxsZmlsZXMud3JpdGUiLCJ0dCI6IjIiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjpudWxsLCJpcGFkZHIiOiIyMC4xOTAuMTQ0LjE2OSJ9.bVRmdXRIVjNXaDh3MmRua2hEUkNDRC9BcTdyYXNudmYvRkNQbStOWHlERT0&ApiVersion=2.0)

静等一会儿后会出现以下画面,使用 https://zxfccmm.github.io 即可访问博客主页

![img](https://0ttfy-my.sharepoint.com/personal/zhou_steve_0ttfy_onmicrosoft_com/_layouts/15/download.aspx?UniqueId=6cb9edf0-5e6c-499d-8bfd-66748baddd95&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvMHR0ZnktbXkuc2hhcmVwb2ludC5jb21AMjJmNTI3ZjctNWMxZi00N2Y0LTg0NzctZTI1OGExOGJhMmZmIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTY3NzEzODU0MCIsImV4cCI6IjE2NzcxNDIxNDAiLCJlbmRwb2ludHVybCI6Iis1Ymo0aGhJWXdxVU5HbnJhVkdZK0RRem1oeWpJQTJRZ3pHKzd0bUw4K2M9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxNjEiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsImNpZCI6IllUbGtZbVV5TnpVdFpHWXpOQzAwTVRoakxUZzRaRFF0T1dJeU1tRXpabUV6T1dGaSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJabUl4TlRnd05EUXRNRFUyT1MwME1ERmhMVGcxWkRJdE1UUTRPRGRoT0RNMU9UWTIiLCJhcHBfZGlzcGxheW5hbWUiOiJhbGlzdCIsImdpdmVuX25hbWUiOiJTdGV2ZSIsImZhbWlseV9uYW1lIjoiWmhvdSIsInNpZ25pbl9zdGF0ZSI6IltcImttc2lcIl0iLCJhcHBpZCI6IjI2MjBiNGJhLTkyNWUtNDg3OC1iYzA2LWNjYWYxMDBkM2ViYSIsInRpZCI6IjIyZjUyN2Y3LTVjMWYtNDdmNC04NDc3LWUyNThhMThiYTJmZiIsInVwbiI6Inpob3Uuc3RldmVAMHR0Znkub25taWNyb3NvZnQuY29tIiwicHVpZCI6IjEwMDMyMDAxRDlCQTM2MUEiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHwxMDAzMjAwMWQ5YmEzNjFhQGxpdmUuY29tIiwic2NwIjoiYWxsZmlsZXMud3JpdGUiLCJ0dCI6IjIiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjpudWxsLCJpcGFkZHIiOiIyMC4xOTAuMTQ0LjE2OSJ9.UlNXaUFJU2Y0dVREVGxpV1NGa1lTdHBVS01nTm5NMmZEcHNPQnU0R0lwVT0&ApiVersion=2.0)

当然你也可以设置自己的域名,在 Custom domain 里面 设置自己的域名,别忘了在您的域名DNS CNAME 到 

https://zxfccmm.github.io

![img](https://0ttfy-my.sharepoint.com/personal/zhou_steve_0ttfy_onmicrosoft_com/_layouts/15/download.aspx?UniqueId=d1a876b7-ac1d-420e-b3be-56cf49348e37&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvMHR0ZnktbXkuc2hhcmVwb2ludC5jb21AMjJmNTI3ZjctNWMxZi00N2Y0LTg0NzctZTI1OGExOGJhMmZmIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTY3NzEzODYzOCIsImV4cCI6IjE2NzcxNDIyMzgiLCJlbmRwb2ludHVybCI6IjRjRU1YOFE5L1RLN2x1L0NQLzZKQTd2NFVhY0VFcDhjRWltcTZxSDNsOFU9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxNjEiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsImNpZCI6Ik5EVTVNVE01T1RRdE1ERmxZeTAwT1dRd0xXRXdNell0TTJKa1l6VXlPVFUwWTJZMCIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJabUl4TlRnd05EUXRNRFUyT1MwME1ERmhMVGcxWkRJdE1UUTRPRGRoT0RNMU9UWTIiLCJhcHBfZGlzcGxheW5hbWUiOiJhbGlzdCIsImdpdmVuX25hbWUiOiJTdGV2ZSIsImZhbWlseV9uYW1lIjoiWmhvdSIsInNpZ25pbl9zdGF0ZSI6IltcImttc2lcIl0iLCJhcHBpZCI6IjI2MjBiNGJhLTkyNWUtNDg3OC1iYzA2LWNjYWYxMDBkM2ViYSIsInRpZCI6IjIyZjUyN2Y3LTVjMWYtNDdmNC04NDc3LWUyNThhMThiYTJmZiIsInVwbiI6Inpob3Uuc3RldmVAMHR0Znkub25taWNyb3NvZnQuY29tIiwicHVpZCI6IjEwMDMyMDAxRDlCQTM2MUEiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHwxMDAzMjAwMWQ5YmEzNjFhQGxpdmUuY29tIiwic2NwIjoiYWxsZmlsZXMud3JpdGUiLCJ0dCI6IjIiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjpudWxsLCJpcGFkZHIiOiIyMC4xOTAuMTQ0LjE3MSJ9.S0VsWWRyZWNHbDdYNVZEbEY2SThJeDZCTGFaZjIzTWt3M2s4WndSN3NjST0&ApiVersion=2.0)

5.接着我们便可以得到以下的博客主页,他已经是可用的状态了.

## 自定义成你的博客

```
|-- README.md
|-- astro.config.mjs
|-- package.json
|-- public
|   |-- favicon.svg
|   `-- static
|-- src
|   |-- components
|   |   |-- BaseHead.astro // common <head> tags
|   |   |-- Footer.astro
|   |   |-- Header.astro
|   |   `-- Navigation.astro
|   |-- consts.js
|   |-- env.d.ts
|   |-- layouts
|   |   |-- BaseLayout.astro
|   |   |-- MarkdownPost.astro
|   |   |-- MoreTile.astro
|   |   `-- Tile.astro
|   |-- pages
|   |   |-- about.astro
|   |   |-- archive.astro
|   |   |-- index.astro
|   |   |-- posts 
|   |   |   |-- some markdown post.md  // 这里写文章
|   |   |-- rss.xml.js // RSS feed
|   |   `-- tags
|   |       `-- [tag].astro // dynamic route of all posts with a given tag
|   |-- styles
|   |   `-- global.css // global styles
|   `-- utils.js
```



上面是博客的文件结构

### 发布文章

需要在 Posts 上上传 Markdown 文件

### 自定义博客

路径为``zxfccmm/zxfccmm.github.io/tree/main/src)/pages/``

**archive.astro** 我们可以修改文章的标签

**about.astro**  设置您的关于页面

路径为``zxfccmm/zxfccmm.github.io/tree/main/src/consts.js/``

```js
export const SITE_TITLE = `Austin's Blog`;    
export const SITE_DESCRIPTION = 'Austin Site Description';
export const SITE_EMAIL = 'no.sql@qq.com'
export const SITE_NAME = 'astro-blog.qum.cc';
export const SITE_URL = "https://astro-blog.qum.cc";
```

路径为``zxfccmm/zxfccmm.github.io/tree/main/src/components/``

**Footer.astro**  可以修改页脚

到这一步,已经是一个可以用的博客了.









