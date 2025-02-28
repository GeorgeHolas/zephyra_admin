import { DataTable } from "@/components/custom ui/DataTable"
import { columns } from "@/components/orderItems/OrderItemsColums"

const OrderDetails = async ({ params }: { params: { orderId: string }}) => {
  const res = await fetch(`${process.env.ADMIN_DASHBOARD_URL}/api/orders/${params.orderId}`);
  
  if (!res.ok) {
    throw new Error(`Failed to fetch order details: ${res.status} ${res.statusText}`);
  }
  
  const { orderDetails, customer } = await res.json();

  const { street, city, state, postalCode, country } = orderDetails.shippingAddress

  return (
    <div className="flex flex-col p-10 gap-5">
      <p className="text-base-bold">
        Order ID: <span className="text-base-medium text-red-600">{orderDetails._id}</span>
      </p>
      <p className="text-base-bold">
        Shipping rate ID: <span className="text-base-medium text-red-600">{orderDetails.shippingRate}</span>
      </p>
      <p className="text-base-bold">
        Customer name: <span className="text-base-medium text-blue-1">{customer.name}</span>
      </p>
      <p className="text-base-bold">
        Shipping address: <span className="text-base-medium text-blue-1">{street}, {city}, {state}, {postalCode}, {country}</span>
      </p>
      <p className="text-base-bold">
        Total Paid: <span className="text-base-medium text-blue-1">${orderDetails.totalAmount}</span>
      </p>
      <DataTable columns={columns} data={orderDetails.products} searchKey="product"/>
    </div>
  )
}

export default OrderDetails