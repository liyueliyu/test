/* eslint-disable implicit-arrow-linebreak */
// import to from "await-to-js";
// import request from "./request";
import axios from "axios";
// export const getHomePageData = async () => {
//   const [error, res] = await to(request.get("/homepage/block/page"));
//   if (error) return console.log("请求出错！");
//   return res.data.data.blocks;
// };
// export const getHomePageMenu = () => request.get("/homepage/dragon/ball");
// export const loginByPhone = (data) => request.post("/login/cellphone", data);
// export const sendValidCode = (data) => request.post("/captcha/sent", data);
// export const getloginPage = () => request.post("");
const loginPage = () => {
//  axios.post(
//    `https://gitee.com/oauth/authorize?username= &password= `
//  );
axios.post(
  `https://gitee.com/oauth/token?
  grant_type=password&username=1756176356@qq.com
  $client_id={b743fa849abda81a40d7fb1a6c28cecd32c5d40aa6b6fd51285e8427ccbd73b2}
  & client_secret={19c6a28dc179c4e57c49378ce62dbe56447b7a87a6c9c9394299d4512f3baa90}
  &scoped=projects`
);
 
};
export default loginPage;
