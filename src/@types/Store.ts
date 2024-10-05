export interface Store {
    id: number,
    store_name: string,
    rating: number,
    store_image: string,
    category: "F" | "R" | "S",
    createdAt: Date
    updatedAt: Date
  }