import React, { useState, useEffect } from "react";
import "./App.css";
import buildHasuraProvider from "ra-data-hasura";
import client from "../apolloClient";
import { Admin, Resource, ListGuesser, EditGuesser, Create } from "react-admin";
import { JobCreate ,JobList,JobEdit} from "../src/components/JobList";
import { UserCreate, UserEdit, UserList } from "../src/components/UserList";
import {PictureCreate,PictureList,PictureEdit} from "../src/components/PictureList";
import {ProjectCreate,ProjectList, ProjectEdit} from "../src/components/ProjectList";
import {SquadCreate,SquadList,SquadEdit} from "../src/components/SquadList";
import {BusinessList,BusinessEdit,BusinessCreate} from '../src/components/BusinessList'
import {SkillList,SkillEdit,SkillCreate} from '../src/components/SkillList'
function App() {
  const [dataProvider, setDataProvider] = useState(null);

  useEffect(() => {
    const buildDataProvider = async () => {
      const dataProvider = await buildHasuraProvider({
        client: client,
      });
      setDataProvider(() => dataProvider);
    };
    buildDataProvider();
  }, []);

  if (!dataProvider) return <p>Loading...</p>;

  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="User"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
      <Resource name="Job" list={JobList} create={JobCreate} edit={JobEdit}/>
      <Resource name="Picture" list={PictureList} create={PictureCreate} edit={PictureEdit}/>
      <Resource name="Project" edit={ProjectEdit} list={ProjectList} create={ProjectCreate} />
      <Resource name="Squad" list={SquadList} create={SquadCreate} edit={SquadEdit} />
      <Resource name="BusinessSector" list={BusinessList} create={BusinessCreate} edit={BusinessEdit}/>
      <Resource name="Skill" list={SkillList} edit={SkillEdit} create={SkillCreate} />

      
      
     
    </Admin>
  );
}

export default App;
