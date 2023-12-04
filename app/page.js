"use client";

import { useState } from "react";
import ApiInput from "@components/input/ApiInput";
import DataTable from "@components/table/DataTable";
import Header from "@components/header/Header";

export default function Home() {
  const [fetchedData, setFetchedData] = useState(null);

  const handleApiSubmit = async (apiType, apiValue) => {
    try {
      let data;
      if (apiType === "json file") {
        const fileContent = await readFileContents(apiValue);
        data = JSON.parse(fileContent);
      } else if (apiType === "json text") {
        console.log(apiValue);
        data = JSON.parse(apiValue);
      } else if (apiType === "api url") {
        const response = await fetch(apiValue);
        data = await response.json();
      } else {
        console.error("Select correct Format and give Input");
      }
      setFetchedData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const readFileContents = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
  };

  return (
    <div className="min-h-screen">
      <div className="container flex flex-col gap-2 p-2 mx-auto md:gap-4 md:p-4">
        <Header />
        <ApiInput onSubmit={handleApiSubmit} />
        {fetchedData && <DataTable data={fetchedData} />}
      </div>
    </div>
  );
}
