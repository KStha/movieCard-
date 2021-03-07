import react from "react";
import './productcomponent.css';

import Series from  "../productList/series"


function Seriesapp() {
  return (
   
      <div>
      <div className="series-container">
         <Series imgsrc="https://wallpapercave.com/wp/wp4056410.jpg" 
          title="A Netflix Original Series"
          sname="DARK"/>
       
       
         <Series imgsrc="https://wallpapercave.com/wp/wp5927729.jpg" 
         title="A Netflix Original Series"
         sname="Game Of Thrones"/>
       
       
        

          <Series imgsrc="https://wallpapercave.com/wp/wp1917154.jpg" 
         title="A Netflix Original Series"
         sname="Stranger Things"/>
         <Series imgsrc="https://wallpapercave.com/wp/wp1917154.jpg" 
         title="A Netflix Original Series"
         sname="Stranger Things"/> 
         
       
      </div>
       <div className="series-container">
       <Series imgsrc="https://wallpapercave.com/wp/wp4056410.jpg" 
        title="A Netflix Original Series"
        sname="DARK"/>
     
     
       <Series imgsrc="https://wallpapercave.com/wp/wp5927729.jpg" 
       title="A Netflix Original Series"
       sname="Game Of Thrones"/>
     
     
      

        <Series imgsrc="https://wallpapercave.com/wp/wp1917154.jpg" 
       title="A Netflix Original Series"
       sname="Stranger Things"/>
       <Series imgsrc="https://wallpapercave.com/wp/wp1917154.jpg" 
       title="A Netflix Original Series"
       sname="Stranger Things"/> 
       
     
    </div>
  </div>
    
      
   
  );
}

export default Seriesapp;
