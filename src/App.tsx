import { useState } from 'react';
import './App.css';
import ShowJobs from './components/ui/ShowJobs';

function App() {

  const [jobsRecruitment, setJobsRecruitment] = useState([
    // ["Jobs1", "Jobs2"]
    {title: "募集1", category: "エンジニア", income: 400},
    {title: "募集2", category: "事務", income: 300},
  ])

  return (
   <div>
      <ShowJobs jobsList={jobsRecruitment} />
   </div>
  );
}

export default App;
