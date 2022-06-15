import React, { useState } from "react";

function CustomerPage() {
  const [customerName, setCustomerName] = useState("Emma");
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Hi {customerName}, weclome to your bike servicing page</h2>
    </div>
  );
}

export default CustomerPage;
