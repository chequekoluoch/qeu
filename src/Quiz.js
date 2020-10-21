import React from 'react'
import './Quiz.css'
const Quiz = () => {
    return (
        <div style={{display:'flex',boxSizing:'border-box',borderBottom:'1px solid grey'}}>
            <div className='tags' style={{display:'flex',width:'220px',marginRight:'12px'}}>
                <div className="votes"  style={{boxSizing:'border-box',textAlign:'center',padding:'10px', borderRadius:'4px',backgroundColor:'#ccc', fontSize:'18px', marginRight:'4px'}}>
                    <div>0</div>
                    <div>votes</div>
                </div>
                <div className="answers" style={{boxSizing:'border-box',textAlign:'center',padding:'10px', borderRadius:'4px',backgroundColor:'#ccc', fontSize:'18px', marginRight:'4px'}}>
                <div>0</div>
                    <div>answers</div>
                </div>
                <div className="views" style={{boxSizing:'border-box',textAlign:'center',padding:'10px', borderRadius:'4px',backgroundColor:'#ccc', fontSize:'18px', marginRight:'10px'}}>
                <div>0</div>
                    <div>views</div>
                </div>
            </div>

            <div className="que" style={{display:'flex',padding:'10px',flexDirection:'column',backgroundColor:'#ccc', width:'600px',marginLeft:'5px'}}>
                <div className='quiz__title' style={{marginBottom:'10px'}}>Connect 4 check for a win algorithmgcxfcghjbkn ighv  b Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, temporibus.
                </div>
                <div className="" style={{display:'flex', justifyContent:'space-between'}}>
                  <div className='languages' style={{display:'flex'}}>
                      <button style={{marginRight:'5px'}}>Java</button>
                      <button style={{marginRight:'5px'}}>Javascript</button>
                      <button style={{marginRight:'5px'}}>ReactJs</button>
                      <button>Python</button>
                  </div>
                  <div className="name__tags">tyuiim</div>
                </div>
            </div>
            
        </div>
    )
}

export default Quiz
