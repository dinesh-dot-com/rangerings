var map;
var geocoder;
var sourceMarker;
var destinationMarker;
var polyline;

var airportList = [
    "Select The Airport",
    "Agartala Airport (VEAT)",
    "Agatti Aerodrome (VOAT)",
    "Agra Airport / Agra Air Force Base (VIAG)",
    "Akola Airport (VAAK)",
    "Along Airport (VEAN)",
    "Lucknow Amausi Airport (VILK)",
    "Ambala Air Force Base (VIAM)",
    "Anand Arakkonam Air Force Base (VOAR)",
    "Aurangabad Airport (VAAU)",
    "Bagdogra Airport / Bagdogra Air Force Base (VEBD)",
    "Bakshi Ka Talab Air Force Base (VIBL)",
    "Balurghat Airport (VEBG)",
    "Bamrauli Air Force Base (VIAL)",
    "Bangalore International Airport (VOBL)",
    "Bareli Airport (VIBY)",
    "Behala Airport (VEBA)",
    "Belgaum Airport (VABM)",
    "Bellary Airport (VOBI)",
    "Bhavnagar Airport (VABV)",
    "Bhisiana Air Force Base (VIBT)",
    "Bhopal Airport (Bairagarh Airport) (VABP)",
    "Bhuj Airport (VABJ)",
    "Bhuntar Airport (VIBR)",
    "Bidar Air Force Station (VOBR)",
    "Biju Patnaik Airport (VEBS)",
    "Bilaspur Airport (VABI)",
    "Birsa Munda Airport (Ranchi Airport) (VERC)",
    "Calicut International Airport (Karipur Airport) (VOCL)",
    "Car Nicobar Air Force Base (VOCX)",
    "Chabua Air Force Base (Jorhat Airport) (VEJT)",
    "Chakeri Air Force Station (VICX)",
    "Chakulia Airport (VECK)",
    "Chandigarh Airport (Chandigarh Air Force Base) (VICG)",
    "Chatrapati Shivaji International Airport (VABB)",
    "Chennai International Airport (VOMM)",
    "Cochin International Airport (Kochi) (VOCI)",
    "Cochin Navy Airbase (VOCC)",
    "Coimbatore Airport (VOCB)",
    "Cooch Behar Airport (VECO)",
    "Cuddapah Airport (VOCP)",
    "Dabolim Airport (VAGO) (Goa Airport) / Dabolim Navy",
    "Daman Airport (VADN)",
    "Daparizo Airport (VADZ)",
    "Daporijo Airport (VEDZ)",
    "Devi Ahilyabai Holkar International Airport (VAID)",
    "Dhanbad Airport (VEDB)",
    "Dibrugarh Airport (VEMN) (Mohanbari Airport)",
    "Dimapur Airport (VEMR) (Dimapur Air Force Base)",
    "Donakonda Airport (VODK)",
    "Dr. Babasaheb Ambedkar International Airport (VANP)",
    "Dundigul Air Force Academy (VODG)",
    "Gaggal Airport (Kangra Airport) (VIGG)",
    "Gaya Airport (VEGY)",
    "Gorakhpur Air Force Base (VEGK)",
    "Guna Airport (VAGN)",
    "Gwalior Airport / Maharajpur Air Force Base (VIGR)",
    "Hakimpet Air Force Station (VOHK)",
    "Hindon Air Force Base (VIDX)",
    "Hindustan Airport (VOBG)",
    "Hirakud Airport (VEHK)",
    "Hissar Airport (VIHR)",
    "Hubli Airport (VAHB)",
    "Imphal Airport (Tulihal Airport) (VEIM)",
    "Indira Gandhi International Airport (VIDP)",
    "Jabalpur Airport (VAJB)",
    "Jaipur Airport (Sanganer Airport) (VIJP)",
    "Jaisalmer Airport (VIJR)",
    "Jammu Airport (VIJU)",
    "Jamnagar Airport / Jamnagar Air Force Base (VAJM)",
    "Jamshedpur Airport (VEJS)",
    "Jeypore Airport (VEJP)",
    "Jhansi Airport (VIJN)",
    "Jharsuguda Airport (VEJH)",
    "Jodhpur Airport / Jodhpur Air Force Base (VIJO)",
    "Jolly Grant Airport (VIDN)",
    "Juhu Airport (VAJJ)",
    "Junagadh Airport (Keshod Airport) (VAKS)",
    "Kailashahar Airport (VEKR)",
    "Kamalpur Airport (VEKM)",
    "Kandla Airport (Gandhidham Airport) (VAKE)",
    "Kanpur Airport (Chakeri Airport) (VIKA)",
    "Khajuraho Airport (VIKI)",
    "Khandwa Airport (VAKD)",
    "Khowai Airport (VEKW)",
    "Kolhapur Airport (VAKP)",
    "Kota Airport (VIKO)",
    "Leh Kushok Bakula Rimpochee Airport (VILH)",
    "Lilabari Airport (VELR)",
    "Lok Nayak Jaya Prakash Narayan Airport (Patna) (VEPT)",
    "Lokpriya Gopinath Bordoloi International Airport (VEGT)",
    "Madurai Airport (VOMD)",
    "Malda Airport (VEMH)",
    "Mangalore International Airport (VOML)",
    "Muzzafarpur Airport (VEMZ)",
    "Mysore Airport (VOMY)",
    "Nal Air Force Base (VIBK)",
    "Nanded Airport (VAND)",
    "Nasik Road Airport (VANR)",
    "Netaji Subhash Chandra Bose International Airport (VECC)",
    "Neyvafli Airport (VONV)",
    "Panagarh Air Force Base (VEPH)",
    "Pant Nagar Airport (Pantnagar Airport) (VIPT)",
    "Pasighat Airport (VEPG)",
    "Pathankot Air Force Base (VIPK)",
    "Pondicherry Airport (VOPC)",
    "Porbandar Airport (VAPR)",
    "Pune Airport / Lohegaon Air Force Base (VAPO)",
    "Purnea Airport (VEPU)",
    "Raipur Airport (VARP)",
    "Raja Sansi International Airport (Amritsar Int'l) (VIAR)",
    "Rajahmundry Airport (VORY)",
    "Rajiv Gandhi International Airport (VOHS)",
    "Rajkot Airport (VARK)",
    "Ramagundam Airport (VORG)",
    "Ratnagiri Airport (VARG)",
    "Raxaul Airport (VERL)",
    "Rourkela Airport (VERK)",
    "Rupsi Airport (VERU)",
    "Safdarjung Airport (Safdarjung Air Force Station) (VIDD)",
    "Sahnewal Airport (VILD)",
    "Salem Airport (VOSM)",
    "Sardar Vallabhbhai Patel International Airport (VAAH)",
    "Satna Airport (VIST)",
    "Shillong Airport (Barapani Airport) (VEBI)",
    "Shimla Airport (VISM)",
    "Sholapur Airport (VASL)",
    "Silchar Airport (Kumbhirgram Air Force Base) (VEKU)",
    "Sirsa Air Force Base (VIAX)",
    "Sri Sathya Sai Airport (VOPN)",
    "Srinagar Airport / Srinagar Air Force Base (VISR)",
    "Sulur Air Force Base (VOSX)",
    "Surat Airport (VASU)",
    "Tambaram Air Force Base (VOTX)",
    "Tanjore Air Force Base (VOTJ)",
    "Tezpur Airport (Tezpur Air Force Base) (VETZ)",
    "Tezu Airport (VETJ)",
    "Thiruvananthapuram International Airport (FC (VOTV)",
    "Tiruchirapalli Airport (VOTR)",
    "Tirupati Airport (VOTP)",
    "Turial Air Force Base (VEAZ)",
    "Udaipur Airport (VAUD)",
    "Udhampur Air Force Base (VIUX)",
    "Uttarlai Airport (VIUT)",
    "Vadodara Airport / Vadodara Air Force Base (VABO)",
    "Varanasi Airport (VIBN)",
    "Vijayawada Airport (VOBZ)",
    "Vir Savarkar Airport (Port Blair Airport) (VOPB)",
    "Visakhapatnam Airport (VEVZ)",
    "Warangal Airport (VOWA)",
    "Yelahanka Air Force Station (VOYK)",
    "Shirdi Airport (VASD)"
];

var aircraftModels = {
    Beechcraft: ["Super King Air B300", "SUPER KINGAIR B200", "KINGAIR C90A", "BEECHCRAFT 300LW", "BEECH Super King Air B200GT", "Beechcraft Premier1A", "King Air C90B", "King Air C90GTI"],
    Textron: ["HAWKER 800XP", "Hawker 900XP", "HAWKER 850XP", "Hawker 750", "Hawker400A (XP)", "LEARJET-40XR"],
    Bombardier: ["BOMBARDIER CL600-2B16 (604 VARIANT)", "Bombardier BD-700-1A10 (Global 6000)", "Bombardier Global 6500", "GLOBAL 5000", "GLOBAL EXPRESS", "Global 7500", "LEARJET-45", "LEARJET-45 XR"],
    Cessna: ["CESSNA CITATION 525 (CJ1+)", "CESSNA CITATION II", "CESSNA CITATION 550", "Citation 525A CJ2+", "CESSNA CARAVAN 208B", "CESSNA CITATION 560XL", "CESSNA CITATION 560 XLS"],
    Cessna_And_Textron: ["CESSNA CITATION 560XL", "CESSNA CITATION 560 XLS"],
    Hindustan_Aeronautics_Limited: ["Dornier DO-228-201"],
    Dassault_Aviation: ["FALCON2000LX", "FALCON 7X (M 1000)", "FALCON 900EX", "FALCON 2000 LX"],
    de_Havilland_Canada_Viking_Air: ["Twin Otter DHC-6- 300"],
    Embraer: ["Embraer EMB-135 (Legacy 600)", "EMB 500 Phenom 100E", "EMB135BJ (LEGACY 650)", "EMBRAER EMB-135", "EMBRAER 190- 100ECJ (Lineage 1000)"],
    Gulfstream: ["Gulfstream G-150", "Gulfstream G200", "GULFSTREAM  (G550)"],
    Piaggio_Aero: ["P-180 AVANTI II"],
    Pilatus: ["PILATUS PC12/45"]
};

var aircraftMakes = Object.keys(aircraftModels);


var speeds = {
    "Super King Air B300": { speedMph: 300, speedKnots: 260, speedKmph: 482 },
    "SUPER KINGAIR B200": { speedMph: 280, speedKnots: 243, speedKmph: 450 },
    "KINGAIR C90A": { speedMph: 240, speedKnots: 208, speedKmph: 386 },
    "BEECHCRAFT 300LW": { speedMph: 260, speedKnots: 225, speedKmph: 407 },
    "BEECH Super King Air B200GT": { speedMph: 290, speedKnots: 251, speedKmph: 463 },
    "Beechcraft Premier1A": { speedMph: 320, speedKnots: 278, speedKmph: 520 },
    "King Air C90B": { speedMph: 250, speedKnots: 217, speedKmph: 402 },
    "King Air C90GTI": { speedMph: 255, speedKnots: 221, speedKmph: 412 },
    "HAWKER 800XP": { speedMph: 480, speedKnots: 417, speedKmph: 778 },
    "Hawker 900XP": { speedMph: 470, speedKnots: 408, speedKmph: 760 },
    "HAWKER 850XP": { speedMph: 460, speedKnots: 399, speedKmph: 741 },
    "Hawker 750": { speedMph: 450, speedKnots: 391, speedKmph: 722 },
    "Hawker400A (XP)": { speedMph: 430, speedKnots: 373, speedKmph: 685 },
    "LEARJET-40XR": { speedMph: 470, speedKnots: 408, speedKmph: 760 },
    "BOMBARDIER CL600-2B16 (604 VARIANT)": { speedMph: 520, speedKnots: 452, speedKmph: 852 },
    "Bombardier BD-700-1A10 (Global 6000)": { speedMph: 550, speedKnots: 477, speedKmph: 926 },
    "Bombardier Global 6500": { speedMph: 560, speedKnots: 487, speedKmph: 944 },
    "GLOBAL 5000": { speedMph: 540, speedKnots: 469, speedKmph: 870 },
    "GLOBAL EXPRESS": { speedMph: 530, speedKnots: 460, speedKmph: 852 },
    "Global 7500": { speedMph: 570, speedKnots: 495, speedKmph: 926 },
    "LEARJET-45": { speedMph: 490, speedKnots: 425, speedKmph: 787 },
    "LEARJET-45 XR": { speedMph: 500, speedKnots: 434, speedKmph: 805 },
    "CESSNA CITATION 525 (CJ1+)": { speedMph: 350, speedKnots: 304, speedKmph: 556 },
    "CESSNA CITATION II": { speedMph: 330, speedKnots: 287, speedKmph: 537 },
    "CESSNA CITATION 550": { speedMph: 340, speedKnots: 295, speedKmph: 556 },
    "Citation 525A CJ2+": { speedMph: 360, speedKnots: 313, speedKmph: 574 },
    "CESSNA CARAVAN 208B": { speedMph: 180, speedKnots: 156, speedKmph: 289 },
    "CESSNA CITATION 560XL": { speedMph: 370, speedKnots: 321, speedKmph: 593 },
    "CESSNA CITATION 560 XLS": { speedMph: 380, speedKnots: 330, speedKmph: 611 },
    "Dornier DO-228-201": { speedMph: 200, speedKnots: 173, speedKmph: 324 },
    "FALCON2000LX": { speedMph: 550, speedKnots: 477, speedKmph: 870 },
    "FALCON 7X (M 1000)": { speedMph: 570, speedKnots: 495, speedKmph: 926 },
    "FALCON 900EX": { speedMph: 560, speedKnots: 487, speedKmph: 907 },
    "FALCON 2000 LX": { speedMph: 540, speedKnots: 469, speedKmph: 870 },
    "Twin Otter DHC-6- 300": { speedMph: 180, speedKnots: 156, speedKmph: 289 },
    "Embraer EMB-135 (Legacy 600)": { speedMph: 420, speedKnots: 365, speedKmph: 676 },
    "EMB 500 Phenom 100E": { speedMph: 380, speedKnots: 330, speedKmph: 611 },
    "EMB135BJ (LEGACY 650)": { speedMph: 460, speedKnots: 399, speedKmph: 741 },
    "EMBRAER EMB-135": { speedMph: 400, speedKnots: 347, speedKmph: 648 },
    "EMBRAER 190- 100ECJ (Lineage 1000)": { speedMph: 470, speedKnots: 408, speedKmph: 760 },
    "Gulfstream G-150": { speedMph: 500, speedKnots: 434, speedKmph: 805 },
    "Gulfstream G200": { speedMph: 520, speedKnots: 452, speedKmph: 833 },
    "GULFSTREAM  (G550)": { speedMph: 530, speedKnots: 460, speedKmph: 852 },
    "P-180 AVANTI II": { speedMph: 350, speedKnots: 304, speedKmph: 556 },
    "PILATUS PC12/45": { speedMph: 280, speedKnots: 243, speedKmph: 450 },
};



function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 0, lng: 0 },
        zoom: 3
    });

    geocoder = new google.maps.Geocoder();

    populateDropdown("source", airportList);
    populateDropdown("destination", airportList);
    populateDropdown("aircraftMake", aircraftMakes);
}

function populateDropdown(id, options) {
    var dropdown = document.getElementById(id);
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        dropdown.add(option);
    }
}

function populateAircraftModels() {
    var selectedAircraftMake = document.getElementById("aircraftMake").value;
    var aircraftModelsForMake = aircraftModels[selectedAircraftMake];
    var aircraftModelDropdown = document.getElementById("aircraftModel");

    // Clear existing options
    aircraftModelDropdown.innerHTML = "";

    // Populate with options for the selected aircraft make
    for (var i = 0; i < aircraftModelsForMake.length; i++) {
        var option = document.createElement("option");
        option.text = aircraftModelsForMake[i];
        aircraftModelDropdown.add(option);
    }
}

function calculateTimeAndDistance() {
    var sourceIndex = document.getElementById("source").selectedIndex;
    var destinationIndex = document.getElementById("destination").selectedIndex;
    var aircraftMake = document.getElementById("aircraftMake").value;
    var aircraftModel = document.getElementById("aircraftModel").value;

    if (sourceIndex === destinationIndex) {
        alert("Please enter different locations. Source and destination should not be the same.");
        return;
    }

    if (!aircraftMake || !aircraftModel) {
        alert("Please select both Aircraft Make and Aircraft Model.");
        return;
    }

    var speedMph = speeds[aircraftModel].speedMph;
    var speedKnots = speeds[aircraftModel].speedKnots;
    var speedKmph = speeds[aircraftModel].speedKmph;

    geocoder.geocode({ 'address': airportList[sourceIndex] }, function(results, status) {
        if (status === 'OK') {
            var sourceLatLng = results[0].geometry.location;

            geocoder.geocode({ 'address': airportList[destinationIndex] }, function(results, status) {
                if (status === 'OK') {
                    var destinationLatLng = results[0].geometry.location;

                    var distance = google.maps.geometry.spherical.computeDistanceBetween(sourceLatLng, destinationLatLng) / 1000;

                    document.getElementById("distance").innerHTML = "<strong style='font-weight: bold;'>Aerial Distance:</strong> " + distance.toFixed(2) + " km";

                    // Calculate fly time with a minimum of 60 minutes
                    var timeInHours = Math.max(distance / speedKmph, 1 / 60);
                    var takeoffLandingTime = 0.5;
                    var totalTimeInHours = timeInHours + takeoffLandingTime;

                    var hours = Math.floor(totalTimeInHours);
                    var minutes = Math.round((totalTimeInHours - hours) * 60);

                    var timeString = "";
                    if (hours > 0) {
                        timeString += hours + " hrs ";
                    }
                    if (minutes > 0) {
                        timeString += minutes + " mins";
                    }

                    document.getElementById("timeTaken").innerHTML = "<strong style='font-weight: bold;'>Fly Time:</strong> " + timeString;

                    showMarkers(sourceLatLng, destinationLatLng);
                    drawPolyline(sourceLatLng, destinationLatLng);

                    // Calculate travel charge
                    var flyCost = totalTimeInHours * getHourlyCost(aircraftModel);
                    var dutyCost = getHourlyCost(aircraftModel) / 2;
                    var travelCharge = flyCost + dutyCost;

                    // Calculate tax rate
                    var taxRate = 18;

                    // Calculate travel charge after tax
                    var travelChargeAfterTax = travelCharge + (travelCharge * (taxRate / 100));

                    // Display table
                    displayTable(airportList[sourceIndex], airportList[destinationIndex], aircraftMake, aircraftModel, distance.toFixed(2), timeString, flyCost, dutyCost, travelCharge, taxRate, travelChargeAfterTax);
                } else {
                    alert('Error: ' + status);
                }
            });
        } else {
            alert('Error: ' + status);
        }
    });
}

function getHourlyCost(aircraftModel) {
    var hourlyCosts = {
        "Super King Air B300": 400000,
        "SUPER KINGAIR B200": 380000,
        "KINGAIR C90A": 350000,
        "BEECHCRAFT 300LW": 370000,
        "BEECH Super King Air B200GT": 390000,
        "Beechcraft Premier1A": 420000,
        "King Air C90B": 360000,
        "King Air C90GTI": 365000,
        "HAWKER 800XP": 500000,
        "Hawker 900XP": 490000,
        "HAWKER 850XP": 480000,
        "Hawker 750": 470000,
        "Hawker400A (XP)": 450000,
        "LEARJET-40XR": 470000,
        "BOMBARDIER CL600-2B16 (604 VARIANT)": 520000,
        "Bombardier BD-700-1A10 (Global 6000)": 550000,
        "Bombardier Global 6500": 560000,
        "GLOBAL 5000": 540000,
        "GLOBAL EXPRESS": 530000,
        "Global 7500": 570000,
        "LEARJET-45": 490000,
        "LEARJET-45 XR": 500000,
        "CESSNA CITATION 525 (CJ1+)": 350000,
        "CESSNA CITATION II": 330000,
        "CESSNA CITATION 550": 340000,
        "Citation 525A CJ2+": 360000,
        "CESSNA CARAVAN 208B": 180000,
        "CESSNA CITATION 560XL": 370000,
        "CESSNA CITATION 560 XLS": 380000,
        "Dornier DO-228-201": 200000,
        "FALCON2000LX": 550000,
        "FALCON 7X (M 1000)": 570000,
        "FALCON 900EX": 560000,
        "FALCON 2000 LX": 540000,
        "Twin Otter DHC-6- 300": 180000,
        "Embraer EMB-135 (Legacy 600)": 420000,
        "EMB 500 Phenom 100E": 380000,
        "EMB135BJ (LEGACY 650)": 460000,
        "EMBRAER EMB-135": 400000,
        "EMBRAER 190- 100ECJ (Lineage 1000)": 470000,
        "Gulfstream G-150": 500000,
        "Gulfstream G200": 520000,
        "GULFSTREAM  (G550)": 530000,
        "P-180 AVANTI II": 350000,
        "PILATUS PC12/45": 280000,
    };
    

    return hourlyCosts[aircraftModel] || 0;
}



function displayTable(source, destination, aircraftMake, aircraftModel, distance, timeString, flyCost, dutyCost, travelCharge, taxRate, travelChargeAfterTax) {
    // Create a table with Bootstrap classes
    var table = document.createElement("table");
    table.classList.add("table", "table-bordered", "table-striped", "mt-3", "w-75", "mx-auto");

    // Create table rows and cells with Bootstrap classes
    var hourlyCost = getHourlyCost(aircraftModel);
    var rows = [
        ["Source", source],
        ["Destination", destination],
        ["Aircraft Make", aircraftMake],
        ["Aircraft Model", aircraftModel],
        ["Aerial Distance", distance + " km"],
        ["Travel Duration", timeString],
        // ["Fly Cost", formatCurrency(flyCost)],
        // ["Duty Cost", formatCurrency(dutyCost)],
        ["Hourly Cost", formatCurrency(hourlyCost)], // Added this line
        ["Travel Charge", formatCurrency(travelCharge)],

        ["Tax Rate", taxRate + "%"],
        ["Total Cost", formatCurrency(travelChargeAfterTax)]
    ];

    for (var i = 0; i < rows.length; i++) {
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.classList.add("fw-bold");
        cell1.innerHTML = rows[i][0];
        cell2.innerHTML = rows[i][1];
    }

    // Add space between buttons
    document.body.appendChild(document.createElement("br"));



    // Add download button for Excel
    var downloadButton = document.createElement("button");
    downloadButton.classList.add("btn", "btn-success", "float-end", "mt-3", "me-3");
    downloadButton.innerText = "Download Excel";
    downloadButton.onclick = function () {
        downloadExcel(table);
    };
    document.body.appendChild(downloadButton);

    // Append the table to the document body
    document.body.appendChild(table);
}



// Function to download table content in Excel format
function downloadExcel(table) {
    var blob = new Blob([table.outerHTML], { type: 'application/vnd.ms-excel' });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'table_data.xls';
    link.click();
}


function formatCurrency(value) {
    // Format value as currency in Rupees without decimal
    return "₹ " + Math.floor(value).toLocaleString('en-IN');
}







function showMarkers(sourceLatLng, destinationLatLng) {
    if (sourceMarker) {
        sourceMarker.setMap(null);
    }

    if (destinationMarker) {
        destinationMarker.setMap(null);
    }

    sourceMarker = new google.maps.Marker({
        position: sourceLatLng,
        map: map,
        title: "Source"
    });

    destinationMarker = new google.maps.Marker({
        position: destinationLatLng,
        map: map,
        title: "Destination"
    });

    var bounds = new google.maps.LatLngBounds();
    bounds.extend(sourceMarker.getPosition());
    bounds.extend(destinationMarker.getPosition());
    map.fitBounds(bounds);
}

function drawPolyline(sourceLatLng, destinationLatLng) {
    if (polyline) {
        polyline.setMap(null);
    }

    polyline = new google.maps.Polyline({
        path: [sourceLatLng, destinationLatLng],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    polyline.setMap(map);
}

initMap();