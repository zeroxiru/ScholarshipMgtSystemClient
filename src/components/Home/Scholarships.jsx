import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LoadingSpinner from '../shared/LoadingSpinner';
import Container from '../shared/Container';
import Card from './Card';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Scholarships = () => {
    const { data: scholarships, isLoading} = useQuery( { 
        queryKey: ['filtered-scholarships'],
        queryFn: async () => { 
            const { data: {data=[]}={}} =
             await axios(`${import.meta.env.VITE_API_URL}/filtered-scholarships`)
            return data
        }
       
    })
    console.log(scholarships);
    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    return (
        <div>
            <Container>
            { 
                scholarships && scholarships.length > 0
                ?
                 ( <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>{
                    scholarships.map(scholarship =>( 
                        <Card key={scholarship._id} scholarship={scholarship}> </Card>
                    ))
                 } </div>)
                :
                <p>No data Available in the Database</p>
            }
            </Container>
            <Link to='/all-scholarships'>   <button className="btn bg-slate-500 mt-5  justify-center">See all Scholarships</button></Link>
        </div>
    );
};

export default Scholarships;