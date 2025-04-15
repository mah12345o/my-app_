export interface Product {
  id: number;
  name: string;
  price: string;
  isTop: boolean;
  percentageChange?: React.ReactNode;
  subCategory?: string;
  icon?: React.ReactNode;
}

export interface DashboardCard {
  id: number;
  title: string;
  count: number;
  icon: string;
  color: string;
  percentageChange: string;
  changeValue: string;
  trend: string;
  labelIcon?: React.ReactNode;
}
