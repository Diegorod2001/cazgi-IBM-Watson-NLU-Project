import React from 'react';
import './bootstrap.min.css';

const EmotionTable = (props) =>(

    //let listOfEmotions = props;
    //let listOfEmotionsAsArray = Object.entries(listOfEmotions);
    //let emotionDetails = listOfEmotionsAsArray.map((emotionDetail)=>{
    //    alert(emotionDetail);
    //  return <tr><td style={{color: "black",border: "1px solid black"}}>{emotionDetail[0]} </td>
    //  <td style={{color: "black",border: "1px solid black"}}> {emotionDetail[1]} </td>
    //  </tr>
    //});

    Object.entries(props.emotions).map(function(mapentry) {
    return (
        <tr>
        <td style={{color: "black",border: "1px solid black"}}>{mapentry[0]}</td>
        <td style={{color: "black",border: "1px solid black"}}>{mapentry[1]}</td>
        </tr>
       
    )
    })

  
    //Returns the emotions as an HTML table
     //return (  
     //  <div>
     //    <table width='100%' style={{border: '1px solid black'}} className="table table-bordered">
     //      <tbody>
     //     
     //            {emotionDetails}
     //      
     //      </tbody>
     //    </table>
     //    </div>
     //    );

)
        
export default EmotionTable;
    
