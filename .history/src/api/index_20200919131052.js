import request from "../utils/request";

export default {
  getCode: function(phone, type) {
    return request.post("member/user-api/send-sms", {
      phone: phone,
      type: type,
    });
  },

  register: function(phone, code,  key, scenario) {
    return request.post("/member/user-api/login", {
      phone: phone,
      code: code,
      key: key,
      scenario: scenario,
    });
  },

  getItem: function(item_id) {
    return request.post("item/me-item-api/view", {
      item_id: item_id,
    });
  },

  getRecentRegisters() {
    return request.post("member/user-api/create-desc", {});
  },

  getInvitations: function() {
    return request.post("member/user-api/invitations", {});
  },

  getCoupons: function(item_id, scenario, type) {
    return request.post("coupon/coupon-templet-api/item-index", {
      item_id: item_id,
      scenario: scenario,
      type: type,
    });
  },

  receiveCoupon: function(ctid) {
    return request.post("coupon/coupon-templet-api/receive", {
      ctid: ctid,
    });
  },

  getEventTimes: function() {
    return request.post("/member/user-api/test-time-list", {});
  },

  getRuleContent: function(id) {
    return request.post("floor/floor-content-api/get-content", {
      id: id,
    });
  },

  wxShare: function(url) {
    return request.post("member/user-api/wx-share", {
      url: url,
    });
  },
  // 获取评论列表
  commentList: function() {
    return request.post("/item/me-commet-api/index", {
      item_id: '114584',
      flag: '1',
    });
  },
  // 立即加速
  speedUp: function() {
    return request.post("/member/action/acceleration", {});
  },
  // 页面状态
  pageStatus: function() {
    return request.post("/member/action/status", {});
  },
   // 分享
  onShare: function() {
    return request.post("/member/action/share", {});
  },
   // 帮助人列表
   actionList: function() {
    return request.post("/member/action/list", {});
  },
  // 获取进入时的头像和昵称
  actionKeyUser: function(key) {
    return request.post("/member/action/key-user", {
      key: key
    });
  },
  // 翻倍
  actionDouble: function() {
    return request.post("/member/action/double", {});
  },
  // 奖励列表
  rewardList: function() {
    return request.post("/member/action/get-received-list", {});
  },
  // 二次验证
  secVerification: function(val,phone) {
    return request.post("/member/action/second-validate", {
      geetest_challenge: val.geetest_challenge,
      geetest_validate: val.geetest_validate,
      geetest_seccode: val.geetest_seccode,
      phone: phone
    });
  },
  // 领取优惠券
  getCoupon: function(id) {
    return request.post("/coupon/coupon-templet-api/receive", {
      ctid: id,
      // token:'fWThrGO7Em6AF_eDTbQH0fu8ms2JhNxi',
      // token:'k3Y3-Ig-Z1KrGa6sEJNkkM5D4aCm1mw0',
    });
  },
   // 优惠券
  couponList: function() {
    return request.post("/coupon/coupon-templet-api/coupon-details", {
      ids:['445','446','444'],
      // token:'k3Y3-Ig-Z1KrGa6sEJNkkM5D4aCm1mw0',
      // uid:'5016'
    });
  },
   // 获取商品列表
   newGoodList: function() {
    return request.post("/item/me-item-api/index", {
      item_ids:['118414','118386','117489','100021','117501','117812','117153','117411','121885','121858','118195','100030','121857','117499','118325','117412','118259','117710','117509','117813','117419','117991','118633','121563','117149','121567','121517','120707','120910','121016','121167','121282'],
      // token:'k3Y3-Ig-Z1KrGa6sEJNkkM5D4aCm1mw0',
      // uid:'5016'
    });
  },
   // 获取商品列表
   goodList: function(mcid,start_page) {
    return request.post("/item/me-item-api/index", {
      mcid: mcid,
      start_page: start_page,
      // token:'k3Y3-Ig-Z1KrGa6sEJNkkM5D4aCm1mw0',
      // uid:'5016'
    });
  },
};
