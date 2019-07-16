export class CouponDetail {
  public coupon: ICouponDetail;
  constructor(coupon: ICouponDetail) {
    this.coupon = coupon;
  }
}

export interface ICouponDetail {
  id: string;
  title: string;
  description: string;
  thumnail_url: string;
}
