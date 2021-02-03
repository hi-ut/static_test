const process = {
  env: {
    BASE_URL: location.href.includes('localhost')
      ? 'http://localhost:5500'
      : 'https://www.hi.u-tokyo.ac.jp/dev',
    DATA_URL: location.href.includes('localhost')
      ? 'http://localhost:5500'
      : 'https://hi-ut.github.io/static_test',
  },
}
