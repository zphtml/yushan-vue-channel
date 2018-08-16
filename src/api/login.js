/**
 * Created by Administrator on 2018/8/6/006.
 */
import { fetch } from '@/utils/fetch';
export function getInfo(data) {
    return fetch({
        url: '/login/login',
        method: 'get',
        params: data
    });
}