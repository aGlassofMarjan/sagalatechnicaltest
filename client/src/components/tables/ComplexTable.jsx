const ComplexTable = ({ data }) => {
  const getTextColor = (platform) => {
    if (platform === "Android") return "badge badge-primary";  // Green for Android
    if (platform === "Microsoft") return "badge badge-secondary"; // Maroon for Microsoft
    return "badge badge-accent"; // Default text color for other platforms
  };

  return (
    <>
      <div className="sm:col-span-2 md:col-span-2">
        <p className="text-xl font-bold">Complex Table</p>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Platform</th>
                <th>Date</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td className={getTextColor(item.tech)}>{item.tech}</td>
                  <td>{item.date}</td>
                  <td><progress className="progress progress-secondary w-20" value={item.percentage} max="100"></progress></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ComplexTable