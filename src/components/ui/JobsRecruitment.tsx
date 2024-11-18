const JobsRecruitment = ( {job}: {job:{title: string, category: string, income: number}} ) => {
  return (
    <div>
      <strong>{job.title}</strong>
    </div>
  )
}

export default JobsRecruitment;