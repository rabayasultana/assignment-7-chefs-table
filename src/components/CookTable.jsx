const CookTable = ({ item, index, handlePreparingBtn }) => {
  return (
    <tr className=" bg-gray-100">
      <td className="py-2 ">{index + 1}</td>
      <td className="py-2 ">{item.recipe_name}</td>
      <td className="py-2 ">{item.preparing_time}</td>
      <td className="py-2 ">{item.calories}</td>
      <td className="py-2 ">
        <button
          onClick={() => handlePreparingBtn(item)}
          className="btn btn-accent rounded-full "
        >
          Preparing
        </button>
      </td>
    </tr>
  );
};

export default CookTable;
