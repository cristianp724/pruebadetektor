<?php 
header("Access-Control-Allow-Origin: *");

class Base extends PDO
{
 
	private $dbname = "test";
	private $host = "127.0.0.1";
	private $user = "root";
	private $pass = "root";
	private $port = 39437;
	private $conex;
	public $str="";

	public function __construct() 
	{
		try {
			$this->conex = parent::__construct("pgsql:host=$this->host;port=$this->port;dbname=$this->dbname;user=$this->user;password=$this->pass");
		} catch(PDOException $e) {
			echo  $e->getMessage(); 
		}
	}

	public function cerrar() 
	{
		$this->conex = null; 
	}
}
?>