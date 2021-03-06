import jsonp from 'common/js/jsonp'
import {commonParams, options, PROXY_URI} from './config'
import axios from 'axios'

// const debug = false
// const debug = true
const debug = process.env.NODE_ENV !== 'production'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function getDiscList() {
  const url = debug ? '/api/getDiscList' : PROXY_URI + '/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSongList(disstid) {
  const url = debug ? '/api/getCdInfo' : PROXY_URI + '/api/getCdInfo'

  const data = Object.assign({}, commonParams, {
    disstid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0
  })

  let d = axios.get(url, {
    params: data
  }).then((res) => {
    // console.log(res)
    // return Promise.resolve(res.data)
    return res.data // 此处可以直接返回 res.data
  })
  // console.log(d)

  return d
}
