export default defineAppConfig({
  pages: [
    'pages/cats/index',
    'pages/board/index',
    'pages/pics/index',
    'pages/about/index',
    'pages/test/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  subPackages: [
    {
      root: 'pages/editInfo',
      pages: ["index"]
    },
    {
      root: 'pages/catDetail',
      pages: ["index"]
    }
  ]
})
