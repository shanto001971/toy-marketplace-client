import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Category from "./Category/Category";



const ReactTabSection = () => {
    const [categories, setCategories] = useState([]);
    console.log(categories)
    
    // const handleSubCategories = {

    // }


    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])



    return (

        <Tabs forceRenderTabPanel defaultIndex={1}>
            <TabList cl>
                <Tab>Sports Car</Tab>
                <Tab>Truck</Tab>
                <Tab>Regular car</Tab>
            </TabList>
            {/* {
                categories.map(category => <Category
                key={category.id}
                category={category}
                ></Category>)
            } */}
            <TabPanel>
                <Tabs forceRenderTabPanel>
                    <TabList>
                        <Tab>Super cars</Tab>
                        <Tab>Muscle cars</Tab>
                        <Tab>Exotic cars</Tab>``
                        
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
            <TabPanel>
                <Tabs forceRenderTabPanel>
                    <TabList>
                        <Tab>Construction truck</Tab>
                        <Tab>Monster trucks </Tab>
                        <Tab>Pickup trucks</Tab>
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
            <TabPanel>
                <Tabs forceRenderTabPanel>
                    <TabList>
                        <Tab>Sedans</Tab>
                        <Tab>Hatchbacks</Tab>
                        <Tab>Convertibles</Tab>
                       
                    </TabList>
                    <TabPanel>
                        <p>Protagonist, from the 20th Century. Delivery boy. Many times great-uncle to Professor Hubert Farnsworth. Suitor of Leela.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Philip_Fry.png/175px-Philip_Fry.png" alt="Philip J. Fry" />
                    </TabPanel>
                    <TabPanel>
                        <p>Mutant cyclops. Captain of the Planet Express Ship. Love interest of Fry.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Turanga_Leela.png/150px-Turanga_Leela.png" alt="Turanga Leela" />
                    </TabPanel>
                    <TabPanel>
                        <p>A kleptomaniacal, lazy, cigar-smoking, heavy-drinking robot who is Fry's best friend. Built in Tijuana, Mexico, he is the Planet Express Ship's cook.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Bender_Rodriguez.png/220px-Bender_Rodriguez.png" alt="Bender Bending Rodriguez" />
                    </TabPanel>
                    <TabPanel>
                        <p>Chinese-Martian intern at Planet Express. Fonfon Ru of Kif Kroker.</p>
                    </TabPanel>
                </Tabs>
            </TabPanel>
        </Tabs>

    );
};

export default ReactTabSection;