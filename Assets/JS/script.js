/* (Initial psudeocode for project)
get input from the middle box and save it to local storage.

get content from local storage and display it when you open the page.

*/

// lines 10-19 add the current time to the display at the top of the page

var timeCheck = moment().format('MMMM Do YYYY, ha');


var timeDisplay = $("#currentDay").html(timeCheck);
console.log(timeCheck);
console.log("work day planner started");
var hourNineDesc = $("#description-9");
console.log(hourNineDesc);
var jumboTron = $(".jumbotron");
jumboTron.append.timeDisplay;


$(document).click(function(event){
    console.log(event.target);
    let inp = event.target;
    let descr = inp.getAttribute("desc")
    console.log(inp.getAttribute("desc"))
    var hourNineDescVal = $("#"+descr).val();
    console.log(hourNineDescVal)
    localStorage.setItem(descr,hourNineDescVal);

});


$("document").ready(function(){

    for (var h = 9; h <= 17; h++) {


        var description = "description-" + h;
        var hour = "hour" + h
        console.log(hour);
        var ls = localStorage.getItem(description)
        var desc_input = $("<input>").attr("id", description).addClass("col");
        var save_input = $("<input>").attr("id","save-" +h).addClass("save");
        save_input.attr("desc", description);
        save_input.attr("type", "submit");
        save_input.attr("value", "save");
        var row = $("<div>").addClass("row");
        var colTime,colDesc,colSave;
        colTime =$("<div>").addClass("col-md-2");
        if (h <= 11) {
            colTime.text(h + "AM")
        } else {
            if (h ===12) {
                colTime.text(h +"PM")
        
            }
            else {
                colTime.text((h-12) +"PM")
            }
            
        }
        console.log(ls);
    
        colDesc=$("<div>").addClass("col-md-8");
        colSave=$("<div>").addClass("col-md-2");


        if (ls != "undefined"){
            desc_input.val(ls)
        }
        colSave.append(save_input);
        colDesc.append(desc_input);
        row.append(colTime);
        row.append(colDesc);
        row.append(colSave);
        $(".container").append(row);

    }
})
//this is where I started working on adding the different colors to the timeblocks based on the current time
var statusTimer = moment().hour();
console.log(statusTimer);



/* 
<div class ="row"> 
<div id="hour-9" class="col-md-2 btn"><span> 9AM</span></div>
<div class="col-md-8 btn"><input id="description-9" class ="col" type="text"></input></div>
<div class="col-md-2 btn"><input id="save-9" type="submit" value="save"> </input></div>
</div> */