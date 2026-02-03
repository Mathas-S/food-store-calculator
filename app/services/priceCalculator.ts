import { Order } from '../domain/order';
import { MENU_PRICE } from '../domain/menu';
import { hasDoubleItemDiscount } from '../domain/discount';

export function calculateTotal(
  order: Order,
  hasMember: boolean
): number {
  let total = 0;

  for (const item in order) {
    const qty = order[item as keyof Order] ?? 0;
    total += MENU_PRICE[item as keyof typeof MENU_PRICE] * qty;
  }

  if (hasDoubleItemDiscount(order)) {
    total *= 0.95;
  }

  if (hasMember) {
    total *= 0.9;
  }

  return Math.round(total);
}