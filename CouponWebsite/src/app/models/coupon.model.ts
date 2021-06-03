import { Category } from './category.model';
import { Company } from './company.model';

export class Coupon {
  public constructor(
    public id?: number,
    public category?: Category,
    public title?: string,
    public description?: string,
    public startDate?: Date,
    public endDate?: Date,
    public amount?: number,
    public price?: number,
    public image?: string
  ) {}
}
