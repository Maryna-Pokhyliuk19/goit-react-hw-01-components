import { Profile } from './Profile';
import { Statistic } from './Statistics';
import user from './user.json';
import data from './data.json'

export const App = () => {
  return (
    <div>
      <Profile profile={user} />
      <Statistic statistic={data} />
    </div>
  );
};
