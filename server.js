const express = require("express");
const path = require("path");
const moment = require("moment");

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/:dateString', (req, res)=>{
    var timestamp = req.params.dateString;
    var formatArr = ["MMMM DD, YYYY", "MMMM D YYYY", "MMM D, YYYY", "MMM DD YYYY", "DD MMM YYYY", 
                    "DD MMMM YYYY", "YYYY MMMM DD", "YYYY MMM DD", "DD-MM-YYYY", 
                    "MMMM DD, YY", "MMMM D YY", "MMM D, YY", "MMM DD YY", "DD MMM YY", 
                    "DD MMMM YY", "YY MMMM DD", "YY MMM DD", "DD-MM-YY",
                    "MMMM, YYYY", "MMMM YYYY", "MMM, YYYY", "MMM YYYY", "MMM YYYY", 
                    "MMMM YYYY", "YYYY MMMM", "YYYY MMM", "MM-YYYY", 
                    "MMMM, YY", "MMMM YY", "MMM, YY", "MMM YY", "MMM YY", 
                    "MMMM YY", "YY MMMM", "YY MMM", "MM-YY"];
                    
    var regex = /(^[0-9]*$)/g;
    var ifNumber = (regex).test(timestamp);
    var date;
    
    if(ifNumber){
      date = moment.utc(timestamp, 'X');
    } else {
      date = moment.utc(timestamp, formatArr);
    }
    
    if(date.isValid()){
      res.json({
        unix: date.format('X'),
        natural: date.format("MMMM D, YYYY")
      })
    } else {
      res.json({
        unix: null,
        natural: null
      })
    }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});