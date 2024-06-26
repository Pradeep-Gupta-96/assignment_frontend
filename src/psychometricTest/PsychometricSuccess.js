import React from 'react'
import videobg from '../images/background-video.mp4';
import { colors } from '@mui/material';

const PsychometricSuccess = () => {
  return (
    <>
    
            <div className="form-sce">
                <video className='background-video' autoPlay loop muted > <source src={videobg} type="video/mp4" /> </video>
                <div className="bound">
                    <div className="form-box">
                        {/* <Link className="back-link" to="/">Back to Job Posting</Link> */}
                        <h3>Psychometric Test</h3>
                        <form className='top-form'>
                          <p style={{color:'green'}}>Psychometric Successfully Submitted</p>
                        </form>
                        
                        
                    </div>
                </div>
            </div>
            
    </>
    
  )
}

export default PsychometricSuccess