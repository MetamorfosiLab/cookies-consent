import type { Cookie } from './cookie.types'
import type { LifecycleType } from './index'

export interface CookieLifecycleParams {
  lifecycle: LifecycleType
  cookie: Cookie
  status?: boolean
  path?: string
}
