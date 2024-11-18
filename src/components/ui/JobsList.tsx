import JobsRecruitment from "./JobsRecruitment";

const JobsList = ({jobsList}: any) => {
	return (
		jobsList.map((job: {title: string, category: string, income: number}, index: number) => <JobsRecruitment job={job}/>)
	)
}

export default JobsList;