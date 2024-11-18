import { useState } from 'react';
import './App.css';
import JobsList from './components/ui/JobsList';

function App() {

  const [jobsRecruitment, setJobsRecruitment] = useState([
    // ["Jobs1", "Jobs2"]
    {title: "募集1", category: "エンジニア", income: 400},
    {title: "募集2", category: "事務", income: 300},
  ])

  return (
   <div>
    <h1><strong>求人検索一覧</strong></h1>
    <JobsList jobsList={jobsRecruitment}/>
   </div>
  );
}

export default App;
