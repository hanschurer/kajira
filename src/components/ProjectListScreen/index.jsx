import React,{useEffect, useState} from 'react'
import ProjectList from './ProjectList'
import SearchPanel from './SearchPanel'
import {cleanObj,useMount,useDebounce} from '../../utils/'
import qs from 'qs'

const apiUrl=process.env.REACT_APP_API_URL

function ProjectListScreen() {
  const [param, setParam] = useState({ name: "", personId: "" });
  const [proList, setProList] = useState([]);
  const [users, setUsers] = useState([]);
  const debouncedParam=useDebounce(param, 2000)

    useEffect(() => {
      fetch(`${apiUrl}/projects?${qs.stringify(cleanObj(debouncedParam))}`).then(async (response) => { 
        if (response.ok) {
          setProList(await response.json());
        }
      });
    }, [debouncedParam]);

    useMount(() => {
      fetch(`${apiUrl}/users`).then(async (response) => {
        if (response.ok) {
          setUsers(await response.json());
        }
      });
    });


  return (
    <>
    <SearchPanel param={param} setParam={setParam} users={users}/>
    <ProjectList proList={proList} users={users} />
    </>
  )
}

export default ProjectListScreen