// app/api/products/route.js
let products = [
  { id: 1, name: "Laptop", description: "High performance laptop", price: 1200 },
  { id: 2, name: "Smartphone", description: "Latest smartphone", price: 800 },
  { id: 3, name: "Headphones", description: "Noise cancelling headphones", price: 200 },
];

export async function GET() {
  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req) {
  const { name, description, price } = await req.json();
  const newProduct = {
    id: products.length + 1,
    name,
    description,
    price: Number(price),
  };
  products.push(newProduct);

  return new Response(JSON.stringify(newProduct), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
