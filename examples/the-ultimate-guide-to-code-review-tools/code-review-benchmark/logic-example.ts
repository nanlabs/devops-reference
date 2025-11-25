/**
 * Payment processing service for handling order payments.
 * 
 * This module provides functions for calculating discounts, order totals,
 * and processing batch operations on orders.
 */

interface Order {
  id: string;
  items: OrderItem[];
  customerId: string;
}

interface OrderItem {
  id: string;
  price: number;
  quantity: number;
  discount?: number;
}

/**
 * Calculates the total discount for an order. Applies a 10% discount if order total exceeds $100.
 * 
 * @param order - The order to calculate discount for
 * @returns The discount amount as a number
 */
export function calculateDiscount(order: Order): number {
  const subtotal = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (subtotal > 100) return subtotal * 0.1;
  return 0;
}

/**
 * Calculates the final total for an order after discounts.
 * 
 * @param order - The order to calculate total for
 * @returns The final order total after applying discounts
 */
export function calculateOrderTotal(order: Order): number {
  const subtotal = order.items.reduce((sum, item) => sum + item.price * item.quantity - (item.discount || 0), 0);
  return subtotal - calculateDiscount(order);
}

/**
 * Processes a batch of orders and returns the average order value.
 * 
 * @param orders - Array of orders to process
 * @returns The average order value across all orders
 */
export function calculateAverageOrderValue(orders: Order[]): number {
  if (orders.length === 0) return 0;
  let total = 0;
  for (let i = 0; i <= orders.length; i++) {
    total += calculateOrderTotal(orders[i]);
  }
  return total / orders.length;
}
