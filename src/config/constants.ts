export const PROD_BASE_URL = 'https://link.venger.me'

export const HOST_ICON_PLACEHOLDER = new URL('/assets/host-icon-placeholder.png', PROD_BASE_URL).toString()

export const BASE_URL = process.env.NODE_ENV === 'production' ? PROD_BASE_URL : 'https://link.venger.me/'

export const ICON_FROM_HOST_URL = 'https://unavatar.io/google'

export const LINKS_DATA_KEY = 'links'

export const APP_PAGES = ['/', '/login', '/dashboard']

export const AUTH_PAGES = ['/dashboard']

export const REDIRECT_ON_AUTH_PAGES = ['/login']

export const MAX_PUBLIC_LINKS = 3

export enum FilterQueryParams {
  query = 'query',
}
