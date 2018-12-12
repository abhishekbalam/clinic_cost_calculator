<?php
    include 'scripts/class.utils.php';
    $utils = new UTILS();
?>
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <meta name="description" content="We made a simple way to estimate costs of setting up and running a clinic in India.">
    <meta name="author" content="Abhishek Balam">
    
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="assets/css/calculator.css">
    <title>Clinic Cost Calculator | Being Doc</title>
</head>

<body>


    <div id="advanced-search-form">
        <div class="row ccc">
            <p class="valign-wrapper" style="position: relative;">
                <!-- <img class="center-align" src="http://beingdoc.com/resources/images/Being_Doc_Logo_Horizontal.png"> -->
                <span class="center valign hide-on-med-and-down">Clinic Cost Calculator</span></p>
            <p id="ccc" class="hide-on-large-only   center">Clinic Cost Calculator</p>
            <br>
            <blockquote style="border-color: #26A69A"><h2>Please Enter The Following Details.</h2></blockquote>
        </div>
        <form action="results.php" method="POST">
            <div class="row">
                <div class="input-field col m6">
                    <i class="material-icons prefix">account_circle</i>
                    <input type="text" class="validate" name="name" id="first-name" required>
                    <label for="first-name">Name</label>
                </div>
                <div class="input-field col m6">
                    <i class="material-icons prefix">email</i>
                    <input id="email" type="email" class="validate" name="email" required>
                    <label for="email" data-error="Invalid Email Id.">Email</label>
                </div>

            </div>
            <div class="row">
                <div class="input-field col s6">
                    <i class="material-icons prefix">location_on</i>
                    <input type="text" id="autocomplete-input" class="autocomplete" name="geo" required>
                    <label for="autocomplete-input">City/Town</label>
                </div>
                <div class="input-field col s6 hide-on-small-and-down" required>
              
                    <select name="practice">
                        <option value="" disabled selected>Select Practice.</option>
                        <option value="1">General Physician</option>
                        <option value="2">Dentist</option>
                        <option value="3">Physiotherapist</option>
                        <option value="4">Pathology And Radiology</option>
                        <option value="5">Dermatologist</option>
                        <option value="6">Paediatrician</option>
                        <option value="7">Gynaecologist</option>
                        <option value="8">Opthalmologist</option>
                        <option value="9">AYUSH</option>
                        <option value="10">Dietitian</option>
                        <option value="11">Psychiatrist</option>
                    </select>
                    <label>Practice Type</label>
                </div>

            </div>
            <div class="row hide-on-med-and-up">
                <p class="center" style="font-size: 1.5rem">Select Practice Type</p>
                <p class="col s12">
                    <input type="radio" class="with-gap" id="1" value="1" name="practice">
                    <label for="1">General Physician</label>
                </p>
                <p class="col s12">
                    <input type="radio" class="with-gap" id="2" value="2" name="practice">
                    <label for="2">Dentist</label>
                </p>
                <p class="col s12">
                    <input type="radio" class="with-gap" id="3" value="3" name="practice">
                    <label for="3">Physiotherapist</label>
                </p>
                <p class="col s12">
                    <input type="radio" class="with-gap" id="4" value="4" name="practice">
                    <label for="4">Pathology And Radiology</label>
                </p>
                <p class="col s12">
                    <input type="radio" class="with-gap" id="5" value="5" name="practice">
                    <label for="5">Dermatologist</label>
                </p>
                <p class="col s12">
                    <input type="radio" class="with-gap" id="6" value="6" name="practice">
                    <label for="6">Paediatrician</label>
                </p>
                <p class="col s12">
                    <input type="radio" class="with-gap" id="7" value="7" name="practice">
                    <label for="7">Gynaecologist</label>
                </p>
                <p class="col s12">
                    <input type="radio" class="with-gap" id="8" value="8" name="practice">
                    <label for="8">Opthalmologist</label>
                </p>
                <p class="col s12">
                    <input type="radio" class="with-gap" id="9" value="9" name="practice">
                    <label for="9">AYUSH</label>
                </p>
                <p class="col s12">
                    <input type="radio" class="with-gap" id="10" value="10" name="practice">
                    <label for="10">Dietitian</label>
                </p>
                <p class="col s12">
                    <input type="radio" class="with-gap" id="11" value="11" name="practice">
                    <label for="11">Psychiatrist</label>
                </p>
            </div>
            <div class="clearfix"></div>
            <div class="center">
                <button type="submit" class="center btn  btn-large waves-effect waves-light" id="search"> <span class="glyphicon glyphicon-search"></span>Calculate</button>
            </div>
        </form>
    </div>

    <!-- Compiled and minified JavaScript -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
    
    <script type="text/javascript">
    $(document).ready(function() {
        $('select').material_select();
        $('input.autocomplete').autocomplete({
            <?php
            echo 'data:'.$utils->get_geo_json().',';
            ?>
            limit: 20,  
        });
    });
    </script>
</body>

</html>
