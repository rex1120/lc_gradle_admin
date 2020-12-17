import request from '../base/request.js';

//保存或更新用户信息
let saveOrUpdateUser = ( data ) =>  request({
    url: 'sysUser/saveOrUpdateUser',
    method: 'post',
    data:data
});

//用户登录
let loginAction = ( data ) =>  request({
    url: 'sysUser/loginAction',
    method: 'post',
    data:data
});

//用户列表
let userPageList = ( data ) =>  request({
    url: 'sysUser/userPageList',
    method: 'post',
    data:data
});


export {
    saveOrUpdateUser,
    loginAction,
    userPageList
};