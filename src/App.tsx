import { useEffect, useState } from "react";
import "./App.css";
import ShowJobs from "./components/ui/ShowJobs";
import CheckCategory from "./components/ui/CheckCategory";

function App() {
  const jobsArray = [
    { title: "募集1", category: "エンジニア", income: 400 },
    { title: "募集2", category: "事務", income: 300 },
    { title: "募集3", category: "エンジニア", income: 500 },
    { title: "募集4", category: "営業", income: 400 },
    { title: "募集5", category: "エンジニア", income: 600 },
  ];

  const [jobsRecruitment, setJobsRecruitment] = useState(jobsArray);

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

  useEffect(() =>{
    if (checkedList.length == 0){
      setJobsRecruitment(jobsArray);
    } else {
      const checkedCategory = jobsArray.filter((job) =>
        checkedList.includes(job.category)
      );
      setJobsRecruitment(checkedCategory);
    }
  }, [checkedList, jobsArray]);

  return (
    <div className="grid grid-cols-2">
      <div>
        <h4>求人カテゴリ</h4>
        <CheckCategory
          categoryList={categoryList}
          checkedList={checkedList}
          onCheckedListChange={handleCheckedListChange}
        />
      </div>
      {/* <div>
        <h2>チェックされている項目:</h2>
        <p>{checkedItems.join(", ")}</p>
      </div> */}
      <div>
        <ShowJobs jobsList={jobsRecruitment} />
      </div>
    </div>
  );
}

export default App;
