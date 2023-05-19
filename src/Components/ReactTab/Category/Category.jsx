import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = ({ category }) => {
    return (
        <TabPanel>
            <Tabs forceRenderTabPanel>
                <TabList>
                    <Tab>Supercars</Tab>
                    <Tab>Muscle cars</Tab>
                    <Tab>Exotic cars</Tab>

                </TabList>
                <TabPanel>
                    <p>Husband of Marge; father of Bart, Lisa, and Maggie.</p>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Homer_Simpson_2006.png/212px-Homer_Simpson_2006.png" alt="Homer Simpson" />
                </TabPanel>
                <TabPanel>
                    <p>Wife of Homer; mother of Bart, Lisa, and Maggie.</p>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Marge_Simpson.png/220px-Marge_Simpson.png" alt="Marge Simpson" />
                </TabPanel>
                <TabPanel>
                    <p>Oldest child and only son of Homer and Marge; brother of Lisa and Maggie.</p>
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png" alt="Bart Simpson" />
                </TabPanel>
            </Tabs>
        </TabPanel>
    );
};

export default Category;