import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CardsByCategory from './CardsByCategory';

const BrowseByCategory = ({ allJobs }) => {

    return (
        <div className=''>
            <div className='w-4/5 mx-auto my-10'>
                <Tabs>
                    <TabList className={"text-center border-2 border-lime-600"}>
                        <Tab>Web Development</Tab>
                        <Tab>Digital Marketing</Tab>
                        <Tab>Graphic Design</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
                            {
                                allJobs.map(allJob => allJob.category === 'Web Development' && <CardsByCategory key={allJob._id} allJob={allJob}></CardsByCategory>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
                            {
                                allJobs.map(allJob => allJob.category === 'Digital Marketing' && <CardsByCategory key={allJob._id} allJob={allJob}></CardsByCategory>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
                            {
                                allJobs.map(allJob => allJob.category === 'Graphic Design' && <CardsByCategory key={allJob._id} allJob={allJob}></CardsByCategory>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default BrowseByCategory;