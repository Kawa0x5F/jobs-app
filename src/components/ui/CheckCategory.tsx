import { FC } from "react";

type CheckCategoryProps = {
  categoryList: string[];
  checkedItems: string[];
  onCheckedItemsChange: (checkedItems: string[]) => void;
};

const CheckCategory: FC<CheckCategoryProps> = ({
  categoryList,
  checkedItems,
  onCheckedItemsChange,
}) => {
  const handleCheckboxChange = (value: string) => {
    const newCheckedItems = checkedItems.includes(value)
      ? checkedItems.filter((item) => item !== value)
      : [...checkedItems, value];

    onCheckedItemsChange(newCheckedItems);
  };

  return (
    <div>
      {categoryList.map((category) => (
        <div key={category}>
          <label>
            <input
              type="checkbox"
              checked={checkedItems.includes(category)}
              onChange={() => handleCheckboxChange(category)}
            />
            {category}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckCategory;
