// add solution here
function theBeatlesPlay(musicians,instruments){
  var variable =[];
  for(let i=0;i<musicians.length;i++ ){
    var concanated = musicians[i]+" plays "+instruments[i]
    variable.push(concanated)
  }
  return variable
}
