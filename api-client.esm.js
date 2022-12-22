import axios from 'axios';
import { stringify } from 'query-string';

const isApiError = (statusCode) => {
  if (statusCode != 408 && statusCode.toString().startsWith("4") || statusCode == 500) {
    return true;
  }
  return false;
};
const extractApiErrorStatusCode = (error) => {
  return error.response && error.response.status || guessTheStatusCodeFromTheMessage(error.message);
};
const guessTheStatusCodeFromTheMessage = (message) => {
  if (typeof message === "string" && message.startsWith("timeout of")) {
    return 408;
  }
  if (typeof message === "string" && message.startsWith("Network Error")) {
    return 0;
  }
  return 500;
};
const extractApiErrorMessage = (error) => {
  return error.response?.data?.errors || [];
};
const extractNotApiErrorMessage = (error) => [
  {
    detail: error.message,
    status: "",
    code: "",
    title: "",
    meta: {},
    source: {}
  }
];
async function errorInterceptor(error) {
  const statusCode = extractApiErrorStatusCode(error);
  const clientApiError = {
    messages: isApiError(statusCode) ? extractApiErrorMessage(error) : extractNotApiErrorMessage(error),
    statusCode
  };
  return Promise.reject(clientApiError);
}

function extractContextToken(response) {
  return response.data["sw-context-token"] || response.data["contextToken"] || response.headers["sw-context-token"];
}

function createResponseInterceptor(update) {
  return function(response) {
    const contextToken = extractContextToken(response);
    contextToken && update({ contextToken }, response.config);
    return response;
  };
}

const defaultConfig = {
  endpoint: "https://pwa-demo-api.shopware.com/prev/",
  accessToken: "SWSC40-LJTNO6COUEN7CJMXKLA",
  contextToken: "",
  languageId: "",
  defaultPaginationLimit: 10,
  timeout: 1e4
};

const ARRAY_FORMAT = "separator";
const ARRAY_FORMAT_SEPARATOR = "|";
const SKIP_NULL = true;
const SORT = false;
const getQueryString = (params) => typeof params === "string" ? params : stringify(params, {
  arrayFormat: ARRAY_FORMAT,
  arrayFormatSeparator: ARRAY_FORMAT_SEPARATOR,
  skipNull: SKIP_NULL,
  sort: SORT
});

function _createInstance(initialConfig = {}) {
  const callbackMethods = [];
  let clientConfig = {};
  const apiService = axios.create();
  function reloadConfiguration() {
    apiService.defaults.baseURL = clientConfig.endpoint;
    if (clientConfig.timeout) {
      apiService.defaults.timeout = typeof clientConfig.timeout === "number" && clientConfig.timeout || typeof clientConfig.timeout === "string" && parseInt(clientConfig.timeout) || 0;
    }
    apiService.defaults.headers.common["sw-include-seo-urls"] = "true";
    apiService.defaults.headers.common["sw-access-key"] = clientConfig.accessToken;
    apiService.defaults.paramsSerializer = getQueryString;
    if (clientConfig.contextToken) {
      apiService.defaults.headers.common["sw-context-token"] = clientConfig.contextToken;
    } else {
      delete apiService.defaults.headers.common["sw-context-token"];
    }
    if (clientConfig.languageId) {
      apiService.defaults.headers.common["sw-language-id"] = clientConfig.languageId;
    } else {
      delete apiService.defaults.headers.common["sw-language-id"];
    }
  }
  function onConfigChange(fn) {
    callbackMethods.push(fn);
  }
  const setup = function(config = {}) {
    clientConfig = Object.assign(clientConfig, defaultConfig, config);
    reloadConfiguration();
  };
  setup(initialConfig);
  const update = function(config, responseConfig) {
    clientConfig = Object.assign(clientConfig, config);
    if (process.env.NODE_ENV !== "production" && !callbackMethods.length && responseConfig) {
      console.warn(
        `[shopware-6-api] After calling API method ${responseConfig.url} there is no "onConfigChange" listener. See https://shopware-pwa-docs.vuestorefront.io/landing/fundamentals/security.html#context-awareness`
      );
    }
    callbackMethods.forEach((fn) => fn({ config: clientConfig }));
    reloadConfiguration();
  };
  const invoke = {
    post: apiService.post,
    put: apiService.put,
    get: apiService.get,
    patch: apiService.patch,
    delete: apiService.delete
  };
  apiService.interceptors.response.use(
    createResponseInterceptor(update),
    errorInterceptor
  );
  return {
    onConfigChange,
    config: clientConfig,
    setup,
    update,
    invoke,
    defaults: apiService.defaults,
    _axiosInstance: apiService
  };
}
function createInstance(initialConfig = {}) {
  const {
    onConfigChange,
    config,
    setup,
    update,
    invoke,
    defaults,
    _axiosInstance
  } = _createInstance(initialConfig);
  return {
    onConfigChange,
    config,
    setup,
    update: (config2 = {}) => {
      update(config2);
    },
    invoke,
    defaults,
    _axiosInstance
  };
}
const defaultInstance = createInstance();

const getCategoryEndpoint = () => `/store-api/category`;
const getCategoryDetailsEndpoint = (categoryId) => `/store-api/category/${categoryId}`;
const getLandingPageDetailsEndpoint = (landingPageId) => `/store-api/landing-page/${landingPageId}`;
const getProductListingEndpoint = (categoryId) => `/store-api/product-listing/${categoryId}`;
const getProductEndpoint = () => `/store-api/product`;
const getProductDetailsEndpoint = (productId) => `/store-api/product/${productId}`;
const getProductReviewsEndpoint = (productId) => `/store-api/product/${productId}/reviews`;
const getSuggestSearchEndpoint = () => `/store-api/search-suggest`;
const getSearchEndpoint = () => `/store-api/search`;
const getCustomerAddAddressEndpoint = () => `/store-api/account/address`;
const getCustomerAddressEndpoint = (addressId) => addressId ? `/store-api/account/address/${addressId}` : "/store-api/account/list-address";
const getCustomerDefaultAddressEndpoint = (type, addressId) => `/store-api/account/address/default-${type}/${addressId}`;
const getCustomerDefaultBillingAddressEndpoint = (addressId) => getCustomerDefaultAddressEndpoint("billing", addressId);
const getCustomerDefaultShippingAddressEndpoint = (addressId) => getCustomerDefaultAddressEndpoint("shipping", addressId);
const getCustomerEndpoint = () => `/store-api/account/customer`;
const getCustomerRegisterEndpoint = () => `/store-api/account/register`;
const getCustomerDetailsUpdateEndpoint = () => `/store-api/account/change-profile`;
const getCustomerLoginEndpoint = () => `/store-api/account/login`;
const getCustomerLogoutEndpoint = () => `/store-api/account/logout`;
const getCustomerOrderEndpoint = () => `/store-api/order`;
const getCustomerUpdateEmailEndpoint = () => `/store-api/account/change-email`;
const getCustomerUpdatePasswordEndpoint = () => `/store-api/account/change-password`;
const getCustomerResetPasswordEndpoint = () => `/store-api/account/recovery-password`;
const getConfirmPasswordResetEndpoint = () => `/store-api/account/recovery-password-confirm`;
const getCustomerAccountConfirmEndpoint = () => `/store-api/account/register-confirm`;
const getCustomerUpdatePaymentMethodEndpoint = (paymentMethodId) => `/store-api/account/change-payment-method/${paymentMethodId}`;
const getCheckoutCartEndpoint = () => `/store-api/checkout/cart`;
const getCheckoutCartLineItemEndpoint = () => `/store-api/checkout/cart/line-item`;
const getCheckoutOrderEndpoint = () => `/store-api/checkout/order`;
const getCancelOrderEndpoint = () => `/store-api/order/state/cancel`;
const getChangeOrderPaymentMethodEndpoint = () => `/store-api/order/payment`;
const getContextEndpoint = () => `/store-api/context`;
const getContextCurrencyEndpoint = () => `/store-api/currency`;
const getContextLanguageEndpoint = () => `/store-api/language`;
const getContextCountryEndpoint = () => `/store-api/country`;
const getContextPaymentMethodEndpoint = () => `/store-api/payment-method`;
const getContextShippingMethodEndpoint = () => `/store-api/shipping-method`;
const getContextSalutationEndpoint = () => `/store-api/salutation`;
const getNewsletterSubscribeEndpoint = () => `/newsletter/subscribe`;
const getNewsletterUnsubscribeEndpoint = () => `/newsletter/unsubscribe`;
const getNewsletterRecipientEndpoint = () => `/store-api/account/newsletter-recipient`;
const getPageResolverEndpoint = () => `/store-api/pwa/page`;
const getSeoUrlEndpoint = () => "/store-api/seo-url";
const getStoreNavigationEndpoint = (requestActiveId, requestRootId) => `/store-api/navigation/${requestActiveId}/${requestRootId}`;
const getContactFormEndpoint = () => `/store-api/contact-form`;
const handlePaymentEndpoint = () => `/store-api/handle-payment`;
const getStoreNewsletterSubscribeEndpoint = () => `/store-api/newsletter/subscribe`;
const getStoreNewsletterConfirmEndpoint = () => `/store-api/newsletter/confirm`;
const getStoreNewsletterUnsubscribeEndpoint = () => `/store-api/newsletter/unsubscribe`;
const getGetWishlistProductsEndpoint = () => `/store-api/customer/wishlist`;
const getAddWishlistProductEndpoint = (productId) => `/store-api/customer/wishlist/add/${productId}`;
const getRemoveWishlistProductEndpoint = (productId) => `/store-api/customer/wishlist/delete/${productId}`;
const getMergeWishlistProductsEndpoint = () => `/store-api/customer/wishlist/merge`;

async function getCategories(searchCriteria, contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.post(
    getCategoryEndpoint(),
    searchCriteria
  );
  return resp.data;
}
async function getCategory(categoryId, contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.get(
    getCategoryDetailsEndpoint(categoryId)
  );
  return resp.data;
}

async function getProducts(criteria, contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.post(`${getProductEndpoint()}`, {
    ...criteria || {}
  });
  return resp.data;
}
async function getCategoryProducts(categoryId, criteria, contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.post(
    `${getProductListingEndpoint(categoryId)}`,
    criteria
  );
  return resp.data;
}
async function getProduct(productId, params = null, contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.post(
    getProductDetailsEndpoint(productId),
    params
  );
  return resp.data;
}
async function addProductReview(productId, productReviewData, contextInstance = defaultInstance) {
  await contextInstance.invoke.post(
    `${getProductDetailsEndpoint(productId)}/review`,
    productReviewData
  );
}
async function getProductReviews(productId, criteria, contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.post(
    `${getProductReviewsEndpoint(productId)}`,
    {
      ...criteria || {}
    }
  );
  return resp.data;
}

async function register(params, contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.post(
    getCustomerRegisterEndpoint(),
    params
  );
  return resp.data;
}
async function login({ username, password } = {}, contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.post(getCustomerLoginEndpoint(), {
    username,
    password
  });
  const contextToken = resp.data["sw-context-token"] || resp.data["contextToken"];
  return { contextToken };
}
async function logout(contextInstance = defaultInstance) {
  await contextInstance.invoke.post(getCustomerLogoutEndpoint());
}
async function getCustomer(parameters = {}, contextInstance = defaultInstance) {
  try {
    const resp = await contextInstance.invoke.post(
      getCustomerEndpoint(),
      parameters
    );
    return resp.data;
  } catch (e) {
    const err = e;
    if (err.statusCode === 403)
      return null;
    throw new Error("Unexpected getCustomerResponse. " + err);
  }
}
async function getCustomerAddresses(parameters = {}, contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.post(
    getCustomerAddressEndpoint(),
    parameters
  );
  return resp.data;
}
async function getCustomerOrders(parameters = {}, contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.post(
    getCustomerOrderEndpoint(),
    parameters
  );
  return resp.data.orders;
}
async function getCustomerAddress(addressId, contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.get(
    getCustomerAddressEndpoint(addressId)
  );
  return resp.data.data;
}
async function createCustomerAddress(params, contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.post(
    getCustomerAddAddressEndpoint(),
    params
  );
  return resp.data;
}
async function updateCustomerAddress(params, contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.patch(
    getCustomerAddressEndpoint(params.id),
    params
  );
  return resp.data;
}
async function deleteCustomerAddress(addressId, contextInstance = defaultInstance) {
  await contextInstance.invoke.delete(getCustomerAddressEndpoint(addressId));
}
async function setDefaultCustomerBillingAddress(addressId, contextInstance = defaultInstance) {
  const response = await contextInstance.invoke.patch(
    getCustomerDefaultBillingAddressEndpoint(addressId)
  );
  return response.data;
}
async function setDefaultCustomerShippingAddress(addressId, contextInstance = defaultInstance) {
  const response = await contextInstance.invoke.patch(
    getCustomerDefaultShippingAddressEndpoint(addressId)
  );
  return response.data;
}
async function updateEmail(params, contextInstance = defaultInstance) {
  await contextInstance.invoke.post(getCustomerUpdateEmailEndpoint(), params);
}
async function updatePassword(params, contextInstance = defaultInstance) {
  await contextInstance.invoke.post(
    getCustomerUpdatePasswordEndpoint(),
    params
  );
}
async function resetPassword(params, contextInstance = defaultInstance) {
  if (params && !params.storefrontUrl) {
    params.storefrontUrl = contextInstance.config.endpoint;
  }
  await contextInstance.invoke.post(getCustomerResetPasswordEndpoint(), params);
}
async function confirmPasswordReset(params, contextInstance = defaultInstance) {
  if (!params)
    return;
  await contextInstance.invoke.post(getConfirmPasswordResetEndpoint(), {
    newPasswordConfirm: params.newPassword,
    ...params
  });
}
async function updateProfile(params, contextInstance = defaultInstance) {
  await contextInstance.invoke.post(getCustomerDetailsUpdateEndpoint(), params);
}
async function confirmAccountRegistration(params, contextInstance = defaultInstance) {
  const response = await contextInstance.invoke.post(
    getCustomerAccountConfirmEndpoint(),
    params
  );
  return response.data;
}
async function setDefaultCustomerPaymentMethod(paymentMethodId, contextInstance = defaultInstance) {
  const response = await contextInstance.invoke.post(
    getCustomerUpdatePaymentMethodEndpoint(paymentMethodId)
  );
  return response.data;
}
async function isNewsletterSubscriber(contextInstance = defaultInstance) {
  const response = await contextInstance.invoke.post(
    getNewsletterRecipientEndpoint()
  );
  return response.data;
}

async function updateContext(params, contextInstance) {
  const resp = await contextInstance.invoke.patch(getContextEndpoint(), params);
  const contextToken = extractContextToken(resp);
  return { contextToken };
}
async function getSessionContext(contextInstance = defaultInstance) {
  const { data } = await contextInstance.invoke.get(getContextEndpoint());
  return data;
}
function setCurrentShippingAddress(shippingAddressId, contextInstance = defaultInstance) {
  return updateContext({ shippingAddressId }, contextInstance);
}
function setCurrentBillingAddress(billingAddressId, contextInstance = defaultInstance) {
  return updateContext({ billingAddressId }, contextInstance);
}
async function getAvailableCurrencies(contextInstance = defaultInstance) {
  const { data } = await contextInstance.invoke.get(
    getContextCurrencyEndpoint()
  );
  return data;
}
async function setCurrentCurrency(newCurrencyID, contextInstance = defaultInstance) {
  const params = { currencyId: newCurrencyID };
  const resp = await updateContext(params, contextInstance);
  return resp;
}
async function getAvailableLanguages(contextInstance = defaultInstance) {
  const { data } = await contextInstance.invoke.get(
    getContextLanguageEndpoint()
  );
  return data;
}
async function setCurrentLanguage(newLanguageId, contextInstance = defaultInstance) {
  const params = { languageId: newLanguageId };
  const resp = await updateContext(params, contextInstance);
  return resp;
}
async function getAvailableCountries(contextInstance = defaultInstance) {
  const { data } = await contextInstance.invoke.get(
    getContextCountryEndpoint()
  );
  return data;
}
async function getAvailableSalutations(contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.get(getContextSalutationEndpoint());
  return resp.data;
}
async function getAvailablePaymentMethods(contextInstance = defaultInstance, params = {}) {
  const resp = await contextInstance.invoke.get(
    getContextPaymentMethodEndpoint(),
    {
      params
    }
  );
  return resp.data;
}
async function getPaymentMethodDetails(paymentId, contextInstance = defaultInstance) {
  const { data } = await contextInstance.invoke.get(
    getContextPaymentMethodEndpoint(),
    {
      params: {
        "filter[id]": paymentId
      }
    }
  );
  return data?.elements?.[0];
}
async function setCurrentPaymentMethod(newPaymentMethodId, contextInstance = defaultInstance) {
  const params = { paymentMethodId: newPaymentMethodId };
  const resp = await updateContext(params, contextInstance);
  return resp;
}
async function getAvailableShippingMethods(contextInstance = defaultInstance, params = {}) {
  const resp = await contextInstance.invoke.get(
    getContextShippingMethodEndpoint(),
    {
      params
    }
  );
  return resp.data;
}
async function getShippingMethodDetails(shippingId, contextInstance = defaultInstance) {
  const { data } = await contextInstance.invoke.get(
    getContextShippingMethodEndpoint(),
    {
      params: {
        "filter[id]": shippingId
      }
    }
  );
  return data?.elements?.[0];
}
async function setCurrentShippingMethod(newShippingMethodId, contextInstance = defaultInstance) {
  const params = { shippingMethodId: newShippingMethodId };
  const resp = await updateContext(params, contextInstance);
  return resp;
}
async function getUserCountry(countryId, contextInstance = defaultInstance) {
  const { data } = await contextInstance.invoke.get(
    getContextCountryEndpoint(),
    {
      params: {
        "filter[id]": countryId
      }
    }
  );
  return data?.elements?.[0];
}
async function getUserSalutation(salutationId, contextInstance = defaultInstance) {
  const { data } = await contextInstance.invoke.get(
    getContextSalutationEndpoint(),
    {
      params: {
        "filter[id]": salutationId
      }
    }
  );
  return data?.elements?.[0];
}

async function clearCart(contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.post(getCheckoutCartEndpoint());
  const contextToken = resp.data["sw-context-token"];
  return { contextToken };
}
async function getCart(contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.get(getCheckoutCartEndpoint());
  return resp.data;
}
async function addProductToCart(productId, quantity, contextInstance = defaultInstance) {
  const qty = quantity || 1;
  const item = {
    quantity: qty,
    type: "product",
    referencedId: productId,
    id: productId
  };
  const resp = await contextInstance.invoke.post(
    getCheckoutCartLineItemEndpoint(),
    {
      items: [item]
    }
  );
  return resp.data;
}
async function changeCartItemQuantity(itemId, newQuantity = 1, contextInstance = defaultInstance) {
  const params = {
    items: [
      {
        id: itemId,
        quantity: parseInt(newQuantity.toString(), 10)
      }
    ]
  };
  const resp = await contextInstance.invoke.patch(
    getCheckoutCartLineItemEndpoint(),
    params
  );
  return resp.data;
}
async function removeCartItem(itemId, contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.delete(
    `${getCheckoutCartLineItemEndpoint()}?ids[]=${itemId}`
  );
  return resp.data;
}
async function addPromotionCode(promotionCode, contextInstance = defaultInstance) {
  const item = {
    type: "promotion",
    referencedId: promotionCode
  };
  const resp = await contextInstance.invoke.post(
    getCheckoutCartLineItemEndpoint(),
    {
      items: [item]
    }
  );
  return resp.data;
}
async function addCartItems(items, contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.post(
    getCheckoutCartLineItemEndpoint(),
    {
      items
    }
  );
  return resp.data;
}

async function getStoreNavigation({
  requestActiveId,
  requestRootId,
  depth,
  buildTree,
  searchCriteria
}, contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.post(
    getStoreNavigationEndpoint(requestActiveId, requestRootId),
    {
      ...searchCriteria || {},
      ...{
        depth,
        buildTree
      }
    }
  );
  return resp.data;
}

function invokePost({
  address,
  payload
}, contextInstance = defaultInstance) {
  return contextInstance.invoke.post(address, payload);
}
function invokeGet({ address }, contextInstance = defaultInstance) {
  return contextInstance.invoke.get(address);
}

async function getCmsPage(path, criteria, contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.post(getPageResolverEndpoint(), {
    path,
    ...criteria
  });
  return resp.data;
}
async function getLandingPage(landingPageId, params, contextInstance = defaultInstance) {
  const endpoint = getLandingPageDetailsEndpoint(landingPageId);
  const response = await contextInstance.invoke.post(endpoint, params);
  return response?.data;
}
async function getSeoUrls(entityId, languageId, contextInstance = defaultInstance) {
  if (languageId) {
    contextInstance.defaults.headers.common["sw-language-id"] = languageId;
  }
  const resp = await contextInstance.invoke.post(getSeoUrlEndpoint(), {
    filter: [
      {
        type: "equals",
        field: "foreignKey",
        value: entityId
      }
    ],
    includes: {
      seo_url: ["seoPathInfo"]
    }
  });
  return resp.data;
}
async function getSeoUrl(params, contextInstance = defaultInstance) {
  const seoUrlResponse = await invokePost(
    {
      address: getSeoUrlEndpoint(),
      payload: params
    },
    contextInstance
  );
  return seoUrlResponse.data;
}

async function createOrder(params, contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.post(
    getCheckoutOrderEndpoint(),
    params
  );
  return resp.data;
}
async function handlePayment(params, contextInstance = defaultInstance) {
  if (!params?.orderId) {
    throw new Error("handlePayment method requires orderId");
  }
  if (navigator?.userAgent.includes("WebKit")) {
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.setItem(
        "sw-context-token",
        contextInstance.config.contextToken
      );
    }
  }
  const resp = await contextInstance.invoke.get(handlePaymentEndpoint(), {
    params
  });
  return resp.data;
}
async function getOrderDetails(orderId, params, contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.post(
    getCustomerOrderEndpoint(),
    Object.assign({}, params, {
      filter: [
        {
          type: "equals",
          field: "id",
          value: orderId
        }
      ]
    })
  );
  return resp.data?.orders?.elements?.[0];
}
async function cancelOrder(orderId, contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.post(getCancelOrderEndpoint(), {
    orderId
  });
  return resp.data;
}
async function changeOrderPaymentMethod(orderId, paymentMethodId, contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.post(
    getChangeOrderPaymentMethodEndpoint(),
    {
      orderId,
      paymentMethodId
    }
  );
  return resp.data;
}

async function searchProducts(criteria, contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.post(
    `${getSearchEndpoint()}?search=${encodeURIComponent(
      criteria?.query || ""
    )}`,
    criteria
  );
  return resp.data;
}
async function searchSuggestedProducts(criteria, contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.post(
    `${getSuggestSearchEndpoint()}?search=${encodeURIComponent(
      criteria?.query || ""
    )}`,
    criteria
  );
  return resp.data;
}

async function sendContactForm(params, contextInstance = defaultInstance) {
  await contextInstance.invoke.post(getContactFormEndpoint(), params);
}
async function newsletterSubscribe(params, contextInstance = defaultInstance) {
  await contextInstance.invoke.post(
    getStoreNewsletterSubscribeEndpoint(),
    Object.assign({}, { option: "subscribe" }, params)
  );
}
async function newsletterUnsubscribe(params, contextInstance = defaultInstance) {
  await contextInstance.invoke.post(
    getStoreNewsletterUnsubscribeEndpoint(),
    params
  );
}

async function addWishlistProduct(productId, contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.post(
    getAddWishlistProductEndpoint(productId)
  );
  return resp.data;
}
async function getWishlistProducts(criteria, contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.post(
    getGetWishlistProductsEndpoint(),
    criteria
  );
  return resp.data;
}
async function removeWishlistProduct(productId, contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.delete(
    getRemoveWishlistProductEndpoint(productId)
  );
  return resp.data;
}
async function mergeWishlistProducts(productIds, contextInstance = defaultInstance) {
  const resp = await contextInstance.invoke.post(
    getMergeWishlistProductsEndpoint(),
    { productIds }
  );
  return resp.data;
}

const config = defaultInstance.config;
const setup = defaultInstance.setup;
const update = defaultInstance.update;
const onConfigChange = defaultInstance.onConfigChange;

export { addCartItems, addProductReview, addProductToCart, addPromotionCode, addWishlistProduct, cancelOrder, changeCartItemQuantity, changeOrderPaymentMethod, clearCart, config, confirmAccountRegistration, confirmPasswordReset, createCustomerAddress, createInstance, createOrder, deleteCustomerAddress, getAddWishlistProductEndpoint, getAvailableCountries, getAvailableCurrencies, getAvailableLanguages, getAvailablePaymentMethods, getAvailableSalutations, getAvailableShippingMethods, getCancelOrderEndpoint, getCart, getCategories, getCategory, getCategoryDetailsEndpoint, getCategoryEndpoint, getCategoryProducts, getChangeOrderPaymentMethodEndpoint, getCheckoutCartEndpoint, getCheckoutCartLineItemEndpoint, getCheckoutOrderEndpoint, getCmsPage, getConfirmPasswordResetEndpoint, getContactFormEndpoint, getContextCountryEndpoint, getContextCurrencyEndpoint, getContextEndpoint, getContextLanguageEndpoint, getContextPaymentMethodEndpoint, getContextSalutationEndpoint, getContextShippingMethodEndpoint, getCustomer, getCustomerAccountConfirmEndpoint, getCustomerAddAddressEndpoint, getCustomerAddress, getCustomerAddressEndpoint, getCustomerAddresses, getCustomerDefaultBillingAddressEndpoint, getCustomerDefaultShippingAddressEndpoint, getCustomerDetailsUpdateEndpoint, getCustomerEndpoint, getCustomerLoginEndpoint, getCustomerLogoutEndpoint, getCustomerOrderEndpoint, getCustomerOrders, getCustomerRegisterEndpoint, getCustomerResetPasswordEndpoint, getCustomerUpdateEmailEndpoint, getCustomerUpdatePasswordEndpoint, getCustomerUpdatePaymentMethodEndpoint, getGetWishlistProductsEndpoint, getLandingPage, getLandingPageDetailsEndpoint, getMergeWishlistProductsEndpoint, getNewsletterRecipientEndpoint, getNewsletterSubscribeEndpoint, getNewsletterUnsubscribeEndpoint, getOrderDetails, getPageResolverEndpoint, getPaymentMethodDetails, getProduct, getProductDetailsEndpoint, getProductEndpoint, getProductListingEndpoint, getProductReviews, getProductReviewsEndpoint, getProducts, getRemoveWishlistProductEndpoint, getSearchEndpoint, getSeoUrl, getSeoUrlEndpoint, getSeoUrls, getSessionContext, getShippingMethodDetails, getStoreNavigation, getStoreNavigationEndpoint, getStoreNewsletterConfirmEndpoint, getStoreNewsletterSubscribeEndpoint, getStoreNewsletterUnsubscribeEndpoint, getSuggestSearchEndpoint, getUserCountry, getUserSalutation, getWishlistProducts, handlePayment, handlePaymentEndpoint, invokeGet, invokePost, isNewsletterSubscriber, login, logout, mergeWishlistProducts, newsletterSubscribe, newsletterUnsubscribe, onConfigChange, register, removeCartItem, removeWishlistProduct, resetPassword, searchProducts, searchSuggestedProducts, sendContactForm, setCurrentBillingAddress, setCurrentCurrency, setCurrentLanguage, setCurrentPaymentMethod, setCurrentShippingAddress, setCurrentShippingMethod, setDefaultCustomerBillingAddress, setDefaultCustomerPaymentMethod, setDefaultCustomerShippingAddress, setup, update, updateCustomerAddress, updateEmail, updatePassword, updateProfile };
