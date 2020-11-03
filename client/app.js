// var jsonText = document.getElementById('jsonText');
// console.log(jsonText, 'ssssss', typeof jsonText)
let convertJsonToCSV = (obj) => {
    // var pObj=JSON.parse(obj);
    var result = '';
    result += Object.keys(obj).slice(0, -1).join(',');
    result += "\n";
    var valRec = function () {
        result+=Object.values(obj).slice(0,-1).join(',');
    }
    valRec(obj);

    return result;
}