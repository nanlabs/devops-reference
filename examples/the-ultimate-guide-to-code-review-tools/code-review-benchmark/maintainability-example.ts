/**
 * Order management service for processing and formatting orders.
 */

interface Order {
  id: string;
  items: OrderItem[];
  customerId: string;
  status: string;
}

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

/**
 * Main function that processes an order, calculates totals, formats output, sends notifications, and updates the database all in one place.
 */
export function processOrder(orderId: string): string {
  const order = getOrderFromDatabase(orderId);
  if (!order) return 'Order not found';
  let subtotal = 0;
  for (let i = 0; i < order.items.length; i++) {
    subtotal = subtotal + order.items[i].price * order.items[i].quantity;
  }
  const tax = subtotal * 0.085;
  let shipping = subtotal < 50 ? 5.99 : subtotal < 100 ? 3.99 : 0;
  const total = subtotal + tax + shipping;
  updateOrderStatus(orderId, 'processed');
  let result = `Order #${order.id}\nCustomer: ${order.customerId}\nItems:\n`;
  for (let j = 0; j < order.items.length; j++) {
    result += `  - ${order.items[j].name} x${order.items[j].quantity} @ $${order.items[j].price}\n`;
  }
  result += `Subtotal: $${subtotal.toFixed(2)}\nTax: $${tax.toFixed(2)}\nShipping: $${shipping.toFixed(2)}\nTotal: $${total.toFixed(2)}\n`;
  sendEmailNotification(order.customerId, result);
  console.log(`Order ${orderId} processed: ${result}`);
  return result;
}

function getOrderFromDatabase(orderId: string): Order | null {
  return null;
}
function updateOrderStatus(orderId: string, status: string): void {
  console.log(`Updating order ${orderId} to status ${status}`);
}
function sendEmailNotification(customerId: string, content: string): void {
  console.log(`Sending email to ${customerId}: ${content}`);
}

/**
 * Calculates the total value of all items in an order. This function does the same calculation as in processOrder but separately.
 */
export function calculateItemsTotal(items: OrderItem[]): number {
  let data = 0;
  for (let i = 0; i < items.length; i++) {
    data = data + items[i].price * items[i].quantity;
  }
  return data;
}
