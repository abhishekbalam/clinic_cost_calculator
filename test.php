
<?php

//justing for testing all the functions.

include_once("scripts/class.ccc.php");
include_once("scripts/class.ccc.php");

$ccc = new CCC();
$utils = new UTILS();
print_r($ccc->get_cost(2,3,0,0)) ;
	
print_r($ccc->get_item_list(2,5,'I'));
//var_dump($ccc->get_item_list(2,5,'A'));
exit;

// foreach ($arr as $key => $value) {
// 	echo $key.":  ";
// 	//print_r($utils->decode($value));
// 	//print_r($value);
// 	echo "<br>";
// }
?>