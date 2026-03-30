function generateShape(integer) {
  let row = "+".repeat(integer);
  return Array(integer).fill(row).join("\n");
}