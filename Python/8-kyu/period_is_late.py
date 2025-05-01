def period_is_late(last,today,cycle_length):
    toCheck=today-last
    return(toCheck.days>cycle_length)
    