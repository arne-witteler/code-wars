function mango(quantity, price) {
  const freeMangos = Math.floor(quantity / 3)
  return (quantity - freeMangos) * price;
}