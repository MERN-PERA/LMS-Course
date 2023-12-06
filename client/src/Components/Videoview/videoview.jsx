import React from 'react'
import './videoview.css';
import ReactPlayer from 'react-player';



const Videoview = ()=> {

const viewvariable = localStorage.getItem('videovariable');

return(

<>

{/* "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" */}

<div className='playbackwindow'>

<ReactPlayer
            url={viewvariable}
            width="100%"
            height="100%"
            controls
        />
</div>



</>

  )
}
export default Videoview;