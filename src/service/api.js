import request from "@/service/request";

// eslint-disable-next-line import/prefer-default-export, quotes
export const getAccessToken = (data) => request.post('/oauth/token', data);
