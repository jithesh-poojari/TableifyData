"use client";

import { useState } from "react";
import ApiInput from "@components/input/ApiInput";
import DataTable from "@components/table/DataTable";
import Header from "@components/header/Header";

export default function Home() {
  const [fetchedData, setFetchedData] = useState(null);

  const handleApiSubmit = async (apiUrl) => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setFetchedData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container flex flex-col gap-4 p-4 mx-auto">
        <Header />
        <ApiInput onSubmit={handleApiSubmit} />
        {fetchedData && <DataTable data={fetchedData} />}
      </div>
    </div>
  );
}
