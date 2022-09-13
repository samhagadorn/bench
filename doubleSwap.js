// Write a function to replace all instances of character c1 with character c2 and vice versa.

// Examples:
// doubleSwap( "aabbccc", "a", "b") ➞ "bbaaccc"

// doubleSwap("random w#rds writt&n h&r&", "#", "&")
// ➞ "random w&rds writt#n h#r#"

// doubleSwap("128 895 556 788 999", "8", "9")
// ➞ "129 985 556 799 888"

// Notes:
// Both characters will show up at least once in the string.

function doubleSwap(str, c1, c2){
    let swap ="";
    for (x=0; x<str.length; x++){
        if (str[x] == c1){
            swap+=c2;
        }
        else if (str[x]== c2){
            swap+=c1;
        }
        else swap+=str[x]
    }
    console.log(swap)
}

doubleSwap( "aabbccc", "a", "b")
doubleSwap("random w#rds writt&n h&r&", "#", "&")
doubleSwap("128 895 556 788 999", "8", "9")