var str = '15feb1876';
var regex = /(\d*\s|\d*)([a-z]*\s|[a-z]*)(\d*\s|\d*)/g;
var reg = str.split(regex);

var str1 = reg[1];
var str2 = reg[2];
var str3 = reg[3];

var date = findDateYear(str1, str3)[0];
var year = findDateYear(str1, str3)[1];
var month = findMonth(str2);

function getTimeStamp(str){
    var regex = /(\d*\s|\d*)([a-z]*\s|[a-z]*)(\d*\s|\d*)/g;
    var reg = str.split(regex);

    var str1 = reg[1];
    var str2 = reg[2];
    var str3 = reg[3];
    
    return [findDateYear(str1, str3)[0], findMonth(str2), findDateYear(str1, str3)[1]];
}

function findDateYear(str1, str3){
    var date, year;
    if(str1.length == 1 && str3.length > 1){
        date = '0'+str1;
        year = str3;
    } else if(str1.length == 2 && str3.length == 4){
        date = str1;
        year = str3;
    } else if(str3.length == 2 && str1.length == 4){
        date = str3;
        year = str1;
    } else if(str3.length == 1 && str1.length > 1){
        date = '0'+str3;
        year = str1;
    } else if(str1.length == 2 && str3.length == 2){
        if(str1 > 31){
            date = str3;
            year = str1;
        } else if(str3 > 31){
            date = str1;
            year = str3;
        }
    } else{
        date = null;
        year = null;
    }
    return [date, year];
}

function findMonth(str2){
    var str = str2.toLowerCase();
    switch (str) {
        case 'jan' || 'january':
            return 'January';
            break;
        case 'feb' || 'february':
            return 'February';
            break;
        case 'mar' || 'march':
            return 'March';
            break;
        case 'apr' || 'april':
            return 'April';
            break;
        case 'may' || 'may':
            return 'May';
            break;
        case 'jun' || 'june':
            return 'June';
            break;
        case 'jul' || 'july':
            return 'July';
            break;
        case 'aug' || 'august':
            return 'August';
            break;
        case 'sept' || 'september':
            return 'September';
            break;
        case 'oct' || 'october':
            return 'October';
            break;
        case 'nov' || 'november':
            return 'November';
            break;
        case 'dec' || 'december':
            return 'December';
            break;
        default:
            return null;
    }
}

console.log(month);