/* eslint-disable */
// @ts-nocheck

/* eslint linebreak-style: ["error", "windows"] */

import { invoke, requestJira } from '@forge/bridge'


export const getAllProjects = async (userId) => {
    const jiraUser = await requestJira(`/rest/api/3/project`)
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => error)
    return await jiraUser
  }


  export const getSomeData = async () => {
    const jiraUser = await requestJira(`/rest/api/3/search?jql=project+%3D+FEN+order+by+created+DESC`)
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => error)
    return await jiraUser
  }