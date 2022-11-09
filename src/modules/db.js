export function insertOrder(payload) {
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpzanpvcm1hcmF3ZXJjZ3Bkc3RxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgwMTExNTAsImV4cCI6MTk4MzU4NzE1MH0.AQ3CKjlHItzWkJeqmLJzYwPWttrIHgNgnn25W7_FaWA";
  const url = "https://zsjzormarawercgpdstq.supabase.co";

  fetch(url + "/rest/v1/simpleshop", {
    method: "POST",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpiZWt2dmRhY2JwcXBhbWNpd2tnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg2OTksImV4cCI6MTk4MjE3NDY5OX0.-tQpiAuUMYTHKDXLgXIo5WUVhC3lOodaVpOCXrKQoe0",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpiZWt2dmRhY2JwcXBhbWNpd2tnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg2OTksImV4cCI6MTk4MjE3NDY5OX0.-tQpiAuUMYTHKDXLgXIo5WUVhC3lOodaVpOCXrKQoe0",
      Prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  });
  //   .then()
  //   .then()
}
