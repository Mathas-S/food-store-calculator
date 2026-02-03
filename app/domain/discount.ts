import { Order } from './order';

export const DOUBLE_DISCOUNT_ITEMS = [
  'ORANGE',
  'PINK',
  'GREEN',
] as const;

export function hasDoubleItemDiscount(order: Order): boolean {
  return DOUBLE_DISCOUNT_ITEMS.some(item => {
    const qty = order[item];
    return qty !== undefined && qty >= 2 && qty % 2 === 0;
  });
}