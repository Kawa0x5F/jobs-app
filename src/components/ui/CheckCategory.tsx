import { FC } from "react";

type CheckCategoryProps = {
  categoryList: string[]; // カテゴリのリスト
  checkedList: string[]; // カテゴリで選択されたもののリスト
  onCheckedListChange: (checkedList: string[]) => void; // 選択しているカテゴリの変更をする
};

const SelectJobs: FC<CheckCategoryProps> = ({
  categoryList,
  checkedList,
  onCheckedListChange,
}) => {

    // 選択しているカテゴリの変更をする
    const handleCheckboxChange = (value: string) => {
        const newCheckedItems = checkedList.includes(value)
        ? checkedList.filter((item) => item !== value)
        : [...checkedList, value];

        // App.tsxに選択情報をリフトアップ
        onCheckedListChange(newCheckedItems);
    };

    return (
        <div>
        {categoryList.map((category) => (
            <div key={category}>
            <label>
                <input
                type="checkbox"
                checked={checkedList.includes(category)} // 選択しているリストに含まれているならtrue
                onChange={() => handleCheckboxChange(category)} // 変更があったらhandle関数に飛ばす
                />
                {category}
            </label>
            </div>
        ))}
        </div>
    );
};

export default SelectJobs;
