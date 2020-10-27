// https://www.notion.so/API-ac3aca4009a948b8bf3ca795cc14058c
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://problem.comento.kr',
});

export const feedApi = {
  getFeed: (status, queries) =>
    api.get('/api/list', {
      params: { page, ord, category, limit },
    }),
};

export const feed = `${base}/api/list`;
export const filter = `${base}/api/category`;
export const ads = `${base}/api/ads`;
export const view = `${base}/api/view`;
