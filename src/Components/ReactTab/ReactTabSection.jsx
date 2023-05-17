import { Tab, TabList, TabPanel, Tabs } from "react-tabs";


const ReactTabSection = () => {
    return (
     
            <Tabs className={'w-full'}>
                <div className="">
                <TabList className={' flex'}>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                    <Tab>Title 3</Tab>
                    <Tab>Title 4</Tab>
                </TabList>
                </div>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 4</h2>
                </TabPanel>
            </Tabs>
        
    );
};

export default ReactTabSection;