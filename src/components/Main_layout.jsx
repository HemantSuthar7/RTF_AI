import React from 'react'
import Req_Res_cards from './Req_Res_cards'

function Main_layout() {
  return (
    <div>

        <div>

            {/* label */}
            <div className='flex justify-center'>
                <div className='sm:p-4 p-2 rounded-lg border border-[#C2C2C2] bg-[#3F3F3F] items-center mt-6 mb-4'> 
                    <span className='text-[#B9B9B9] text-center font-medium text-sm sm:text-xl'>AI-Powered Real Time Feedback System</span>
                </div>
            </div>
            
        </div>



        <div>

            {/* main layout */}
            <Req_Res_cards/>
        
        </div>



        <div>
            {/* bottom part */}
            <div className='flex justify-center mb-10 mt-7'>
                <div className='mx-4 text-center'>
                    <p className='text-xs text-[#7C7C7C]'>Note : AI can make mistakes. Please check important info.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Main_layout