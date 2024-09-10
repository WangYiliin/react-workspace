export const envConfig = {
  API_URL: process.env.REACT_APP_API_URL || '',
  ASSETS_URL: process.env.REACT_APP_CDN_URL || '',
  ENVIRONMENT: process.env.REACT_APP_NODE_ENV || 'development',
}