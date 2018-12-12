<?php

require_once('dbconfig.php');

class UTILS
{	

	private $conn;
	
	public function __construct()
	{
		$database = new Database();
		$db = $database->dbConnection();
		$this->conn = $db;
    }
	
	

	public function runQuery($sql)
	{
		$stmt = $this->conn->prepare($sql);
		return $stmt;
	}

	

	public function get_geo_json(){
		//get JSON of all cities for the autocomplete function.
		try
		{
			$stmt=$this->conn->prepare('SELECT `city` FROM `geo` ;');
			$stmt->execute();
			$item = array();
			if($stmt->rowCount()>0){
				while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
					$item=array_merge($item,array($row['city']=>null));	
				}
				return json_encode($item);
			}
			else{
				echo "No City returned";
				exit;
			}
			
		}
		catch(PDOException $e)
		{
			echo "Error: ".$e->getMessage();
			exit;
		}
	}
	


	public function sanitize($arr){
		$arr1=array();
		$count=0;
		foreach ($arr as $key => $value) {
			if($key=='A' OR $key=='C'){
				$arr2=array();
				foreach ($value as $key1 => $value1) {
					$cost=explode(',',$value1);
					if(sizeof($cost)>1){
			 			$arr2[$cost[0]]=$cost[1];
					}
			 	}
				$arr1[$key]=$arr2;
				continue;
			}
			elseif($key == 'I' OR $key == 'J'){
				continue;	//Ignores I and J
			}
			$arr1[$key]=$arr[$key];
			

		}
		return $arr1;
	}
	

	public function get_practice_types($id){
		//returns practice types names (all when id=0 or depended on id=>number)
		try{
			$arr=array();
			$stmt = $this->conn->prepare('SELECT `type` FROM `practice_type` ORDER BY `id` ;');
			$stmt->execute();
			if($stmt->rowCount()>0){
				while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
					array_push($arr,$row['type']);
				}
			}
			if($id>0){
				return $arr[$id-1];
			}
			else{
				return $arr;
			}
			
		}
		catch(PDOException $e){
			echo "Error: ".$e->getMessage();
			exit;
		}

	}

	

	public function get_geo_types($id){
		//returns geo types names (all when id=-1 or depended on id)
		try{
			$arr=array();
			$stmt = $this->conn->prepare('SELECT *  FROM `geo_types` ORDER BY `id` ;');
			$stmt->execute(array());
			if($stmt->rowCount()>0){
				while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
					array_push($arr,$row['tier']);
				}
			}
			if($id>(-1)){
				return $arr[$id];
			}
			return $arr;
		}
		catch(PDOException $e){
			echo "Error: ".$e->getMessage();
			exit;
		}
	}

	public function get_item_categories($id){
		//returns the id of ALl items or names of items when id is provided
		try{
			$stmt = $this->conn->prepare('SELECT `id`,`category` FROM `item_categories`;');
			$stmt->execute();
			$items=array();
			if($stmt->rowCount()>0){
				while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
					$items[$row['id']]=$row['category'];
				}
			}
			if($id!==0){
				return $items[$id];
			}
			
			return $items;
		}
		catch(PDOException $e){
			echo "Error: ".$e->getMessage();
			exit;
		}
	}

	public function select_table($var){
		//returns the dependence and name of the item.
		//O => Nature Dependent and 1 => Geo Dependent
		try{
			$stmt = $this->conn->prepare('SELECT * FROM `item_categories` WHERE id = :id ;');
			$stmt->execute(array(':id'=>$var));
			$row = $stmt->fetch(PDO::FETCH_ASSOC);
			return $row;
		}
		catch(PDOException $e){
			echo "Error: ".$e->getMessage();
			exit;
		}

	}

	public function get_tier($txt){
		try{
			$stmt = $this->conn->prepare('SELECT `tier` FROM `geo` WHERE city = :city ;');
			$stmt->execute(array(':city'=>$txt));
			$row = $stmt->fetch(PDO::FETCH_ASSOC);
			return $row['tier'];
		}
		catch(PDOException $e){
			echo "Error: ".$e->getMessage();
			exit;
		}
	}

	public function tooltip($item_character){
		return ''.(((ord($item_character)-64)>6)?'Recurring cost ':'Fixed cost ').','.(intval($this->select_table($item_character)['dependence'])?' depends on location.':' depends on practice type');
			
	}

	public function send_mail($name,$email,$geo,$practice){
		$to = $email;
 		$subject = "Hello ".$name."!Thanks for using Clinic Cost Calculator.";
 		$body = "Please find the details of your future clinic, as follows:";
 		return mail($to, $subject, $body);
	}
}
?>