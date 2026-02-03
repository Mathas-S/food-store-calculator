'use client';

import { useState } from 'react';
import { Order } from './domain/order';
import { MenuItem } from './domain/menu';
import { calculateTotal } from './services/priceCalculator';
import { hasDoubleItemDiscount } from './domain/discount';
import MenuCard from './components/MenuCard';
import OrderSummary from './components/OrderSummary';

const MENU_ITEMS: MenuItem[] = [
  'RED',
  'GREEN',
  'BLUE',
  'YELLOW',
  'PINK',
  'PURPLE',
  'ORANGE',
];

export default function Home() {
  const [order, setOrder] = useState<Order>({});
  const [hasMember, setHasMember] = useState(false);

  const updateOrder = (item: MenuItem, qty: number) => {
    setOrder(prev => ({
      ...prev,
      [item]: qty === 0 ? undefined : qty,
    }));
  };

  const clearOrder = () => {
    setOrder({});
    setHasMember(false);
  };

  const hasDoubleDiscount = hasDoubleItemDiscount(order);
  const total = calculateTotal(order, hasMember);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <header className="text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            Food Store Calculator
          </h1>
          <p className="text-gray-600 mt-1">
            Select menu items and The total price will be calculated
            automatically.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Box Section */}
          <section className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">
              Menu
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {MENU_ITEMS.map(item => (
                <MenuCard
                  key={item}
                  item={item}
                  quantity={order[item] ?? 0}
                  onChange={qty => updateOrder(item, qty)}
                />
              ))}
            </div>
          </section>

          {/* Order Summary Section */}
          <aside className="bg-white rounded-xl shadow-sm p-5 space-y-4 h-fit">
            <h2 className="text-xl font-semibold">
              Order Summary
            </h2>

            <OrderSummary order={order} />

            {hasDoubleDiscount && (
              <div className="inline-flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                5% discount applied for double item purchase
              </div>
            )}

            <div className="pt-2">
              <label className="flex items-center gap-2 text-md">
                <input
                  type="checkbox"
                  checked={hasMember}
                  onChange={e => setHasMember(e.target.checked)}
                />
                Member Card (10% off)
              </label>
            </div>

            <div className="flex items-center justify-between border-t pt-4 mt-2">
              <span className="text-lg font-semibold">
                Total
              </span>
              <span className="text-2xl font-bold">
                {total} THB
              </span>
            </div>

            <button
              onClick={clearOrder}
              disabled={Object.keys(order).length === 0}
              className="w-full mt-2 text-sm px-4 py-2 rounded
                         bg-red-500 text-white font-semibold
                         hover:bg-red-600 transition
                         disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Clear Order
            </button>
          </aside>
        </div>
      </div>
    </main>
  );
}
