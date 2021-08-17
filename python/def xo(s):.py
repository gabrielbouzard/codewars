def xo(s):
    xcount = 0
    ocount = 0
    for char in s.lower():
        if char == 'x':
            xcount += 1
        elif char == 'o':
            ocount += 1
    return xcount == ocount
            