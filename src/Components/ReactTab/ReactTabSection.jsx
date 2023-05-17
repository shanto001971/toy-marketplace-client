import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Card from "../Card/Card";


const ReactTabSection = () => {
    const [catagory, setCatagory] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/catagory')
            .then(res => res.json())
            .then(data => setCatagory(data))
    }, [])



    return (

        <Tabs className={'w-full'}>
            <div className="">
                <TabList className={' flex gap-5'}>
                    <Tab className='btn'>sports car</Tab>
                    <Tab className='btn'>truck</Tab>
                    <Tab className='btn'>mini fire truck</Tab>
                </TabList>
            </div>

            <TabPanel>
                <div className="mx-auto  lg:flex gap-5 m-5 ">
                    {catagory.slice(0, 2).map((singleData, index) => <Card key={index} singleData={singleData}></Card>)}
                </div>
            </TabPanel>
            <TabPanel>
               <div className="mx-auto  lg:flex gap-5 m-5">
               {catagory.slice(2, 4).map((singleData, index) => <Card key={index} singleData={singleData}></Card>)}
               </div>
            </TabPanel>
            <TabPanel>
                <div className="mx-auto lg:flex gap-5 m-5">
                {catagory.slice(4, 6).map((singleData, index) => <Card key={index} singleData={singleData}></Card>)}
                </div>
            </TabPanel>
        </Tabs>

    );
};

export default ReactTabSection;