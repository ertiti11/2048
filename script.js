function load_table(){
    var html = '<table border="1">'

    for(var row=0;row<4;row++) {
        html += '<tr>';
        for(var col=0;col<4;col++) {
            var id = row+""+col;
            html += '<td align="center" valign="center" height="80" width="80" id="'+id+'"></td>';
            
        }
        html += '</tr>';
        
    }
    html += '</table>';
    document.getElementById("canvas").innerHTML = html;
    var id1 = get_id();
    
    var id2 = "";
		while(true) {
			id2 = get_id();
			if(id1 != id2)
			break;
		}
    console.log("id1: "+id1);
    console.log("id2: "+id2);
    //Set initial 2 values
	document.getElementById(id1).innerHTML = 2;
    document.getElementById(id2).innerHTML = 2;
	document.getElementById(id1).style.backgroundColor ="#F6CED8";
    document.getElementById(id2).style.backgroundColor ="#F6CED8";
    var score = 0;
    document.getElementById("score").innerHTML = "score: " + score
    generate_num()
    

    arow = ""
    for(var row=0;row<4;row++) {
        for(var col=0;col<4;col++) {
            arow  += row+""+col+" ";
            values = document.getElementById(row+""+col).value
            console.log("id " + row+""+col + " --> "+values);
        }
        
        console.log("\n");
        console.log(arow)
        arow = ""
        
    }
   
    return false;
}

function get_random(){
    return Math.floor(Math.random() * 4);
}


function get_id(){
    id1 = get_random();
    id2 = get_random();
    value = id1+""+id2;
    return value
}


function generate_num() {
    // sea n100 un número del 1 al 100 y n3 el resultado de tu función
    var num =  Math.floor(Math.random() * 10);
    
    if (num<=1){
        num = 4
    }
    else{
        num = 2
    }
    return num;
}

document.onkeydown = function(e) {
    e.preventDefault();//to prevent scroll of screen
    switch (e.keyCode) {
        case 37:
            console.log("left");;
            break;
        case 38:
            console.log("up");;
            break;
        case 39:
            console.log("Right");;
            break;
        case 40:
            console.log("down");;
            break;
    }
};
load_table();