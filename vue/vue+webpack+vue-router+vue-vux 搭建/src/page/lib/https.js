
const webctx = '';

// https://github.com/rstacruz/nprogress
import "nprogress/nprogress.css"
import NProgress from "nprogress"
NProgress.configure({ showSpinner: true })

const _req = (url, type = 'POST', data = {}) => {
    return new Promise((resolve, reject) => {
        if (/\?/g.test(url)) {
            url += '&r=' + Math.random();
        } else {
            url += '?r=' + Math.random();
        }
        $.ajax({
            url: `${webctx}${url}`,
            type: type,
            data: data,
            dataType: 'json',
            timeout: process.env.NODE_ENV == 'development' ? 30 * 1000 : 60 * 1000,
            success: data => resolve(data),
            error: xhrErr => reject(xhrErr)
        });
    });
};

const _reqType = function (type, session) {
  return function (url, data, progress) {
    // 处理参数
    progress = typeof progress === 'boolean' ? progress : true
    progress = typeof data === 'boolean' ? data : progress
    data = (typeof data === 'boolean' || !data) ? {} : data

    progress && NProgress.start()

    return _req(url, type, data)
    .then(data => {
        progress && NProgress.done()

        // 请求是否验证session 默认验证
        if (session) {
          // session 过期
          if (data.msgCode == 401 || data.msgCode == 101) {
            console.log(data.msg || '用户已过期，请重新登录')
            window.location.href = "logout"
            return false
          }
        }


        return Promise.resolve(data)
    })
    .catch(xhrErr => {
        progress && NProgress.done()

        // 这里捕获所有的网络请求错误
        console.log("网络请求错误: ", xhrErr)
        if (xhrErr && xhrErr.responseText) {
            Vue.prototype.$message && Vue.prototype.$message(xhrErr.responseText || "网络请求错误,请稍后再试！")
            //alert("网络请求错误: " + xhrErr.responseText)
        }
        return false
    })
  }
}





export default {
    get : _reqType('GET', true),
    post: _reqType('POST', true),
    _post: _reqType('POST', false),
    _get: _reqType('POST', false),
}
