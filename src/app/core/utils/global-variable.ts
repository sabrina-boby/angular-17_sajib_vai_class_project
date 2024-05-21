import {environment} from '../../../environments/environment';

export const DATABASE_KEY = Object.freeze({
  loginToken: 'SOFTLAB_IT_TOKEN_' + environment.VERSION,
  loggInSession: 'SOFTLAB_IT_SESSION_' + environment.VERSION,
  loginTokenAdmin: 'SOFTLAB_IT_ADMIN_TOKEN_' + environment.VERSION,
  loggInSessionAdmin: 'SOFTLAB_IT_ADMIN_SESSION_' + environment.VERSION,
  encryptAdminLogin: 'SOFTLAB_IT_USER_0_' + environment.VERSION,
  encryptUserLogin: 'SOFTLAB_IT_USER_1_' + environment.VERSION,
  loginAdminRole: 'SOFTLAB_IT_ADMIN_ROLE_' + environment.VERSION,
  cartsProduct: 'SOFTLAB_IT_USER_CART_' + environment.VERSION,
  productFormData: 'SOFTLAB_IT_PRODUCT_FORM_' + environment.VERSION,
  userCart: 'SOFTLAB_IT_USER_CART_' + environment.VERSION,
  recommendedProduct: 'SOFTLAB_IT_RECOMMENDED_PRODUCT_' + environment.VERSION,
  userCoupon: 'SOFTLAB_IT_USER_COUPON_' + environment.VERSION,
  userCookieTerm: 'SOFTLAB_IT_COOKIE_TERM' + environment.VERSION,
});
