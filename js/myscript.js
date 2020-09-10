$(document).ready(function () {
    $(".launchBtn").click(function () {
        $(".launchBtn").removeClass("active");
        $(this).addClass("active");
        // getdata()
    });
    $(".launchSuccBtn").click(function () {
        $(".launchSuccBtn").removeClass("active");
        $(this).addClass("active");
        getdata()
    });
    $(".launchLandBtn").click(function () {
        $(".launchLandBtn").removeClass("active");
        $(this).addClass("active");
        getdata()
    });
});
function getdata() {
    var api = 'https://api.spaceXdata.com/v3/launches?limit=100';
    var year = $(".launchYear li.active a").text();
    var launch = $(".launchSuccess li.active a").text();
    var landing = $(".landingSuccess li.active a").text();
    var launch_success = false
    var land_success = false
    if (launch == 'True') {
        launch_success = true
    }
    if (landing == 'True') {
        land_success = true
    }
    if (year != '') {
        api = api + '&launch_success=' + launch_success + '&land_success=' + land_success + '&launch_year=' + year;
    } else if (landing == '' && launch_success == true) {
        api = api + '&launch_success=' + launch_success
    } else {
        api = api + '&launch_success=' + launch_success + '&land_success=' + land_success
    }
    fetch(api).then(
        res => {
            return res.json().then(
                data => {
                    console.log(data);
                    let temp = "";
                    data.forEach(items => {
                        temp += `<div class="col-md-3 launchDetails">
                        <img src=${items.links.mission_patch_small} alt="">
                        <h6>FalconSat #${items.flight_number}</h6>
                        <p class="mission">Mission Ids: </p>
                     <ul>
                        <li>${items.mission_id}</li>
                        </ul>
                         <p class="launch-year">Launch Year: <span >${items.launch_year}</span></p>
                        <p class="launch-success">Successful Launch: <span>${items.launch_success}</span></p>
                         <p class="landing-success">Successful Landing: <span>${items.rocket.first_stage.cores[0].land_success}</span></p>
                        </div>`;

                    });
                    document.getElementById("launchItems").innerHTML = temp;


                }
            )
        }
    )
}

		
fetch("https://api.spaceXdata.com/v3/launches?limit=100").then(
    res => {
        return res.json().then(
            data => {
                   $("#launch-area  #filter-area .launchYear ul li").on("click", function(){   
                    let temp = "";
                    data.forEach(items => {

                        if($(this).text() === items.launch_year)
                        {
                            temp += `<div class="col-md-3 launchDetails">
                        <img src=${items.links.mission_patch_small} alt="">
                        <h6>FalconSat #${items.flight_number}</h6>
                        <p class="mission">Mission Ids: </p>
                     <ul>
                        <li>${items.mission_id}</li>
                        </ul>
                         <p class="launch-year">Launch Year: <span >${items.launch_year}</span></p>
                        <p class="launch-success">Successful Launch: <span>${items.launch_success}</span></p>
                         <p class="landing-success">Successful Landing: <span>${items.rocket.first_stage.cores[0].land_success}</span></p>
                        </div>`;

                        }
                        
                    });
                    
                    $("#launchItems").html(temp);


                   });
                
                    let temp = "";
                    data.forEach(items => {
                        temp += `<div class="col-md-3 launchDetails">
                        <img src=${items.links.mission_patch_small} alt="">
                        <h6>FalconSat #${items.flight_number}</h6>
                        <p class="mission">Mission Ids: </p>
                     <ul>
                        <li>${items.mission_id}</li>
                        </ul>
                         <p class="launch-year">Launch Year: <span >${items.launch_year}</span></p>
                        <p class="launch-success">Successful Launch: <span>${items.launch_success}</span></p>
                         <p class="landing-success">Successful Landing: <span>${items.rocket.first_stage.cores[0].land_success}</span></p>
                        </div>`;

                    });
                    
                    $("#launchItems").html(temp);
                

            }
        )
    }
)
