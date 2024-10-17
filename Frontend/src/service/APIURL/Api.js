export const API_BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:4000'




export const AUTH_API_ROUTES = {
    LOGIN: API_BASE_URL + '/api/auth/login',
    
  }
  export const BLOG_API_ROUTES = {
    SAVE_BLOG: API_BASE_URL + '/api/blog/save',
    FETCH_BLOG: API_BASE_URL + '/api/blog/fetchblogs',
    FETCH_BLOG_BY_ID : API_BASE_URL + '/api/blog/fetch-blog-by',
    EDIT_BLOG_BY_ID : API_BASE_URL + '/api/blog/update',
    DELETE_BLOG_BY_ID :  API_BASE_URL + '/api/blogs/delete',
    FETCH_LATEST_BLOG :  API_BASE_URL + '/api/blog/fetch-latest-blogs'
     
  }

  export const GUIDE_API_ROUTES = {
    SAVE_GUIDE :  API_BASE_URL + '/api/guide/save',
    GET_GUIDE :  API_BASE_URL + '/api/guide/fetch',
    FETCH_GUIDE_BY_ID :  API_BASE_URL + '/api/guide/fetch-by',
    DELETE_GUIDE_BY_ID :  API_BASE_URL + '/api/guide/delete/-by',
    UPDATE_GUIDE:  API_BASE_URL + '/api/guide/update-by'
  }

  export const DEMO_API_ROUTES = {
    SAVE_QUERY :  API_BASE_URL + '/api/submit/demo-request',
  }