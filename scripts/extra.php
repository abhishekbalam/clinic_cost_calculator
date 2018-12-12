
	public function print_full_db(){
		//Just made for fun .Prints full table dynamically.
		$arr=$this->get_item_categories();
		$cost=array();
		foreach($arr as $key=>$value){
			echo $value.':<br>';
			if($this->get_item_list($value,0)==0){
				echo 'EMPTY';
				echo '<br>--------------------<br>';
				echo '--------------------<br>';
				continue;
			}
			$t=$this->select_table($value);
			if(!$t['dependence']){
				$arr=$this->get_practice_types(0);
				echo '|  id  |  item_type  |  ';
				foreach ($arr as $key1 => $value1)
				{
					echo $value1.'  |  ';
				}	
				unset($value1);
			}
			else{
				$arr = $this->get_geo_types(-1);
				echo '|  id  |  item_type  |  ';
				foreach ($arr as $key1 => $value1)
				{
					echo $value1.'  |  ';
				}
			}
			foreach ($this->get_item_list($value,0) as $key1 => $value1) {
				//print_r ($value1);
				echo "<br>";
				foreach ($value1 as $key2 => $value2) {
					if($value2!==''){
						echo $value2.' | ';
					}
					else{
						echo "empty  |  ";
					}
				}
			}
			echo '<br>--------------------<br>';
			echo '--------------------<br>';
		}
	}