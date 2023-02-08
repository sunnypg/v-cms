let BASE_URL = ''

if (import.meta.env.PROD) {
  // 生产环境
  BASE_URL = 'http://codercba.com:1888/airbnb/api'
} else {
  // 开发环境
  BASE_URL = 'http://codercba.com:1888/airbnb/api'
}

export const TIME_OUT = 5000

export { BASE_URL }
