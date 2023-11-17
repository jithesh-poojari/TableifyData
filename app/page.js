"use client"

import { useState } from "react";
import ApiInput from "@components/input/ApiInput";
import DataTable from "@components/table/DataTable";

export default function Home() {
  const [fetchedData, setFetchedData] = useState(null);

  const handleApiSubmit = async (apiUrl) => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setFetchedData(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container flex flex-col min-h-screen gap-4 p-4 mx-auto">
      <h1 className="text-3xl font-semibold ">TableifyData</h1>
      <ApiInput onSubmit={handleApiSubmit} />
      {fetchedData && <DataTable data={fetchedData} />}
    </div>
  );
}
