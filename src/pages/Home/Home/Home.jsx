import React from 'react';
import { Helmet } from 'react-helmet-async';
import Scholarships from '../../../components/Home/Scholarships';

import StepsComponent from '../../../components/Home/StepsComponent';
import BrowseByDiscipline from '../../../components/Home/BrowseByDiscipline';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SMS || Choose your desired scholarship</title>
            </Helmet>
           
            <Scholarships></Scholarships>
            <StepsComponent></StepsComponent>
            <BrowseByDiscipline></BrowseByDiscipline>

        </div>
    );
};

export default Home;