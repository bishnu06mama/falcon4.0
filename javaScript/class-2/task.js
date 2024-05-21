//use all the string methods to demonstrate all the peoperties with examples.

//eg:-let sentence = "He is a good boy"; // 16 char
//console.log(sentence.includes("is"));

//task-2:
// declare a sentence and include your name in that and check whether your name is present or not using 'include' method.

//let sentence = lorem ipsum dolor sit amet pramod consectetur adipisicing elit.perferndis,nihil ?



//let sentence = "priya is my favourite person she is a very good girl.";
//console.log(sentence.includes("priya"));








//task-2 ans
//let lengthCheck = " Lorem  ipsum dolor sit amet consectetur adipisicing elit. Doloribus at rerum ea minus nulla itaque ab vero ad asperiores exercitationem   "
//console.log(lengthCheck.length);
//task-1 ans
let lengthCheck = "  hyy how are you i m fine tell about yours hoew yours days are going on tell me everything.   ";
console.log(lengthCheck.trim());

//et sentence = "priya is a good girl";
//console.log(sentence.toUpperCase);

//concat
//let str1 = "priya";
//let str2 = "mama";
//console.log(str1.concat(' ' + str2));

//indexof
//let sent = "hello bishnupriya";
//console.log(sent.indexOf("p"));
//console.log(sent.indexOf("bishnu"));

//lastindexof
//let se = "i feel very proud";
//console.log(se.lastIndexOf("i"));
//console.log(se.indexOf("y"));

//match
//let par = "i think RCB will win the iplmatch this year.";
//let reg = "A-Z";
//let found = par.match(reg);
//console.log(found);

//replace
//let st1 = "my family is my life";
//let st2 = st1.replace("life" , "everything");
//console.log(st2);

//normalizations
//let name1 = 'pramod';
//let name2 = 'smruti';
//console.log('${name1} , ${name2}');
//console.log(name1 === name2);

//repeat
let sent = "bulbu";
console.log('There is no: ${"bulbu" .repeat}');
console.log(sent.repeat(6));

//slice
let set1 = "my morning is starting with a cup of coffe."
let set2 = set1.slice(2, 5);
let set3 = set1.slice(4, 7);
console.log(set2);
console.log(set3);

//startswith
let str = "i have a cute puppy."
console.log(str.startsWith("cute"));

//substring
let srt = "smrutii";
console.log(srt.substring(4));

//toString
let obj = new String("bijaya");
console.log(obj);
console.log(obj.toString());

//trimend
let nam1 = "   heyy bishnu how r you?   ";
console.log(nam1.trimEnd());

//trimstart
let name1 = "   hello guys good afternnon!";
console.log(name1);
console.log(name1.trimStart());

//valueof
const st = new String('smrutipratik');
console.log(st);
console.log(st.valueOf);






