const DataTable = ({ data }) => {
  const flattenHeaders = (item, parentKey = "") => {
    let flattenedHeaders = [];
    for (const key in item) {
      const currentKey = parentKey ? `${parentKey}.${key}` : key;
      if (typeof item[key] === "object") {
        flattenedHeaders = [
          ...flattenedHeaders,
          ...flattenHeaders(item[key], currentKey),
        ];
      } else {
        flattenedHeaders.push(currentKey);
      }
    }
    return flattenedHeaders;
  };

  const renderData = (item, flattenedHeaders) => {
    const renderCellValue = (value) => {
      return typeof value === "object" ? (
        <DataTable data={value} />
      ) : (
        (value ?? "N/A").toString()
      );
    };

    return flattenedHeaders.map((header, colIndex) => (
      <td
        key={colIndex}
        className="px-2 py-1 border border-gray-200 md:py-2 md:px-4 dark:border-gray-600"
      >
        {header.split(".").reduce((acc, key) => acc?.[key], item) !==
        undefined ? (
          renderCellValue(
            header.split(".").reduce((acc, key) => acc?.[key], item)
          )
        ) : (
          <span className="text-red-500">Undefined</span>
        )}
      </td>
    ));
  };

  let headers;

  if (Array.isArray(data)) {
    headers = flattenHeaders(data[0]);
  } else if (typeof data === "object" && data !== null) {
    headers = flattenHeaders(data);
    data = [data];
  } else {
    return <p className="text-red-500">Invalid data format.</p>;
  }

  return (
    <div className="overflow-x-hidden bg-white border rounded-md shadow-md dark:bg-gray-800 dark:border-gray-600 dark:shadow-gray-700">
      <div className="overflow-auto md:max-h-[76vh] text-sm md:text-base">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-blue-300 dark:bg-blue-800">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-2 py-1 text-gray-800 border border-gray-200 md:py-2 md:px-4 dark:text-gray-300 dark:border-gray-600"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, rowIndex) => (
              <tr
                key={rowIndex}
                className={
                  rowIndex % 2 === 0
                    ? "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                    : "bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                }
              >
                {renderData(item, headers)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
