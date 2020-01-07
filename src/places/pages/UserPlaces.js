import React from 'react';
import {useParams} from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const Dummy_Places = [
    {
        id: "p1",
        title: "Empire State Building",
        imageUrl: "https://lh5.googleusercontent.com/p/AF1QipP6DUOn5UGrHCK2HtNrTcIS18LAbjKPC2kWEyi5=w408-h271-k-no",
        description: "One of the most famous location",
        address: "20 W 34th St, New York, NY 10001, United States",
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: "u1",
    }, {
        id: "p2",
        title: "34 St-Herald Sq",
        imageUrl: "https://lh5.googleusercontent.com/p/AF1QipP6DUOn5UGrHCK2HtNrTcIS18LAbjKPC2kWEyi5=w408-h271-k-no",
        description: "One of the most famous location 2",
        address: "Q226+2P New York, United States",
        location: {
            lat: 40.7484445,
            lng: -73.9878531
        },
        creator: "u2",
    },
    {
        id: 'p3',
        title: 'Broadway Theatre',
        description: 'roadway theater dating to 1924 known for hosting large musical productions in its 1,761-seat space.',
        imageUrl:
            'https://lh5.googleusercontent.com/p/AF1QipNsN2r6daxPpEPetrAvJgacoQBD4Tc3bH-vLsZI=w427-h240-k-no',
        address: '1681 Broadway, New York, NY 10019',
        location: {
            lat: 40.763024,
            lng: -73.984522
        },
        creator: 'u1'
    }
];
const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = Dummy_Places.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces}/>
};

export default UserPlaces;