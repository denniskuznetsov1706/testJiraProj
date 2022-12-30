/* eslint-disable */
// @ts-nocheck

/* eslint linebreak-style: ["error", "windows"] */

import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import { getAllProjects, getSomeData } from '../service/common_API';

function MainPage() {



    useEffect(()=>{
        (async()=>{

            const projData = await invoke('getAllProjects')  // FROM BACK-END FORGE API

            console.log('projData',projData)


            console.log('projName',projData.map(item=>item.name ))


            const data2 = await getAllProjects()

            console.log('data2',data2)


            const data3 = await getSomeData()

            console.log('data3',data3)




        })()
    },[])





    return (
        <div>
            Hello from Smart Kriviy Rih
        </div>
    );
}

export default MainPage;
