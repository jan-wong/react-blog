import { mock } from './mock'

mock('/posts/list', {
  'status': 200,
  'msg': 'success',
  'data|5': [{
    'title': '@ctitle',
    'text': '@cparagraph',
    'createdTime': '@datetime',
    'user': {
      'name': '@name',
      'id': '@id',
      'avatar': '@image("50x50")'
    }
  }]
})

mock('/posts/user', {
  'status': 200,
  'msg': 'success',
  'data': {
    'user': {
      'name': '@name',
      'id': '@id',
      'avatar': '@image("50x50")'
    },
    'posts|5': [{
      'title': '@ctitle',
      'text|10': '@cparagraph',
      'createdTime': '@datetime',
    }]
  }
})

mock('/posts/detail', {
  'status': 200,
  'msg': 'success',
  'data': {
    'user': {
      'id': '@id',
      'name': '@cname',
      'avatar': '@image("100x100")'
    },
    'title': '@ctitle',
    'text|5': '@cparagraph',
    'createdTime': '@datetime',
    'comments|5': [{
      'user': {
        'id': '@id',
        'name': '@cname',
        'avatar': '@image("100x100")'
      },
      'title': '@ctitle',
      'text|5': '@cparagraph',
      'createdTime': '@datetime',
    }]
  }
})