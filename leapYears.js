const leapYears = function() {
    let year = 700;
    let bool = true;
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                 
            }
            else {
                bool = false;
            }
        }
        else {
            
        }

    }
    else {
        bool= false;
    }
    return bool;
};

// Do not edit below this line
module.exports = leapYears;
