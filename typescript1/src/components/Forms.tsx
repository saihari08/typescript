import React from 'react'

function Forms() {
  let results= ()=>{


    let studentName:string="mahesh";
    let engMarks:number=88;
    let telMarks:number=75;
    let hindiMarks:number=91;
    let sciMarks:number=77;
    let socMarks:number=68;
    let mathsMarks:number=88;

  let results =engMarks+telMarks+hindiMarks+sciMarks+socMarks+mathsMarks;
  let perc=(results/600)*100;
  
  if(engMarks>=35 && 
    telMarks>=35 && 
    hindiMarks>=35 &&
    sciMarks>=35 && 
    socMarks>=35 && 
    mathsMarks){
  
    console.log(`${studentName} Passed in Tenth`);
    }else{
    console.log(`${studentName} Failed in Tenth`);
    }

console.log(`TotalMarks:${results},percentage:${perc}`)

}
results()

  return (
    <div>
      <h1>MaheshResults</h1>
    </div>
  )
}

export default Forms
