import * as AWS from 'aws-sdk';
import { AttributeMap, QueryInput } from 'aws-sdk/clients/dynamodb';
import { CouponDetail } from '../../domains/coupon/coupon-detail';

const region = process.env.REGION;
const tableName = process.env.COUPON_TABLE_NAME;
const dynamoDB = new AWS.DynamoDB({
  apiVersion: '2012-10-08',
  region: region
});

export class CouponDynamoTable {
  public static async getCouponById(id: string): Promise<CouponDetail> {}

  public static async GetCouponsFileterByTitle(
    title: string,
    per_page: number,
    lastEvaluateKey?: {}
  ): Promise<CouponDetail>[] {}
}
