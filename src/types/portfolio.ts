export type PortfolioCategory =
  | "slides"
  | "labels"
  | "books"
  | "art";

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: PortfolioCategory;
  image: string;
  service: string;
}
