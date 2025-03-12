function getInputTextByID(id){
    const value = document.getElementById(id).innerText;
    const convertedTextByID = parseInt(value);
    return convertedTextByID;
}
function getInputValueByID(id){
    const value = document.getElementById(id).value;
    const convertedTaskValue = parseInt(value);
    return convertedTaskValue;
}

function setInnerTextByIDandValue(id,value) {
    document.getElementById(id).innerText = value;
}