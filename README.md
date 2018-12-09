# betterToFixed

An attempt to [challange 6](https://github.com/gordonmzhu/beasts/issues/7) #Beasts Watch and Code

My goal in this challange is to create a better version of the Number.prototype.toFixed(), which will call betterToFixed().

Its purpose is to make numbers like 0.615, 10.235, and 1.005, which with a normal toFixed() would not be rounded corectly to be rounded corectly in our new function.

i.e. 0.615.toFixed(2) would return "0.61"

In betterToFixed(0.615, 2) would return corectly "0.62".
