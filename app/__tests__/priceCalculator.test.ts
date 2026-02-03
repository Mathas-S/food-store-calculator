import { calculateTotal } from '../services/priceCalculator';
import { Order } from '../domain/order';

describe('Price Calculator', () => {
  it('calculates total price without discount', () => {
    const order: Order = {
      RED: 1,
      GREEN: 1,
    };

    const total = calculateTotal(order, false);

    expect(total).toBe(90);
  });

  it('applies member discount 10%', () => {
    const order: Order = {
      RED: 1,
      GREEN: 1,
    };

    const total = calculateTotal(order, true);

    expect(total).toBe(81);
  });

  it('applies 5% discount for double Green sets', () => {
    const order: Order = {
      GREEN: 2,
    };

    const total = calculateTotal(order, false);

    expect(total).toBe(76); // 40 * 2 = 80 -> 5% discount = 76
  });

  it('applies 5% discount for double Orange sets', () => {
    const order: Order = {
      ORANGE: 2,
    };

    const total = calculateTotal(order, false);

    expect(total).toBe(228); // 120 * 2 = 240 -> 5% discount = 228
  });

  it('applies both 5% and 10% discounts together', () => {
    const order: Order = {
      GREEN: 2,
      RED: 1,
    };

    const total = calculateTotal(order, true);

    expect(total).toBe(111);
     // (40*2 + 50) = 130
    // 5% -> 123.5
    // 10% -> 111.15 -> round = 111
  });

  it('does not apply 5% discount if quantity is not even', () => {
    const order: Order = {
      GREEN: 3,
    };

    const total = calculateTotal(order, false);

    expect(total).toBe(120);
  });
});
