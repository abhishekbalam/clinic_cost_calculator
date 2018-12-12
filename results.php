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
    <link rel="stylesheet" type="text/css" href="assets/css/results.css">
    <title>Clinic Cost Calculator | Being Doc</title>
</head>

<body>
    <!-- Modal Structure -->
    <div id="modal1" class="modal">
        <div class="modal-content">
            <h4 class="center">Modal Header</h4>
            <table class="centered col s12">
                <thead>
                    <tr>
                        <th data-field="name">Sr.</th>
                        <th data-field="price">Item</th>
                        <th data-field="id">Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Diathermy Machine</td>
                        <td>Rs. 11000</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="modal-footer">
            <a class=" modal-action modal-close waves-effect waves-light waves-green btn-flat">Close</a>
        </div>
    </div>
    <div id="advanced-search-form">
        <div class="row ccc">
            <p class="valign-wrapper" style="position: relative;">
            <!-- <img class="center-align" src="http://beingdoc.com/resources/images/Being_Doc_Logo_Horizontal.png"> -->
            <span class="center valign hide-on-med-and-down">Clinic Cost Calculator</span></p>
            <p id="ccc" class="hide-on-large-only   center">Clinic Cost Calculator</p>
            <br>
<?php
    $set=(isset($_POST['name']) AND isset($_POST['email']) AND isset($_POST['geo']) AND isset($_POST['practice']));
    if($set){
        include 'scripts/class.utils.php';
        include 'scripts/class.ccc.php';
        $utils = new UTILS();
        $ccc = new CCC();
        $name=htmlspecialchars($_POST['name']);
        $email=htmlspecialchars($_POST['email']);
        $geo=intval($utils->get_tier(htmlspecialchars($_POST['geo'])));
        $practice=intval(htmlspecialchars($_POST['practice']));
        $item_categories=$utils->get_item_categories(0);

?>
                <blockquote style="border-color: #26A69A">
                    <h2>Hello <?php echo $name ?> , here are the results for your query.</h2>
                </blockquote>
        </div>
        <div class="card row">
            <div class="card-content teal white-text">
                <div class="row">
                    <p class="col m6 s12" style="padding:0.5rem"><i class="material-icons left">account_circle</i><?php echo $name ?></p>
                    <p class="col m6 s12" style="padding:0.5rem"><i class="material-icons left">email</i> <?php echo $email ?>
                    </p>
                    <p class="col m6 s12" style="padding:0.5rem"><i class="material-icons left">location_on</i ><?php echo $_POST['geo'] ?>
                    </p>
                    <p class="col m6 s12" style="padding:0.5rem"><i class="material-icons left">local_hospital</i><?php echo $utils->get_practice_types($practice) ?></p>
                </div>
            </div>
            <div class="card-tabs">
                <ul class="tabs tabs-transparent teal">
                    <li class="tab"><a class="active" href="#overview">Overview</a></li>
                    <li class="tab"><a href="#breakdown">Cost Breakdown</a></li>
                </ul>
            </div>
            <div class="card-content grey lighten-5">
                <div id="overview">
                    <div class="row hide-on-small-only">
                        <div class="col m2 s0"></div>
                        <div class="col m8 s12">
                            <canvas id="myChart"></canvas>
                        </div>
                        <div class="col m2 s0"></div>
                    </div>
                    <div class="row">
                        <table class="centered col s12">
                            <thead>
                                <tr>
                                    <th data-field="name">Fixed Cost <span class="hide-on-small-only">(F)</span></th>
                                    <th data-field="price">Recurring Cost <span class="hide-on-small-only">(R)</span></th>
                                    <th data-field="id">Total Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><?php echo 'Rs. '.array_sum($ccc->get_cost($geo,$practice,1,0));?></td>
                                    <td><?php echo 'Rs. '.array_sum($ccc->get_cost($geo,$practice,2,0));?></td>
                                    <td><?php echo 'Rs. '.array_sum($ccc->get_cost($geo,$practice,0,0));?></td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="breakdown">
                    <table class="highlight">
                        <thead>
                            <tr>
                                <th>Categories</th>
                                <th>Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php 
                                foreach ($item_categories as $id => $name) {
                                //    echo $ccc->get_cost($geo,$practice,3,$id)[$id].'<br>';
                                if($id =='I' OR $id =='J'){
                                    continue;
                                }
                                $tmp=$ccc->get_cost($geo,$practice,3,$id)[$id];
                                if($tmp==0){
                                    continue;
                                }
                                echo '
                                    <tr>
                                    <td>'.$name.'</td>
                                    <td><span class=" tooltipped" data-position="top" data-delay="50" data-tooltip="'.$utils->tooltip($id).'">Rs.'.$tmp.'</span></td>
                                    <td class="center">
                                        <button id="'.$id.'" class="btn waves-effect waves-light">Details</button>
                                    </td>
                                    </tr>';
                                }
                            ?>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <?php } else{
            ?>
                <blockquote style="border-color: red">
                    <h2><span style="font-style: italic;">"There are no shortcuts to any place worth going."</span><br><br>Please <a href="calculator.php">fill the form</a> first.</h2>
                </blockquote>
        </div>
        <?php } ?>
    </div>
    <!-- Compiled and minified JavaScript -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js" type="text/javascript"></script>
    <?php if($set){?>
    <script type="text/javascript">
    var data = {
        labels: [
        <?php
            $count=0;
            foreach ( $item_categories as $key => $value) {
                if($key =='I' OR $key =='J'){
                        continue;
                    }
                echo '"'.$value.(($count<=5)?' (F)':' (R)')
                .'",';
                $count =$count+1;;
            }
        ?>
        ],
        datasets: [{
            data: [
            <?php
                foreach ( $item_categories as $key => $value) {
                    if($key =='I' OR $key =='J'){
                        continue;
                    }
                    echo $ccc->get_cost($geo,$practice,3,$key)[$key].',';
                }
            ?>],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#c4cb26",
                "#01bb5c",
                "#01bb5c",
                "#0bada1",
                "#ff0000",
                "#1633e3",
                "#ff0000",
                "#3ca82c",
                "#6f1ce1",
                "#FF4500",
                "#96050a",
                "#b7f91f"

            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#c4cb26",
                "#01bb5c",
                "#01bb5c",
                "#0bada1",
                "#ff0000",
                "#1633e3",
                "#ff0000",
                "#3ca82c",
                "#6f1ce1",
                "#FF4500",
                "#96050a",
                "#b7f91f"

            ]
        }]
    };
    $(document).ready(function() {
        var ctx = $("#myChart");
        <?php 
        if($utils->send_mail($name,$email,$_POST['geo'],$_POST['practice']))
        {
        echo 'Materialize.toast("<span>We have also sent these details to your email. :)</span>", 5000);';
        }
        else{
            echo 'Materialize.toast("<span>We could not send an email to :'.$email.'.Please check again.</span>", 5000);';
        }
        ?>
        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            // options: options
        });
        $("td button").click(function() {
            var id=$(this).attr('id');
            $('.modal').modal();
            $.post('scripts/details.php', {geo : <?php echo $geo ?>,practice : <?php echo $practice ?>, item_category : id}, 
                function(returnedData){
                    console.log(returnedData);
                    var data=JSON.parse(returnedData);
                    $('.modal-content h4').html(data.header);
                    $('.modal-content table tbody').html(data.body);
                    $('#modal1').modal('open');
                }
            );
        });
    });
    </script>
    <?php }?>
</body>

</html>
