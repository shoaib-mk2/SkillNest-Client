
const SiteStats = () => {
    return (
        <div className="bg-base-300 py-28 mb-9">
            <div className='w-4/5 mx-auto text-center'>
                <h2 className='text-2xl md:text-4xl font-bold mb-4'>SkillNest Site Stats</h2>
                <p className="mb-12">Here we list our site stats and how many people we’ve helped find a job and companies have found recruits. It's a pretty awesome stats area!</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-5'>
                    <div className="border-r-2 border-lime-600 py-10">
                        <p className='text-3xl font-semibold'>10</p>
                        <p className='font-semibold'>Jobs Posted</p>
                    </div>
                    <div className="border-r-2 border-lime-600 py-10">
                        <p className='text-3xl font-semibold'>0</p>
                        <p className='font-semibold'>Jobs Filled</p>
                    </div>
                    <div className="border-r-2 border-lime-600 py-10">
                        <p className='text-3xl font-semibold'>15</p>
                        <p className='font-semibold'>Companies</p>
                    </div>
                    <div className="py-10">
                        <p className='text-3xl font-semibold'>1000</p>
                        <p className='font-semibold'>Members</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SiteStats;