const SUPABASE_URL = "https://aoyycbedxetmnavmhesf.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFveXljYmVkeGV0bW5hdm1oZXNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwMDM2NDEsImV4cCI6MjA3MjU3OTY0MX0.M8m4i7xvYRBEBVwIZaEfQjoMU_ND2qi1GYx9zGK9wqA";

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Exemplo rápido: testar conexão
client.from("clientes").select("*").then(({ data, error }) => {
  if (error) {
    console.error("Erro:", error);
  } else {
    console.log("Dados:", data);
  }
});