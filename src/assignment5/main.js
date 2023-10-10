const topic1 = document.getElementById("topic1")
const comment1 = document.getElementById("comment1")
const comment2 = document.getElementById("comment2")
const text1 = document.getElementById("text1")

let count = 1 



function postFunction(){
    let text = text1.value
    if(count == 1){
        topic1.innerText = text
    }
    else if(count == 2){
        comment1.innerText = text
    }
    else if(count == 3){
        comment2.innerText = text
    }
    count++
}
function clearFunction(){
    console.log("kpll")
    topic1.innerText = ""
    comment1.innerText = ""
    comment2.innerText = ""
    count = 1
}