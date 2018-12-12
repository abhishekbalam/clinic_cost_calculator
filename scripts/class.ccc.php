<?php
require_once('dbconfig.php');
require_once('class.utils.php');

class CCC
{	

	private $conn;
	
	public function __construct()
	{
		$database = new Database();
		$db = $database->dbConnection();
		$this->conn = $db;
    }

	public function get_cost($geo,$practice,$mode,$item_category){
		//to get the cost arrays with keys as the item_categories and values as cost values
		//mode(0)=>total cost
		//mode(1)=>fixed cost
		//mode(2)=>recurring cost
		//mode(3)=>cost by item_category
		$utils=new UTILS();
		$arr=$this->get_cost_array($geo,$practice,$mode,$item_category);
		$arr1=array();

		foreach ($arr as $key => $value) {
			$arr1[$key]=array_sum($value);
		}

		return $arr1;				
	}

	
	public function get_cost_array($geo,$practice,$mode,$item_category){
		//just returns the arrays in a way the sum can be calculated
		//mode(0)=>all
		//mode(1)=>fixed
		//mode(2)=>recurring
		//mode(3)=>cost by item_category
		
		$item = array();
		$utils = new UTILS();
		$count=0;
		foreach ($utils->get_item_categories(0) as $key => $value) {
			if(($mode == 0) AND ($item_category==0)){
				$item[$key]=$this->get_item_list($geo,$practice,$key);
			}
			elseif (($mode == 1)  AND ($count <= 5) AND ($item_category==0)) {
				$item[$key]=$this->get_item_list($geo,$practice,$key);
			}
			elseif (($mode == 2)  AND ($count > 5) AND ($item_category==0)){
				$item[$key]=$this->get_item_list($geo,$practice,$key);
			}
			elseif(($mode==3) AND ($item_category == $key)){
				$item[$key]=$this->get_item_list($geo,$practice,$key);
			}
			$count = $count + 1;
		}
		
		return $utils->sanitize($item);
	}	
	
	


	

	public function get_item_list($geo,$practice,$item_category){
		//returns the array of items given by category and geo/practice
		//eg. item_category = 'A'->'N' , geo and practice in int vals.geo=0->5,practice=0->11
		try{
			$utils = new UTILS();
			$temp = intval($utils->select_table($item_category)['dependence']);//0=>Practice_type, 1=>Geo
			$table=($temp)?'`geo_dependent`':'`practice_dependent`';		   //0=>practice, 1=>geo
			$col = ($temp)?$geo:$practice;									   //Select appropriate column to select from 
			$stmt=$this->conn->prepare('SELECT * FROM '.$table.' WHERE `item_type`=:id ;');
			$stmt->bindparam(':id',$item_category);
			$stmt->execute();
			
			$item = array();
			if($stmt->rowCount()>0){
				while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
					if($row[''.$col]!==""){
						$item[$row['item']]=$row[''.$col];	
					}
					
				}
				return $item;
			}
			else{
				return $item;
			}
			
		}
		catch(PDOException $e){
			echo "Error: ".$e->getMessage();
			exit;
		}
	}
}
?>