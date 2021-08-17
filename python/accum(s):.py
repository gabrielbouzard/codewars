def accum(s):
    length = len(s)
    x = ""
    for i in range(0, length):
        if i != 0:
            x += '-'
        x += (s[i] * (i+1)).capitalize()
    return x
            