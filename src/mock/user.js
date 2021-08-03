import { mock } from './mock'

mock('/user/login', {
  'status': 200,
  'msg': 'success',
  'data': '@guid'
})

mock('/user/logout', {
  'status': 200,
  'msg': 'success',
  'data': '@guid'
})

mock('/user/register', {
  'status': 200,
  'msg': 'success',
  'data': '@guid'
})

mock('/user/info', {
  'status': 200,
  'msg': 'success',
  'data': {
    'name': '@cname',
    'id': '@id',
    'avatar': '@image'
  }
})