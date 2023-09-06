
var tablinks = document.getElementsByClassName("tab-links");

var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Test Code for changing the light to dark theme 
function switchTheme(){
    const theme = document.getElementById("theme").value;
    document.getElementsByIdTagName("meta")[0].content = theme; 
}

// Password protection temporary

function ValidatePassword() {

    var password = prompt("Please enter the correct combination of letters and numbers to proceed","");
    if (password == "Cool") {
        return true;
    }
    return false;
}