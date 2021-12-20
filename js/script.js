const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]'); // the box already accepts the click and this selects the input
let lastChecked; //last ticked box; changes  

function handleCheck(e) {
    let inBetween = false; //flag variable
    //check if you press the shift key down AND check that they are checking (not unchecking it)
    if (e.shiftKey && this.checked) {
        //go ahead and loop over every single checkbox to see if they are in the area we want to check
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            //the part below finds the first and last checked boxes and sets the boxes between them to inBetween true so we can find the boxes in between
            if(checkbox === this || checkbox === lastChecked) { //the two conditions are the reason why it works from top to bottom and bottom to top
                inBetween = !inBetween;
            }
            
            //if a box is in the inBetween part, then it will get checked
            if(inBetween) {
                checkbox.checked = true;
            }
        });
    }
    
    lastChecked = this;
}

//loop over each checkbox to see if it was clicked; if it was run the function handleCheck
checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));
