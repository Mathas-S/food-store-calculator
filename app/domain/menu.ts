export type MenuItem =
  | 'RED'
  | 'GREEN'
  | 'BLUE'
  | 'YELLOW'
  | 'PINK'
  | 'PURPLE'
  | 'ORANGE';

export const MENU_PRICE: Record<MenuItem, number> = {
  RED: 50,
  GREEN: 40,
  BLUE: 30,
  YELLOW: 50,
  PINK: 80,
  PURPLE: 90,
  ORANGE: 120,
};