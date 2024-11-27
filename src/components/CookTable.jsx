const CookTable = ({ item, index, handlePreparingBtn }) => {
  return (
    <tr className="bg-gray-100 text-center">
  <td className="py-3 px-2">{index + 1}</td>
  <td className="py-3 px-2 text-left">{item.recipe_name}</td>
  <td className="py-3 px-6">{item.preparing_time}</td>
  <td className="py-3 px-6">{item.calories}</td>
  <td className="py-3">
    <button
      onClick={() => handlePreparingBtn(item)}
      className="btn btn-accent bg-[#0BE58A] rounded-full px-4 py-2"
    >
      Preparing
    </button>
  </td>
</tr>

  );
};

export default CookTable;
