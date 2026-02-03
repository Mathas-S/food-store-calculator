import { MenuItem, MENU_PRICE } from '../domain/menu';

const ITEM_ACCENT_COLOR: Record<MenuItem, string> = {
  RED: 'bg-red-500',
  GREEN: 'bg-green-500',
  BLUE: 'bg-blue-500',
  YELLOW: 'bg-yellow-400',
  PINK: 'bg-pink-500',
  PURPLE: 'bg-purple-500',
  ORANGE: 'bg-orange-500',
};

type Props = {
  item: MenuItem;
  quantity: number;
  onChange: (newQty: number) => void;
};

export default function MenuCard({ item, quantity, onChange }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow transition overflow-hidden">
      <div
        className={`w-full py-2 text-center text-white font-semibold ${ITEM_ACCENT_COLOR[item]}`}
      >
        {item}
      </div>

      <div className="p-4 flex flex-col items-center gap-3">
        <div className="text-sm text-gray-600">
          {MENU_PRICE[item]} THB / Set
        </div>

        <div className="flex items-center gap-3">
          <button
            className="w-8 h-8 border rounded-full bg-white hover:bg-gray-100 transition
                       flex items-center justify-center cursor-pointer"
            onClick={() => onChange(Math.max(0, quantity - 1))}
          >
            −
          </button>

          <span className="font-semibold text-lg w-6 text-center">
            {quantity}
          </span>

          <button
            className="w-8 h-8 border rounded-full bg-white hover:bg-gray-100 transition
                       flex items-center justify-center cursor-pointer"
            onClick={() => onChange(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
