
const CookingTable = ({ item, index }) => {
    return (
        <tr className="bg-gray-100">
      <td className="py-2">{index + 1}</td>
      <td className="py-2">{item.recipe_name}</td>
      <td className="py-2">{item.preparing_time}</td>
      <td className="py-2">{item.calories}</td>
    </tr>
    );
};

export default CookingTable;