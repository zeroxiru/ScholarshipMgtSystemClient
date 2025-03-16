import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-[1700px] xl:px-15 md:px-10 sm:px-2 px-4'>
      {children}
    </div>
    );
};

export default Container;