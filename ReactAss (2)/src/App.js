import React,{Component, PropTypes} from 'react'
import { Link } from 'react-router'
//import '../src/css/style.css'
import {Route,NavLink,HashRouter} from "react-router-dom";
import Editbox from './components/Editbox';
import Deletebox from './components/Deletebox';

class App extends React.Component {

  constructor(props) {
	  super(props)
	  this.state = {
		inputValue: " ",
		SearchData: props.SearchData ? props.SearchData: [],
		documents:props.documents ? props.documents: [],
		editing: false,
		boxval:0,
		editVal:false,
		indexVal:0,
		divIder:0,

	  }
	  
	  this.handleChange = this.handleChange.bind(this);
	  //this.handleClick = this.handleClick.bind(this);
	  this.Boxer=this.Boxer.bind(this);
	  this.Edit=this.Edit.bind(this);
	  this.EditEnable=this.EditEnable.bind(this);
	  this.EditDisable=this.EditDisable.bind(this);
  }
	
 
  handleChange(event) {   
	var searchBy = event.target.value;
	 var searchList = [];
	for (var index = 1; index <= searchBy; index++) {
		//console.log(index);
		//alert(index);
		searchList.push(index);		
	}
	//alert(searchBy);
	this.state.boxval=searchBy;
	//alert(this.state.boxval);
	this.setState({ SearchData: searchList });
  }
  
  Boxer(){
   // var ctx =document.getElementById("canvas").getContext("2d");//alert(ctx);
    //ctx.fillStyle="red";
    //ctx.fillRect(120,this.end,150,100);
    //this.end+=120;
    //alert("works");
    //this.state.boxval={this.state.boxval+1};
    let val= Number(this.state.boxval);
    val+=1;
   // alert("boxval:"+val);
    var searchBy = event.target.value;
    var searchList =[];
    for(var index=1; index <=val;index++)
    {
    	searchList.push(index);
    }
    this.setState({SearchData: searchList});
    this.state.boxval=val;
  }  
  Edit(indexv){
  	  //alert("indexv in edit:"+indexv);
  	  var width=document.getElementById("width").value;
  	  //alert("width in alert"+width);
       var height=document.getElementById("height").value;
       var color=document.getElementById("color").value;
      document.getElementById(indexv).style.height=height+"px";
      document.getElementById(indexv).style.backgroundColor=color;
      document.getElementById(indexv).style.width=width+"px";
  }
  EditEnable(index){
     this.setState({editVal:true});
     this.state.indexVal=index;
     let divid=Number(index);
     divid+=100;
     //alert("divid:"+divid);
     this.state.divIder=divid;
     //alert(this.state.indexVal);
  }
  EditDisable(){
  	this.setState({editVal:false});
  }
  render() {
  	let divele,divele1,divele2,divele3;
  	const edit=this.state.editVal;
  	var indexv=this.state.indexVal;
  	//alert("indexv="+indexv);
  	  if(edit)
  	  {
  	  	divele = (
  	  		<div align="right">
			 <h1>Edit Boxes</h1>
			 <input type="number" id="width" placeholder="Enter the width"/><br/> <br/>
			 <input type="number" id="height" placeholder="Enter the height"/> <br/> <br/>
			 <input type="text" id="color" placeholder="Enter the color"/> <br/> <br />
			 <button onClick={this.Edit.bind(this,indexv)}>save</button> 
			 <button onClick={this.EditDisable.bind(this)}>cancel</button>
			</div> 
  	  		
  	  		)

  	  }
  	  else {
  	  	divele = (
            <div>
               
            </div>
  	  	)
  	  }
  	  
      return (
          
		<HashRouter>
         <div>
            Number of Rectangles
			<input type="text" id="searchID" onChange={ this.handleChange.bind(this) }/>
			{this.state.SearchData.map((index) => (
			<div id={index+100} key={index}> 						
				<canvas id={index} width="" height="" className="rectClass"></canvas> <br/>
				<button onClick={this.EditEnable.bind(this,index)}>edit</button>
                
			 
			</div>
			))}
			{divele}
			<div id="btnID">
			<button onClick={this.Boxer.bind(this)}>Add Box</button>
			</div>
         </div>
		 </HashRouter>
      );	   
   }
}

export default App;
