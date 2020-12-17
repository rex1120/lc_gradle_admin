import request from '../base/request.js';

//列表查询
 export function redisGet(data) {
    return request({
        url: 'redis/redisGet',
        method: 'post',
        // 跨域报错 可能出现在data上，测试的时候可以先不带data
        // data的处理方式需要放在request.js使用qs处理
        data:data
    });
 }