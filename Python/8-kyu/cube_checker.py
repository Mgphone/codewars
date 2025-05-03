def cube_checker(volume, side):
    print(volume)
    if volume<=0 and side<=0:
        return False
    else:
        return side*side*side==volume
    