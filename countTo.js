//This function will count from the 
//number passed to the number passed
//and will output each result to context
//along the way.  The duration is only accurate for 
//smaller number ranges.  Will fire off countStart and 
//countComplete events on the passed in context
function countTo(i) {
    //if step time hasn't been set yet then 
    //trigger the countstart event because the steptime should be 
    //set after the first iteration
    if (!i.stepTime) {
        $(i.context).trigger("countstart");
    }

    if (i && i.context && i.from && i.to) {
        //check whether we are done counting
        if (Number(i.from) != Number(i.to)) {
            //check whether the step time has been set
            if (!i.stepTime) {
                //if duration was passed use it, otherwise set steptime to 0
                if (i.duration) {
                    if (Number(i.from) > Number(i.to)) {
                        i.stepTime = Number(i.duration) / Number(i.from) - Number(i.to);
                    } else {
                        i.stepTime = Number(i.duration) / Number(i.to) - Number(i.from);
                    }
                } else {
                    i.stepTime = 0;
                }
            }

            //check whether to increment or decrement
            //then output the result
            if (Number(i.from) > Number(i.to)) {
                $(i.context).html(i.from -= 1);
            } else {
                $(i.context).html(i.from += 1);
            }

            //raise countincrement event
            $(i.context).trigger("countincrement", { count: i.from });

            setTimeout(function () {
                countTo(i);
            }, i.stepTime);
        } else {
            //set final result and trigger countcomplete event
            $(i.context).html(i.to).trigger("countcomplete");
        }
    } else {
        console.error("countTo - not enough info passed in to work");
    }
}
