import user from '../user.json'
import data from '../data.json';
import { Profile } from './Profile/Profile';
import { Statistic } from './Statistics/Statistics';

export const App = () => {
  return (
    <>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data}/>
    </>
  );
};
