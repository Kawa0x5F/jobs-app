import './../../App.css'

const ShowJobs = ({jobsList}: any) => {
    return (
        <div>
            <h1>求人検索一覧</h1>
            {jobsList.map((job: {title: string, category: string, income: number}, index: number) => {
                return (
                    <div className='border-4 m-5 rounded-md'>
                        <h2 className='pt-2 pl-2'><strong>{job.title}</strong></h2>
                        <p className='pt-2 pl-2'>カテゴリ:{job.category}</p>
                        <p className='pt-2 pl-2 pb-10'>年収:{job.income}万円</p>
                    </div>
                );
            })}
        </div>
    )
}

export default ShowJobs;