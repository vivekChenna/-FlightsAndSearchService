function compareTime(DateTimeString1,DateTimeString2)
{
    let time1  =  new Date(DateTimeString1);
    let time2 =  new Date(DateTimeString2);

    if((time1.getTime() > time2.getTime()) && (time1.getDate() >= time2.getDate()))
    {
        return true;
    }

    return false;
    
}

module.exports ={ 
    compareTime,
}