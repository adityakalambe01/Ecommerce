export class Constants {
  API_URL: string = 'https://api.escuelajs.co/api/v1';

  // https://api.escuelajs.co/api/v1/products?offset=0&limit=10

  // https://fakeapi.platzi.com/en/rest/categories/
  constructor() {
  }

  PRODUCT_METHODS  = {
      GET_ALL_PRODUCTS: '/products/',
      GET_PRODUCT_BY_ID: '/products/',
      ADD_NEW_PRODUCT: '/products/',
      UPDATE_PRODUCT: '/products/',
      DELETE_PRODUCT: '/products/'
  }

  CATEGORIES_METHODS ={
      GET_ALL_CATEGORIES : '/categories/',
      GET_CATEGORY_BY_ID: '/categories/',
      ADD_NEW_CATEGORY: '/categories/',
      UPDATE_CATEGORY: '/categories/',
      DELETE_CATEGORY: '/categories/',
  }

  USERS_METHODS = {
      GET_ALL_USERS : '/users/',
      GET_USER_BY_ID: '/users/',
      ADD_NEW_USER: '/users/',
      UPDATE_USER: '/users/',
      CHECK_EMAIL: '/users/is-available',
  }

  ALL_PRODUCTS_BY_CATEGORY_ID(categoryId: number): string{
    return `${this.API_URL}${this.CATEGORIES_METHODS.GET_CATEGORY_BY_ID}${categoryId}${this.PRODUCT_METHODS.GET_ALL_PRODUCTS}`;
  }
}
