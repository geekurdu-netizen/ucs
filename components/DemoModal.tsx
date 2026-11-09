// components/DemoModal.tsx (snippet)

async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setState("sending");
  
  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json", 
        Accept: "application/json" 
      },
      body: JSON.stringify({
        access_key: "d042d505-9245-4079-a8e4-d0a1bcfc83e8",
        subject: `UCS website: ${kind} from ${data.name}`,
        from_name: "UCS Website",
        Name: data.name,
        Phone: data.phone,
        Business: data.business || "-",
        "Monthly Shipments": data.volume || "-",
        Message: data.message || "-",
        Request_Type: kind,
      }),
    });

    const result = await res.json();
    
    if (result.success) {
      setState("done");
    } else {
      setErr(result.message || "Something went wrong. Please try again.");
      setState("error");
    }
  } catch (error) {
    setErr("Network problem. Please try again.");
    setState("error");
  }
}