// var arr = [6, -4, 5, -2, 7]
// Write function which will give sum 0 of any 3 elements in array.
// Max 2 loops allowed.

var arr = [6, -4, 5, -2, 7];

arr.sort();

var cntr = 0,
    len = arr.length - 1;
while(cntr < len) {
    var chk_val = arr[cntr] + arr[cntr+1] + arr[len];
    if(chk_val == 0) {
        console.log(arr[cntr] +', '+arr[cntr+1] +', '+arr[len]);
        break;
    } else if(chk_val < 0) {
        cntr++;
    } else {
        len--;
    }
}