import { Order } from '../domain/order';
import { MENU_PRICE } from '../domain/menu';

type Props = {
  order: Order;
};

export default function OrderSummary({ order }: Props) {
  const items = Object.entries(order).filter(
    ([, qty]) => qty && qty > 0
  );

  if (items.length === 0) {
    return (
      <div className="text-gray-500 italic">
        No items selected
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {items.map(([item, qty]) => (
        <div
          key={item}
          className="flex justify-between text-sm"
        >
          <span>
            {item} Set x {qty}
          </span>
          <span>
            {MENU_PRICE[item as keyof typeof MENU_PRICE] *
              (qty as number)}{' '}
            THB
          </span>
        </div>
      ))}
    </div>
  );
}