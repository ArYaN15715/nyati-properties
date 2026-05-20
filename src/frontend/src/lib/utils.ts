import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: string): string {
  const num = Number.parseFloat(price.replace(/[^0-9.]/g, ""));
  if (Number.isNaN(num)) return price;
  if (num >= 10000000) return `₹${(num / 10000000).toFixed(2)} Cr`;
  if (num >= 100000) return `₹${(num / 100000).toFixed(2)} Lac`;
  if (num >= 1000) return `₹${(num / 1000).toFixed(0)}K`;
  return `₹${num}`;
}

export function formatArea(sqft: bigint): string {
  const n = Number(sqft);
  if (n >= 43560) return `${(n / 43560).toFixed(2)} Acre`;
  return `${n.toLocaleString("en-IN")} sq.ft`;
}

export function formatBedBath(val?: bigint): string {
  if (val === undefined || val === null) return "-";
  return Number(val).toString();
}
