import React, { useState, useEffect } from 'react';
import { Admin, Resource, ListGuesser, EditGuesser, Create } from 'react-admin';
import './App.css';
import client from '../apolloClient';
import buildHasuraProvider from 'ra-data-hasura';
import { userCreate, userEdit } from '../src/components/UserList';
import pictureCreate from '../src/components/PictureList';
import projectCreate from '../src/components/ProjectList';
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
        list={ListGuesser}
        create={userCreate}
        edit={userEdit}
      />
      <Resource name="Picture" list={ListGuesser} create={pictureCreate} />
      <Resource name="BusinessSector" list={ListGuesser} />
      <Resource name="Skill" list={ListGuesser} />
      <Resource name="Job" list={ListGuesser} />
      <Resource name="Squad" list={ListGuesser} />
      <Resource name="squads" />
      <Resource name="Project" list={ListGuesser} create={projectCreate} />
      <Resource name="businesses" list={ListGuesser} />
    </Admin>
  );
}

export default App;
