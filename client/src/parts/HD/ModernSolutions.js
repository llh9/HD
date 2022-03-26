import React from 'react';
import '../../App.css';

const ModernSolutions = () => {
  return (
    <main>
        <div className="flex-row justify-center ">
            <div className='headerDiv'>
                <h1 className='contentHeader'>
                    Modern Solutions C.O.
                </h1>
                <p className='contentHeader'>
                    A Network Of Trusted Local Companies
                </p>
                {/* <hr style={{color: "yellow"}}></hr> */}
            </div>
            <div className='w-100 flex-row justify-center mt-5'>
                <h2 className='aboutDescription'>
                    descibe the company and what it is we are offering...
                </h2>
            </div>
        </div>
    </main>
  );
};

export default ModernSolutions; 