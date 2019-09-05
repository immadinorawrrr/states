
//$.when(states3 && states4).done(

function toggleReveal() {
  var x = document.getElementById("hiddenMessage");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function flyMD(){
	map.flyTo([38.843, -77.30238],7.8);
	view = "MD";
	changeOutlook(view);
}

function flyCO(){
	map.flyTo([39.03105, -105.40833],7)
	view = "CO";
	changeOutlook(view);
}

function flyCT(){
	map.flyTo([41.50321, -72.7061],9)
	view = "CT";
	changeOutlook(view);
}

function flyNY(){
	map.flyTo([42.80425, -75.56714],7)
	view = "NY";
	changeOutlook(view);
}

function flySoCal(){
	map.flyTo([34.09901, -117.70838],8)
	view = "SoCal";
	document.getElementById("statehead").innerHTML = 'SoCal'
}

function flyUSA(){
	map.flyTo([37.0902, -95.7129], 4)
	view = "USA";
	document.getElementById("statehead").innerHTML = 'USA'
}

function flyBay(){
	map.flyTo([38.35897, -121.28166],8)
	view = "SoCal";
	document.getElementById("statehead").innerHTML = 'Bay Area'
}

function flyNEast(){
	map.flyTo([41.66951, -75.6092],6)
	view = "NEast";
	document.getElementById("statehead").innerHTML = 'Northeast'
}

function flyMidwest(){
	map.flyTo([41.59722, -85.27588],6)
	view = "NEast";
	document.getElementById("statehead").innerHTML = 'Midwest'
}


function changeOutlook(view) {
	var x = document.getElementById("statehead")
	switch(view){
		case "MD":
			x.innerHTML='Maryland';
			break;
		case "CO":
			x.innerHTML='Colorado';
			break;
		case "CT":
			x.innerHTML='Connecticut';
			break;
		case "NY":
			x.innerHTML='New York';
			break;
		default:
			x.innerHTML='US';
	}
}

function changeOutlookMenu() {
	var x = document.getElementById("statehead");
	var choice = document.getElementById("menu").value;
	switch(choice){
		case "AL":
			map.flyTo([32.67027, -86.59862],7);
			x.innerHTML='Alabama';
			break;
		case "AK":
			map.flyTo([63.71841, -154.63188],4);
			x.innerHTML='Alaska';
			break;
		case "AZ":
			map.flyTo([34.45477, -111.52359],6.5);
			x.innerHTML='Arizona';
			break;
		case "AR":
			map.flyTo([34.80917, -92.32112],7.5);
			x.innerHTML='Arkansas';
			break
		case "CA":
			map.flyTo([37.46423, -120.19043],6);
			x.innerHTML='Connecticut';
			break;
		case "CO":
			map.flyTo([39.03105, -105.40833],7);
			x.innerHTML='Colorado';
			break;
		case "CT":
			map.flyTo([41.50321, -72.7061],9);
			x.innerHTML='Connecticut';
			break;
		default:
			map.flyTo([37.0902, -95.7129], 4);
	}
}
