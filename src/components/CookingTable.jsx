
const CookingTable = ({ item, index }) => {
    return (
        <tr className="bg-gray-100 text-center">
      <td className="py-3 px-2">{index + 1}</td>
      <td className="py-3 px-6 text-left">{item.recipe_name}</td>
      <td className="py-3 px-6">{item.preparing_time}</td>
      <td className="py-3 px-6">{item.calories}</td>
    </tr>
    );
};

export default CookingTable;