/**
 * Created by Administrator on 2018/8/6/006.
 */
export function getInfo(token) {
    return fetch({
        url: '/user/info',
        method: 'get',
        params: { token }
    });
}