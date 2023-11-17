const DataTable = ({ data }) => {
  // Function to recursively render data
  const renderData = (item, headers) => {
    return headers.map((header, colIndex) => (
      <td key={colIndex} className="px-4 py-2">
        {typeof item[header] === 'object' ? (
          // If the property is an object, render it recursively
          <DataTable data={item[header]} />
        ) : (
          // Display other properties directly
          item[header].toString() // Convert boolean values to strings
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
    <div className="overflow-hidden rounded-md shadow-md">
      <div className="overflow-auto max-h-[76vh] ">
        <table className="min-w-full bg-white " >
          <thead>
            <tr className="bg-blue-300">
              {headers.map((header, index) => (
                <th key={index} className="px-4 py-2">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, rowIndex) => (
              <tr key={rowIndex} className={(rowIndex % 2 === 0) ? 'bg-gray-50' : 'bg-white'}>
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
