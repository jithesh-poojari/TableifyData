const DataTable = ({ data }) => {
  // Function to recursively render data
  const renderData = (item, headers) => {
    return headers.map((header, colIndex) => (
      <td key={colIndex} className="px-2 py-1 md:py-2 md:px-4">
        {typeof item[header] === 'object' ? (
          // If the property is an object, render it recursively
          <DataTable data={item[header]} />
        ) : (
          // Display other properties directly
          item[header].toString() 
        )}
      </td>
    ));
  };

  let headers;

  if (Array.isArray(data)) {
    // If data is an array, use the keys of the first object as headers
    headers = Object.keys(data[0]);
  } else if (typeof data === 'object' && data !== null) {
    // If data is an object, use its keys as headers
    headers = Object.keys(data);
    // Convert the object into an array for rendering
    data = [data];
  } else {
    // If data is not an array or object, display an error message
    return <p className="text-red-500">Invalid data format.</p>;
  }

  return (
    <div className="overflow-x-hidden bg-white border rounded-md shadow-md dark:bg-gray-800 dark:border-gray-600 dark:shadow-gray-700 ">
      <div className="overflow-auto md:max-h-[76vh] text-sm md:text-base" >
        <table className="min-w-full">
          <thead>
            <tr className="bg-blue-300 dark:bg-blue-800">
              {headers.map((header, index) => (
                <th key={index} className="px-2 py-1 text-gray-800 md:py-2 md:px-4 dark:text-gray-300">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, rowIndex) => (
              <tr key={rowIndex} className={(rowIndex % 2 === 0) ? 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200' : 'bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-200'}>
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
