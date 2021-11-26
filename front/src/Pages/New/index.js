import React, { useEffect } from "react";
import { View, Text, } from "react-native";

import apiGoogle, { YOUR_API_KEY } from "../../Services/Api/api";
import axios from "axios";

import Header from "../../Components/Header";

const NewInfos = () => {

  useEffect(()=>{
    const user = async () => {
   
      // try{
      //   const result = await apiGoogle.get(
      //     `fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&key=${YOUR_API_KEY}`
      //   );
      //   console.log(JSON.stringify(result.data));
      //   alert("suceeos")
      // }catch(error){
      //   console.log(error);
      //   alert('error')
      // }
    };
    user();
  },[])
  


  return (
    <View>
      <Header />
    </View>
  );
};

export default NewInfos;