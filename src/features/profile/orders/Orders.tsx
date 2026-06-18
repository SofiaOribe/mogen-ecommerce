import DetailOrder from "./DetailOrder"

const order = [
  {
    id: "156874A",
    date: "2023-10-01T12:00:00Z",
    total: "586",
    address: "Park Street 123",
    zipCode: "12345",
    city: "New York",
    status: "Paid",
    country: "USA",
    product: [
      {
        id: "1",
        name: "Vital Power Serum Matcha",
        image:
          "https://acdn-us.mitiendanube.com/stores/817/155/products/veganis_catalogo_200225_43439-54631c3ec0e1a18fb817422425269236-1024-1024.webp",
        price: "14.149",
        quantity: 2,
      },
      {
        id: "2",
        name: "Vital Power Serum Matcha",
        image:
          "https://acdn-us.mitiendanube.com/stores/817/155/products/veganis_catalogo_200225_43439-54631c3ec0e1a18fb817422425269236-1024-1024.webp",
        price: "14.149",
        quantity: 2,
      },
      {
        id: "3",
        name: "Vital Power Serum Matcha",
        image:
          "https://acdn-us.mitiendanube.com/stores/817/155/products/veganis_catalogo_200225_43439-54631c3ec0e1a18fb817422425269236-1024-1024.webp",
        price: "14.149",
        quantity: 2,
      },
    ],
  },
  {
    id: "156864A",
    date: "2023-10-01T12:00:00Z",
    total: "586",
    address: "Park Street 123",
    zipCode: "12345",
    city: "New York",
    status: "Declined",
    country: "USA",
    product: [
      {
        id: "1",
        name: "Vital Power Serum Matcha",
        image:
          "https://acdn-us.mitiendanube.com/stores/817/155/products/veganis_catalogo_200225_43439-54631c3ec0e1a18fb817422425269236-1024-1024.webp",
        price: "14.149",
        quantity: 2,
      },
    ],
  },
  {
    id: "158834A",
    date: "2023-10-01T12:00:00Z",
    total: "586",
    address: "Park Street 123",
    zipCode: "12345",
    city: "New York",
    status: "Pending",
    country: "USA",
    product: [
      {
        id: "1",
        name: "Vital Power Serum Matcha",
        image:
          "https://acdn-us.mitiendanube.com/stores/817/155/products/veganis_catalogo_200225_43439-54631c3ec0e1a18fb817422425269236-1024-1024.webp",
        price: "14.149",
        quantity: 2,
      },
    ],
  },
]

const Orders = () => {
  return (
    <div className="w-full h-full border-t-1 border-color-black flex flex-col gap-4 pt-4">
      {order.map(order => (
        <DetailOrder key={order.id} details={order} />
      ))}
    </div>
  )
}

export default Orders
