var map;
var markers = [];
var circles = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 20.5937, lng: 78.9629 },
        zoom: 5
    });

    // Populate Airport dropdown
    var airportSelect = document.getElementById('airportSelect');
    airports.forEach(function(airport) {
        var option = document.createElement('option');
        option.value = airport.code;
        option.textContent = airport.name + ' (' + airport.code + ')';
        airportSelect.appendChild(option);
    });
}

google.maps.event.addDomListener(window, 'load', initMap);

var airports = [
    { "code": "VEAT/IXA", "name": "Agartala Airport", "coords": [23.8860, 91.2404] },
    { "code": "VOAT/AGX", "name": "Agatti Aerodrome", "coords": [10.8231, 72.1763] },
    { "code": "VIAG/AGR", "name": "Agra Airport / Agra Air Force Base", "coords": [27.1557, 77.9607] },
    { "code": "VAAK/AKD", "name": "Akola Airport", "coords": [20.6990, 77.0586] },
    { "code": "VEAN/IXV", "name": "Along Airport", "coords": [28.1752, 94.8026] },
    { "code": "VILK/LKO", "name": "Lucknow Amausi Airport", "coords": [26.7606, 80.8893] },
    { "code": "VIAM/AMB", "name": "Ambala Air Force Base", "coords": [30.3675, 76.8164] },
    { "code": "VOAR/XAX", "name": "Anand Arakkonam Air Force Base", "coords": [13.5767, 79.4103] },
    { "code": "VAAU/IXU", "name": "Aurangabad Airport", "coords": [19.8637, 75.3987] },
    { "code": "VEBD/IXB", "name": "Bagdogra Airport / Bagdogra Air Force Base", "coords": [26.6812, 88.3286] },
    { "code": "VIBL/BKB", "name": "Bakshi Ka Talab Air Force Base", "coords": [26.2200, 80.4997] },
    { "code": "VEBG/RGH", "name": "Balurghat Airport", "coords": [25.2631, 88.7966] },
    { "code": "VIAL/IXD", "name": "Bamrauli Air Force Base", "coords": [25.4425, 81.7348] },
    { "code": "VOBL/BLR", "name": "Bangalore International Airport", "coords": [13.1986, 77.7066] },
    { "code": "VIBY/BEK", "name": "Bareli Airport", "coords": [28.4224, 79.4502] },
    { "code": "VEBA/BQA", "name": "Behala Airport", "coords": [22.6316, 88.4467] },
    { "code": "VABM/IXG", "name": "Belgaum Airport", "coords": [15.8590, 74.6185] },
    { "code": "VOBI/BEP", "name": "Bellary Airport", "coords": [15.1628, 76.8807] },
    { "code": "VABV/BHU", "name": "Bhavnagar Airport", "coords": [21.7550, 72.1861] },
    { "code": "VIBT/BKN", "name": "Bhisiana Air Force Base", "coords": [30.9261, 74.6229] },
    { "code": "VABP/BHO", "name": "Bhopal Airport (Bairagarh Airport)", "coords": [23.2875, 77.3374] },
    { "code": "VABJ/BHJ", "name": "Bhuj Airport", "coords": [23.2875, 69.6701] },
    { "code": "VIBR/BUU", "name": "Bhuntar Airport", "coords": [31.8826, 77.1543] },
    { "code": "VOBR/BDR", "name": "Bidar Air Force Station", "coords": [17.9164, 77.5188] },
    { "code": "VEBS/BBI", "name": "Biju Patnaik Airport", "coords": [20.2527, 85.8173] },
    { "code": "VABI/PAB", "name": "Bilaspur Airport", "coords": [21.9902, 82.1099] },
    { "code": "VERC/IXR", "name": "Birsa Munda Airport (Ranchi Airport)", "coords": [23.3175, 85.3211] },
    { "code": "VOCL/CCJ", "name": "Calicut International Airport (Karipur Airport)", "coords": [11.1364, 75.9553] },
    { "code": "VOCX/IXZ", "name": "Car Nicobar Air Force Base", "coords": [9.1533, 92.8125] },
    { "code": "VEJT/JRH", "name": "Chabua Air Force Base (Jorhat Airport)", "coords": [27.4828, 95.0160] },
    { "code": "VICX/KEQ", "name": "Chakeri Air Force Station", "coords": [26.4042, 80.4123] },
    { "code": "VECK/CDP", "name": "Chakulia Airport", "coords": [22.4980, 86.4906] },
    { "code": "VICG/IXC", "name": "Chandigarh Airport (Chandigarh Air Force Base)", "coords": [30.6737, 76.7889] },
    { "code": "VABB/BOM", "name": "Chatrapati Shivaji International Airport", "coords": [19.0880, 72.8679] },
    { "code": "VOMM/MAA", "name": "Chennai International Airport", "coords": [13.0827, 80.2707] },
    { "code": "VOCI/COK", "name": "Cochin International Airport (Kochi)", "coords": [10.1520, 76.3922] },
    { "code": "VOCC/COK", "name": "Cochin Navy Airbase", "coords": [10.1520, 76.3922] },
    { "code": "VOCB/CJB", "name": "Coimbatore Airport", "coords": [11.0300, 77.0434] },
    { "code": "VECO/COH", "name": "Cooch Behar Airport", "coords": [26.3313, 89.4616] },
    { "code": "VOCP/CDP", "name": "Cuddapah Airport", "coords": [14.5104, 78.7726] },
    { "code": "VAGO/GOI", "name": "Dabolim Airport (Goa Airport)", "coords": [15.3808, 73.8310] },
    { "code": "VADN/NMB", "name": "Daman Airport", "coords": [20.4349, 72.8441] },
    { "code": "VADZ/DAP", "name": "Daparizo Airport", "coords": [27.9906, 94.2258] },
    { "code": "VEDZ/DAE", "name": "Daporijo Airport", "coords": [27.9839, 94.2174] },
    { "code": "VAID/IDR", "name": "Devi Ahilyabai Holkar International Airport", "coords": [22.7217, 75.8011] },
    { "code": "VEDB/DBD", "name": "Dhanbad Airport", "coords": [23.8315, 86.4237] },
    { "code": "VEMN/DIB", "name": "Dibrugarh Airport (Mohanbari Airport)", "coords": [27.4839, 95.0160] },
    { "code": "VEMR/DMU", "name": "Dimapur Airport (Dimapur Air Force Base)", "coords": [25.8783, 93.7713] },
    { "code": "VODK/DOX", "name": "Donakonda Airport", "coords": [15.3639, 79.1977] },
    { "code": "VANP/NAG", "name": "Dr. Babasaheb Ambedkar International Airport", "coords": [21.0915, 79.0493] },
    { "code": "VODG/DAG", "name": "Dundigul Air Force Academy", "coords": [17.5055, 78.3875] },
    { "code": "VIGG/GAG", "name": "Gaggal Airport (Kangra Airport)", "coords": [32.1656, 76.2632] },
    { "code": "VEGY/GAY", "name": "Gaya Airport", "coords": [24.7443, 84.9510] },
    { "code": "VEGK/GOP", "name": "Gorakhpur Air Force Base", "coords": [26.7397, 83.4490] },
    { "code": "VAGN/GUX", "name": "Guna Airport", "coords": [24.6540, 77.3475] },
    { "code": "VIGR/GWL", "name": "Gwalior Airport (Maharajpur Air Force Base)", "coords": [26.2950, 78.2277] },
    { "code": "VOHK/HKW", "name": "Hakimpet Air Force Station", "coords": [17.4725, 78.5243] },
    { "code": "VIDX/HSS", "name": "Hindon Air Force Base", "coords": [28.7145, 77.4772] },
    { "code": "VOBG/BGA", "name": "Hindustan Airport", "coords": [13.1986, 77.7066] },
    { "code": "VEHK/WSJ", "name": "Hirakud Airport", "coords": [21.5167, 83.8667] },
    { "code": "VIHR/HSR", "name": "Hissar Airport", "coords": [29.1798, 75.7519] },
    { "code": "VAHB/HBX", "name": "Hubli Airport", "coords": [15.3602, 75.0849] },
    { "code": "VEIM/IMF", "name": "Imphal Airport (Tulihal Airport)", "coords": [24.7600, 93.8967] },
    { "code": "VIDP/DEL", "name": "Indira Gandhi International Airport", "coords": [28.5562, 77.1000] },
    { "code": "VAJB/JLR", "name": "Jabalpur Airport", "coords": [23.1770, 80.0520] },
    { "code": "VIJP/JAI", "name": "Jaipur Airport (Sanganer Airport)", "coords": [26.8240, 75.8021] },
    { "code": "VIJR/JSA", "name": "Jaisalmer Airport", "coords": [26.8946, 70.8645] },
    { "code": "VIJU/IXJ", "name": "Jammu Airport", "coords": [32.6894, 74.8378] },
    { "code": "VAJM/JGA", "name": "Jamnagar Airport (Jamnagar Air Force Base)", "coords": [22.4658, 70.0125] },
    { "code": "VEJS/IXW", "name": "Jamshedpur Airport", "coords": [22.8134, 86.1681] },
    { "code": "VEJP/JSA", "name": "Jeypore Airport", "coords": [18.8806, 82.5686] },
    { "code": "VIJN/JHS", "name": "Jhansi Airport", "coords": [25.5026, 78.5562] },
    { "code": "VEJH/IXR", "name": "Jharsuguda Airport", "coords": [21.9189, 84.0501] },
    { "code": "VIJO/JDH", "name": "Jodhpur Airport (Jodhpur Air Force Base)", "coords": [26.2515, 73.0638] },
    { "code": "VIDN/DED", "name": "Jolly Grant Airport", "coords": [30.1896, 78.1801] },
    { "code": "VAJJ/JUH", "name": "Juhu Airport", "coords": [19.0974, 72.8328] },
    { "code": "VAKS/HJR", "name": "Junagadh Airport (Keshod Airport)", "coords": [21.3176, 70.2706] },
    { "code": "VEKR/IXH", "name": "Kailashahar Airport", "coords": [24.3083, 92.0074] },
    { "code": "VEKM/IXQ", "name": "Kamalpur Airport", "coords": [24.1571, 91.7714] },
    { "code": "VAKE/IXY", "name": "Kandla Airport (Gandhidham Airport)", "coords": [23.1136, 70.1002] },
    { "code": "VIKA/KNU", "name": "Kanpur Airport (Chakeri Airport)", "coords": [26.4417, 80.3642] },
    { "code": "VIKI/HJR", "name": "Khajuraho Airport", "coords": [24.8177, 79.9197] },
    { "code": "VAKD/KNW", "name": "Khandwa Airport", "coords": [21.8324, 76.3514] },
    { "code": "VEKW/IXN", "name": "Khowai Airport", "coords": [24.0680, 91.5410] },
    { "code": "VAKP/KLH", "name": "Kolhapur Airport", "coords": [16.6644, 74.2857] },
    { "code": "VIKO/KTU", "name": "Kota Airport", "coords": [25.1605, 75.8440] },
    { "code": "VILH/IXL", "name": "Leh Kushok Bakula Rimpochee Airport", "coords": [34.1357, 77.5460] },
    { "code": "VELR/IXI", "name": "Lilabari Airport", "coords": [27.2955, 94.0977] },
    { "code": "VEPT/PAT", "name": "Lok Nayak Jaya Prakash Narayan Airport (Patna)", "coords": [25.5914, 85.0880] },
    { "code": "VEGT/GAU", "name": "Lokpriya Gopinath Bordoloi International Airport", "coords": [26.1060, 91.5859] },
    { "code": "VOMD/IXM", "name": "Madurai Airport", "coords": [9.8329, 78.0907] },
    { "code": "VEMH/LDA", "name": "Malda Airport", "coords": [25.0255, 88.6275] },
    { "code": "VOML/IXE", "name": "Mangalore International Airport", "coords": [12.9615, 74.8900] },
    { "code": "VEMZ/MZU", "name": "Muzzafarpur Airport", "coords": [26.1190, 85.3155] },
    { "code": "VOMY/MYQ", "name": "Mysore Airport", "coords": [12.3081, 76.6499] },
    { "code": "VIBK/BOM", "name": "Nal Air Force Base", "coords": [28.5562, 77.1000] },
    { "code": "VAND/NDC", "name": "Nanded Airport", "coords": [19.1840, 77.3190] },
    { "code": "VANR/ISK", "name": "Nasik Road Airport", "coords": [20.1163, 73.9123] },
    { "code": "VECC/CCU", "name": "Netaji Subhash Chandra Bose International Airport", "coords": [22.6543, 88.4467] },
    { "code": "VONV/none", "name": "Neyvafli Airport", "coords": [28.0619, 94.7121] },
    { "code": "VEPH/RDP", "name": "Panagarh Air Force Base", "coords": [23.5178, 87.2867] },
    { "code": "VIPT/PGH", "name": "Pant Nagar Airport (Pantnagar Airport)", "coords": [29.0334, 79.4739] },
    { "code": "VEPG/IXT", "name": "Pasighat Airport", "coords": [28.0665, 95.3294] },
    { "code": "VIPK/IXP", "name": "Pathankot Air Force Base", "coords": [32.2338, 75.6344] },
    { "code": "VOPC/PNY", "name": "Pondicherry Airport", "coords": [11.9680, 79.8101] },
    { "code": "VAPR/PBD", "name": "Porbandar Airport", "coords": [21.6487, 69.6573] },
    { "code": "VAPO/PNQ", "name": "Pune Airport (Lohegaon Air Force Base)", "coords": [18.5800, 73.9196] },
    { "code": "VEPU/PUI", "name": "Purnea Airport", "coords": [25.7617, 87.4802] },
    { "code": "VARP/RPR", "name": "Raipur Airport", "coords": [21.1804, 81.7386] },
    { "code": "VIAR/ATQ", "name": "Raja Sansi International Airport (Amritsar Int'l)", "coords": [31.7096, 74.7998] },
    { "code": "VORY/RJA", "name": "Rajahmundry Airport", "coords": [17.1106, 81.8188] },
    { "code": "VOHS/HYD", "name": "Rajiv Gandhi International Airport", "coords": [17.2315, 78.4294] },
    { "code": "VARK/RAJ", "name": "Rajkot Airport", "coords": [22.3090, 70.7795] },
    { "code": "VORG/RMD", "name": "Ramagundam Airport", "coords": [18.7572, 79.4742] },
    { "code": "VARG/RTC", "name": "Ratnagiri Airport", "coords": [17.0023, 73.3250] },
    { "code": "VERL/none", "name": "Raxaul Airport", "coords": [26.9654, 84.8582] },
    { "code": "VERK/RRK", "name": "Rourkela Airport", "coords": [22.2561, 84.8141] },
    { "code": "VERU/RUP", "name": "Rupsi Airport", "coords": [26.1544, 89.0195] },
    { "code": "VIDD/VCI", "name": "Safdarjung Airport (Safdarjung Air Force Station)", "coords": [28.5842, 77.2050] },
    { "code": "VILD/QRS", "name": "Sahnewal Airport", "coords": [30.8547, 75.9563] },
    { "code": "VOSM/SXV", "name": "Salem Airport", "coords": [11.7809, 78.0650] },
    { "code": "VAAH/AMD", "name": "Sardar Vallabhbhai Patel International Airport", "coords": [23.0734, 72.6260] },
    { "code": "VIST/TNI", "name": "Satna Airport", "coords": [24.5628, 80.8558] },
    { "code": "VEBI/SHL", "name": "Shillong Airport (Barapani Airport)", "coords": [25.7037, 91.9780] },
    { "code": "VISM/SLV", "name": "Shimla Airport", "coords": [31.0815, 77.0685] },
    { "code": "VASL/SSE", "name": "Sholapur Airport", "coords": [17.6273, 75.9348] },
    { "code": "VEKU/IXS", "name": "Silchar Airport (Kumbhirgram Air Force Base)", "coords": [24.9129, 92.9785] },
    { "code": "VIAX/HSI", "name": "Sirsa Air Force Base", "coords": [29.1798, 75.7519] },
    { "code": "VOPN/PUT", "name": "Sri Sathya Sai Airport", "coords": [14.1490, 77.7910] },
    { "code": "VISR/SXR", "name": "Srinagar Airport (Srinagar Air Force Base)", "coords": [33.9874, 74.7745] },
    { "code": "VOSX/none", "name": "Sulur Air Force Base", "coords": [11.0182, 77.0849] },
    { "code": "VASU/STV", "name": "Surat Airport", "coords": [21.1141, 72.7411] },
    { "code": "VOTX/TMB", "name": "Tambaram Air Force Base", "coords": [12.9127, 80.1275] },
    { "code": "VOTJ/TJV", "name": "Tanjore Air Force Base", "coords": [10.7242, 79.1051] },
    { "code": "VETZ/TEZ", "name": "Tezpur Airport (Tezpur Air Force Base)", "coords": [26.7091, 92.8040] },
    { "code": "VETJ/TEI", "name": "Tezu Airport", "coords": [27.9451, 96.1620] },
    { "code": "VOTV/TRV", "name": "Thiruvananthapuram International Airport", "coords": [8.4821, 76.9203] },
    { "code": "VOTR/TRZ", "name": "Tiruchirapalli Airport", "coords": [10.7654, 78.7088] },
    { "code": "VOTP/TIR", "name": "Tirupati Airport", "coords": [13.6325, 79.5431] },
    { "code": "VEAZ/none", "name": "Turial Air Force Base", "coords": [23.8723, 91.2882] },
    { "code": "VAUD/UDR", "name": "Udaipur Airport", "coords": [24.6172, 73.8961] },
    { "code": "VIUX/UDR", "name": "Udhampur Air Force Base", "coords": [32.9254, 75.1276] },
    { "code": "VAUH/VNS", "name": "Varanasi Airport (Lal Bahadur Shastri Airport)", "coords": [25.4521, 82.8592] },
    { "code": "VAVV/VGA", "name": "Vijayawada Airport", "coords": [16.5219, 80.7970] },
    { "code": "VOVR/VTZ", "name": "Visakhapatnam Airport (Visakhapatnam Air Force Base)", "coords": [17.7215, 83.2244] },
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

// Populate Aircraft Model dropdown based on selected manufacturer
document.getElementById('aircraftMake').addEventListener('change', function() {
    var make = this.value;
    var models = aircraftModels[make];
    var modelSelect1 = document.getElementById('aircraftModel');
    var modelSelect2 = document.getElementById('aircraftModel2');
    var modelSelect3 = document.getElementById('aircraftModel3');
    clearDropdown(modelSelect1);
    clearDropdown(modelSelect2);
    clearDropdown(modelSelect3);
    models.forEach(function(model) {
        var option1 = document.createElement('option');
        option1.value = model;
        option1.textContent = model;
        var option2 = document.createElement('option');
        option2.value = model;
        option2.textContent = model;
        var option3 = document.createElement('option');
        option3.value = model;
        option3.textContent = model;
        modelSelect1.appendChild(option1);
        modelSelect2.appendChild(option2);
        modelSelect3.appendChild(option3);
    });
});

// Function to clear dropdown options
function clearDropdown(dropdown) {
    dropdown.innerHTML = '<option value="">Select Model</option>';
}

// Function to update map and add range circles
function updateMap() {
    var airportCode = document.getElementById('airportSelect').value.toUpperCase();
    var airport = airports.find(a => a.code === airportCode);
    if (!airport) {
        alert('Airport not found!');
        return;
    }

    // Place marker at selected airport location
    var marker = new google.maps.Marker({
        position: { lat: airport.coords[0], lng: airport.coords[1] },
        map: map
    });
    markers.push(marker);

    // Clear existing circles
    circles.forEach(function(circle) {
        circle.setMap(null);
    });
    circles = [];

    var model1 = document.getElementById('aircraftModel').value;
    var model2 = document.getElementById('aircraftModel2').value;
    var model3 = document.getElementById('aircraftModel3').value;
    var models = [model1, model2, model3].filter(Boolean);

    if (models.length === 0) {
        alert('Please select at least one aircraft model.');
        return;
    }

    var circleColors = ['red', 'blue', 'green']; // Colors for circles
    var circleBounds = new google.maps.LatLngBounds();

    models.forEach(function(model, index) {
        var range = getRangeForModel(model);
        if (range !== null) {
            var circle = new google.maps.Circle({
                strokeColor: circleColors[index], // Set different color for each model
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: circleColors[index],
                fillOpacity: 0.2,
                map: map,
                center: new google.maps.LatLng(airport.coords[0], airport.coords[1]),
                radius: range * 1852 // Convert nautical miles to meters
            });
            circles.push(circle);

            // Extend bounds to include circle
            circleBounds.union(circle.getBounds());
        }
    });

    // Set map center and zoom
    map.setCenter(new google.maps.LatLng(airport.coords[0], airport.coords[1]));
    map.setZoom(5);

    // Fit map to bounds
    map.fitBounds(circleBounds);
}

// Function to clear markers and circles
function clearMarkersAndCircles() {
    markers.forEach(function(marker) {
        marker.setMap(null);
    });
    markers = [];
    circles.forEach(function(circle) {
        circle.setMap(null);
    });
    circles = [];
}

// Function to handle undo action
function undo() {
    if (markers.length > 0) {
        markers.pop().setMap(null);
    }
    if (circles.length > 0) {
        circles.pop().setMap(null);
    }
}

// Function to handle reset action
function reset() {
    location.reload();
}

// Function to get range for a given aircraft model
function getRangeForModel(model) {
    // Define ranges for different aircraft models
    var ranges = {
        "Super King Air B300": 1480,
        "SUPER KINGAIR B200": 1580,
        "KINGAIR C90A": 900,
        "BEECHCRAFT 300LW": 1570,
        "BEECH Super King Air B200GT": 1592,
        "Beechcraft Premier1A": 1430,
        "King Air C90B": 940,
        "King Air C90GTI": 1321,
        "HAWKER 800XP": 2620,
        "Hawker 900XP": 2929,
        "HAWKER 850XP": 2710,
        "Hawker 750": 1978,
        "Hawker400A (XP)": 1519,
        "LEARJET-40XR": 1960,
        "BOMBARDIER CL600-2B16 (604 VARIANT)": 2880,
        "Bombardier BD-700-1A10 (Global 6000)": 2980,
        "Bombardier Global 6500": 2780,
        "GLOBAL 5000": 2981,
        "GLOBAL EXPRESS": 2880,
        "Global 7500": 2930,
        "LEARJET-45": 1968,
        "LEARJET-45 XR": 2301,
        "CESSNA CITATION 525 (CJ1+)": 1400,
        "CESSNA CITATION II": 1200,
        "CESSNA CITATION 550": 1900,
        "Citation 525A CJ2+": 1550,
        "CESSNA CARAVAN 208B": 1000,
        "CESSNA CITATION 560XL": 1900,
        "CESSNA CITATION 560 XLS": 2100,
        "Dornier DO-228-201": 715,
        "FALCON2000LX": 2830,
        "FALCON 7X (M 1000)": 2810,
        "FALCON 900EX": 2730,
        "FALCON 2000 LX": 2630,
        "Twin Otter DHC-6- 300": 580,
        "Embraer EMB-135 (Legacy 600)": 2830,
        "EMB 500 Phenom 100E": 1178,
        "EMB135BJ (LEGACY 650)": 2990,
        "EMBRAER EMB-135": 1750,
        "EMBRAER 190- 100ECJ (Lineage 1000)": 2880,
        "Gulfstream G-150": 2850,
        "Gulfstream G200": 2820,
        "GULFSTREAM  (G550)": 2990,
        "P-180 AVANTI II": 1500,
        "PILATUS PC12/45": 1309
    };
    return ranges[model];
}


function printMap() {
    window.print('map');
}