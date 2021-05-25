//服务器

//引入app
import app from './main';
import router from './router';

//暴露函数
export default (({ url }) => {
    // console.log(url);
    router.push(url);

    return new Promise((resolve, reject) => {
        //判断请求得路由是否存在----前端路由
        router.onReady(() => {
            // console.log(router.getMatchedComponents());
            //根据配皮数量判断
            if (router.getMatchedComponents().length) {
                resolve(app);
            } else {
                // 没有
                reject({ statusCode: 404, msg: '找不到' });
            }
        })
    })
})