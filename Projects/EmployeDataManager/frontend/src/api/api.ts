export async function apiHealth() {
  const response = await fetch("<http://localhost:3001/>");
  const result = await response.json();

  return {result };
}
  