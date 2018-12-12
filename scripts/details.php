<?php 
include_once("class.ccc.php");
include_once("class.ccc.php");

$ccc = new CCC();
$utils = new UTILS();

if(isset($_POST['item_category']) AND isset($_POST['geo'])AND isset($_POST['practice'])){
	$arr=array();
	$arr['header']='Cost Of '.$utils->get_item_categories($_POST['item_category']);
	$body[]="";
	$count=1;
	$arr1=$ccc->get_cost_array($_POST['geo'],$_POST['practice'],3,$_POST['item_category'])[$_POST['item_category']];
	foreach ($arr1 as $key => $value) {
		$body1 = 
		'<tr>
			<td>'.$count.'</td>
			<td>'.$key.'</td>
			<td>Rs.'.$value.'</td>
		</tr>';
		array_push($body, $body1);
		$count=$count+1;
	}
	$arr['body']=$body;
	
	echo json_encode($arr);
}
else{
	echo "error";
}
?>