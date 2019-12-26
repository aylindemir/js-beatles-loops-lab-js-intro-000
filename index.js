// add solution here
function theBeatlesPlay(musicians,instruments){
  var variable =[];
  for(let i=0;i<musicians.length;i++ ){
    var concanated = musicians[i]+" "+instruments[i]
    variable.push(musicians[i]+instruments[i])
  }
  return variable
}
