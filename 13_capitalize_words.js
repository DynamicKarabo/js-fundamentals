function cap(s){
    var words=s.split(" ")
    for(var i=0;i<words.length;i++){
        words[i]=words[i].charAt(0).toUpperCase()+words[i].slice(1)
    }
    return words.join(" ")
}
console.log(cap("hello world"))
console.log(cap("javascript is awesome"))