﻿#pragma strict

var door : String = "";
static var cylinderCounter : int = 0;
var box : GameObject = null;
private var fallDown : int = 0;
private var cylindersHit = new Array();

function Update() {
	/*if(fallDown == 1) {
		var step = 0.2 * Time.deltaTime;
		//var peg : GameObject = GameObject.Find("Cylinder1");
		var peg = this.gameObject;
		peg.transform.position = Vector3.MoveTowards(peg.transform.position, 
			Vector3(peg.transform.position.x, 2, peg.transform.position.z), step);
	}*/
	
	if(box == null) {
		box = GameObject.Find("RotateBox");
		//box.renderer.enabled = false;
	}

}

function OnTriggerEnter (other : Collider){
	if(other.tag.Equals("Ball1")){
//		other.gameObject.SetActive(false);
		var flagContains : int = 0;
		
		for(var i=0; i < cylindersHit.length; i++) {
			if(cylindersHit[i] == this.gameObject) {
				flagContains = 1;
				break;
			}
		}
		
		if(!flagContains) {
			cylindersHit[cylindersHit.length + 1] = (this.gameObject);
			
			cylinderCounter += 1;
			Debug.Log("counter: " + cylinderCounter + " | this: " + this.gameObject);
			
			//Debug.Log("counter > 5 ? : " + (cylinderCounter >= 5));
			if(cylinderCounter >= 5) {
				//box.renderer.enabled = true;
				box.transform.position = Vector3(-6, 1, -5.5);
				Debug.Log("moving the box");
			}			
			
			this.gameObject.SetActive(false);
		}
		//var object : GameObject = GameObject.FindGameObjectWithTag(door);
		//object.gameObject.SetActive(false);
		

//		object.rigidbody.constraints = RigidbodyConstraints.None;

		//fallDown = 1;
	}
}