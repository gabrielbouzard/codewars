def descending_order(num):
    s = str(num)
    a = [char for char in s]
    a.sort(reverse=True)
    return int(''.join([str(int) for int in a]))

