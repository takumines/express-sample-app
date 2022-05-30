export interface Item {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string
}

export interface Items {
  [key: number]: Item
}