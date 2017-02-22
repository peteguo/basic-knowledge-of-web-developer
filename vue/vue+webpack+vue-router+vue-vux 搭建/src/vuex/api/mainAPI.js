import http from 'src/page/lib/https'
export const _shopJson = (param) => {
  return http.post('shoplist.json',param);
};
