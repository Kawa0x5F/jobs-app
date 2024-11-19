import { useEffect, useState } from "react";
import "./App.css";
import ShowJobs from "./components/ui/ShowJobs";
import CheckCategory from "./components/ui/CheckCategory";
import DropDown from "./DropDown";

function App() {
  const jobsArray = [
    { title: "募集1", category: "エンジニア", income: 400 },
    { title: "募集2", category: "事務", income: 300 },
    { title: "募集3", category: "エンジニア", income: 500 },
    { title: "募集4", category: "営業", income: 400 },
    { title: "募集5", category: "エンジニア", income: 600 },
  ];

  const [jobsRecruitment, setJobsRecruitment] = useState(jobsArray);

  const incomeList = [
    {value: 0, label: '設定しない'},
    {value: 100, label: '100万円以上'},
    {value: 200, label: '200万円以上'},
    {value: 300, label: '300万円以上'},
    {value: 400, label: '400万円以上'},
    {value: 500, label: '500万円以上'},
    {value: 600, label: '600万円以上'},
    {value: 700, label: '700万円以上'},

  ];

  const [checkedList, setCheckedList] = useState<string[]>([]);

  const categoryList = [
    "事務",
    "エンジニア",
    "営業",
    "デザイン",
    "マーケティング",
    "財務・経理",
    "人事",
    "カスタマーサポート",
    "製造",
    "医療・介護",
  ];

  const handleCheckedListChange = (newCheckedItems: string[]) => {
    setCheckedList(newCheckedItems);
  };

  // 年収のボックスの値が変更されたらそれにあった求人だけをフィルタする
  const handleIncomeChange = (newValue: number) => {
    console.log(newValue)
    setJobsRecruitment(jobsArray.filter((job) => job.income >= newValue));
  };

  useEffect(() =>{
    if (checkedList.length == 0){
      setJobsRecruitment(jobsArray);
    } else {
      const checkedCategory = jobsArray.filter((job) =>
        checkedList.includes(job.category)
      );
      setJobsRecruitment(checkedCategory);
    }
  }, [checkedList]);

  return (
    <div className="grid grid-cols-2">
      <div>
        <h4>求人カテゴリ</h4>
        <CheckCategory
          categoryList={categoryList}
          checkedList={checkedList}
          onCheckedListChange={handleCheckedListChange}
        />
        <DropDown<number>
          valueList={incomeList}
          onChange={handleIncomeChange}
        />
      </div>
      <div>
        <ShowJobs jobsList={jobsRecruitment} />
      </div>
    </div>
  );
}

export default App;
