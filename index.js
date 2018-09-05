

var katzDeliLine=[]
var numberInLine=0;
var ticketNumber=0;

function takeANumber2(katzDeliLine){
  numberInLine++;
  ticketNumber++;
  katzDeliLine.push(number);
  
  console.log("Welcome "+". You are number "+ticketNumber+" and you are number"  + numberInLine +" in line.");
}




function takeANumber(katzDeliLine,name){
  
  katzDeliLine.push(name);
  
  return "Welcome, "+name+". You are number "+ katzDeliLine.length +" in line.";
}


function nowServing(katzDeliLine){
  if (katzDeliLine.length===0){
    console.log("There is nobody waiting to be served!");
  } else
  {
    console.log("Currently serving customer number "+katzDeliLine.shift()+".");
    numberInLine--;
  }
  
}

function currentLine(katzDeliLine){
   if (katzDeliLine.length===0){
    return  "The line is currently empty.";
  } else
  {
    var result="The line is currently: ";
    
    for (var i=0;i<katzDeliLine.length-1;i++){
      result+=(i+1)+". "+katzDeliLine[i]+", ";
    }
    result+=(i+1)+". "+katzDeliLine[i];
    
    
    
    return result;
  }
  
}

takeANumber2(katzDeliLine)
takeANumber2(katzDeliLine)

nowServing(katzDeliLine)
nowServing(katzDeliLine)
takeANumber2(katzDeliLine)


