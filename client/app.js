// // var jsonText = document.getElementById('jsonText');
// // console.log(jsonText, 'ssssss', typeof jsonText)
// let jtocsv = (obj) => {
//     // var pObj=JSON.parse(obj);
//     var result = '';
//     result += Object.keys(obj).slice(0, -1).join(',');
//     result += "\n";
//     var valRec = function () {
//         result+=Object.values(obj).slice(0,-1).join(',');
//         // but if we have nested object or children has keys and values.
//         if(typeof obj.children==='object'){
//             for(var i=0;i<obj.length;i++){
//                 valRec(obj[i]);
//             }
//         }
//     }
//     valRec(obj);

//     return result;
// }

// module.exports.jtocsv  = jtocsv;