import { useContext, useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import ToyCard from "./ToyCard/ToyCard";




const ReactTabSection = () => {
    const [subCategory, setSubCategory] = useState("Construction truck");
    const [toysInfo, setToysInfo] = useState([]);

    const handleValue = (value) => {
        const category = value;
        setSubCategory(category)
    }

    useEffect(() => {
        fetch(`http://localhost:5000/toys/subCategory?subCategory=${subCategory}`)
            .then(res => res.json())
            .then(data => setToysInfo(data))
    }, [subCategory])


    return (

        <div className="text-center">
            <div className="my-10 border p-10 text-end">
                <h1 className="text-4xl font-serif">Select Your Favorite Category</h1>
                <p className="text-2xl font-thin mt-3">Some Best Toy Category is Hare You Can See Your Favorite Toy</p>
            </div>
            <Tabs forceRenderTabPanel defaultIndex={1} className={'mt-20'}>
                <TabList cl>
                    <Tab>Sports Car</Tab>
                    <Tab>Truck</Tab>
                    <Tab>Regular car</Tab>
                </TabList>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList>
                            <Tab onClick={() => handleValue("Super Cars")} >Super cars</Tab>
                            <Tab onClick={() => handleValue("Muscle cars")}>Muscle cars</Tab>
                            <Tab onClick={() => handleValue("Exotic cars")}>Exotic cars</Tab>``

                        </TabList>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-5">
                                {
                                    toysInfo.map(toyInfo => <ToyCard
                                        key={toyInfo._id}
                                        toyInfo={toyInfo}
                                    ></ToyCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-5">
                                {
                                    toysInfo.map(toyInfo => <ToyCard
                                        key={toyInfo._id}
                                        toyInfo={toyInfo}
                                    ></ToyCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-5">
                                {
                                    toysInfo.map(toyInfo => <ToyCard
                                        key={toyInfo._id}
                                        toyInfo={toyInfo}
                                    ></ToyCard>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList>
                            <Tab onClick={() => handleValue("Construction truck")}>Construction truck</Tab>
                            <Tab onClick={() => handleValue("Monster trucks")}>Monster trucks </Tab>
                            <Tab onClick={() => handleValue("Pickup trucks")}>Pickup trucks</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-5">
                                {
                                    toysInfo.map(toyInfo => <ToyCard
                                        key={toyInfo._id}
                                        toyInfo={toyInfo}
                                    ></ToyCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-5">
                                {
                                    toysInfo.map(toyInfo => <ToyCard
                                        key={toyInfo._id}
                                        toyInfo={toyInfo}
                                    ></ToyCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-5">
                                {
                                    toysInfo.map(toyInfo => <ToyCard
                                        key={toyInfo._id}
                                        toyInfo={toyInfo}
                                    ></ToyCard>)
                                }
                            </div>
                        </TabPanel>

                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList>
                            <Tab onClick={() => handleValue("Sedans")}>Sedans</Tab>
                            <Tab onClick={() => handleValue("Hatchbacks")}>Hatchbacks</Tab>
                            <Tab onClick={() => handleValue("Convertibles")}>Convertibles</Tab>

                        </TabList>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-5">
                                {
                                    toysInfo.map(toyInfo => <ToyCard
                                        key={toyInfo._id}
                                        toyInfo={toyInfo}
                                    ></ToyCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-5">
                                {
                                    toysInfo.map(toyInfo => <ToyCard
                                        key={toyInfo._id}
                                        toyInfo={toyInfo}
                                    ></ToyCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-5">
                                {
                                    toysInfo.map(toyInfo => <ToyCard
                                        key={toyInfo._id}
                                        toyInfo={toyInfo}
                                    ></ToyCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <p>Chinese-Martian intern at Planet Express. Fonfon Ru of Kif Kroker.</p>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>
        </div>

    );
};

export default ReactTabSection;