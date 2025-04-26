import React from 'react';
import { Helmet } from 'react-helmet-async';
import Scholarships from '../../../components/Home/Scholarships';

import StepsComponent from '../../../components/Home/StepsComponent';
import BrowseByDiscipline from '../../../components/Home/BrowseByDiscipline';
import Info from '../../../components/Home/Info';
import Reviews from '../../../components/Home/Reviews';
import SearchBar from '../../../components/Home/SearchBar';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SMS || Choose your desired scholarship</title>
            </Helmet>
            
           
            <Scholarships></Scholarships>
            <StepsComponent></StepsComponent>
            <Info></Info>
            <BrowseByDiscipline></BrowseByDiscipline>
            <Reviews/>

        </div>
    );
};

export default Home;