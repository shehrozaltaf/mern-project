import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Max Schwarz',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      places: 3
    },
    {
      id: 'u2',
      name: 'Shehroz Altaf',
      image:
          'https://scontent.fkhi10-1.fna.fbcdn.net/v/t1.0-1/p160x160/70724097_2851808901515520_7103741754280509440_n.jpg?_nc_cat=111&_nc_ohc=KzdBW_E39_wAQl19BPlnkYwSgDEQ8D38JiFZfO5pCVroigct5wrlagLLw&_nc_ht=scontent.fkhi10-1.fna&oh=6e448672a27ea9934a8dc7924ecb3475&oe=5E978190',
      places: 5
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
