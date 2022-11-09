export async function insertOrder(payload) {
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpzanpvcm1hcmF3ZXJjZ3Bkc3RxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgwMTExNTAsImV4cCI6MTk4MzU4NzE1MH0.AQ3CKjlHItzWkJeqmLJzYwPWttrIHgNgnn25W7_FaWA";
  const url = "https://zsjzormarawercgpdstq.supabase.co";

  const res = await fetch(url + "/rest/v1/simpleshop", {
    method: "POST",
    // "Content-Type": "application/JSON",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpzanpvcm1hcmF3ZXJjZ3Bkc3RxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgwMTExNTAsImV4cCI6MTk4MzU4NzE1MH0.AQ3CKjlHItzWkJeqmLJzYwPWttrIHgNgnn25W7_FaWA",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpzanpvcm1hcmF3ZXJjZ3Bkc3RxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgwMTExNTAsImV4cCI6MTk4MzU4NzE1MH0.AQ3CKjlHItzWkJeqmLJzYwPWttrIHgNgnn25W7_FaWA",
      Prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  });
  return await res.json();
}
