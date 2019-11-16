/*
get input from the middle box and save it to local storage.

get content from local storage and display it when you open the page.

*/
console.log("work day planner started");
var hourNineDesc = $("#description-9");
console.log(hourNineDesc);


$("#save-9").click(function(event){
    console.log(event.target);
    var hourNineDescVal = hourNineDesc.val();
    console.log(hourNineDescVal)
    localStorage.setItem("hour9",hourNineDescVal);

});

$("document").ready(function(){
    var ls9 = localStorage.getItem("hour9")
    if (ls9 != "undefined"){
        hourNineDesc.val(ls9)
    }
})