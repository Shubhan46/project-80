var inputs=[];

function getpara1(){
    for(var i=1;i<=6;i++){
        inputs.push(document.getElementById("para1_input_"+i).value);
    }
    inputs.join(". ");
    document.getElementById("show_para1").innerHTML= inputs.join(". ");
}

function getpara2(){
    for(var k=1;k<=6;k++){
        inputs.push(document.getElementById("para2_input_"+k).value);
    }
    inputs.join(". ");
    document.getElementById("show_para2").innerHTML= inputs.join(". ");

}