import React, {useState} from 'react'
import Header from '../../components/common/header';
import TabOptions from '../../components/common/tabOptions';
import Footer from '../../components/common/footer'
import Nightlife from '../../components/nightLife';
import Delivery from '../../components/delivery';
import DiningOut from '../../components/diningOut';

const HomePage = () => {

    const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div>
      <Header/>
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
      {getCorrectScreen(activeTab)}
      <Footer/>
    </div>
  )
}

const getCorrectScreen=(tab)=>{

  switch(tab){
    case "Delivery":
      return<Delivery/>
    case "DiningOut":
      return<DiningOut/>
    case "NightLife":
      return<Nightlife/>
    default:
      return<Delivery/>
  }

}

export default HomePage;
