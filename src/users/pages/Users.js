import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {id: 1, name: 'Max Sche', image: '', places: 3},
        {id: 2, name: 'Shehroz', image: 'https://miro.medium.com/fit/c/256/256/0*BHzmBK43DIDH90YD.jpg', places: 5}
    ];
    return <UsersList items={USERS}/>
};

export default Users;