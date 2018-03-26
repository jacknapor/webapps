import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Row } from 'reactstrap';
import './index.css';



class DepartmentSelect extends Component{
constructor(props){
    super(props)
    this.state = {selectedDepartment:null}
    this.handleSelection = this.handleSelection.bind(this)
    
    
  }
 handleSelection(event){
    console.log("Selction: ", event.target.value)
    this.setState({selectedDepartment:event.target.value})
    this.props.onDepartmentChange(event.target.value)
  }
	render(){
	return (<div class= "col-sm-12 col-md-12 col-lg-3 orng mb-10"> <div className="mb-0"><h4 className="mb-0">Select</h4></div><div><h4 className="mt-0"> Department:</h4></div><select onChange={this.handleSelection}> <option value="unselected">Select a Department</option>
			<option value="CSCI"> CSCI </option> 
			<option value="MUSC"> MUSC </option>
			<option value="EDUC"> EDUC </option>
			<option value="CHEM"> CHEM </option>
			<option value="MATH"> MATH </option>
			<option value="BIOL"> BIOL </option>
			<option value="SPAN"> SPAN </option>
			<option value="SIGN"> SIGN </option>
			<option value="GRMN"> GRMN </option>
			<option value="FREN"> FREN </option>
			<option value="GREK"> GREK </option>
			<option value="ITAL"> ITAL </option>
			<option value="PHYS"> PHYS </option>
			<option value="MILS"> MILS </option>
			<option value="PHIL"> PHIL </option>
			<option value="JAPN"> JAPN </option>
			<option value="PSYC"> PSYC </option>
			<option value="MGMT"> MGMT </option>
			<option value="ENGR"> ENGR </option>
			<option value="DANC"> CSCI </option>
		    </select>
		 </div>)

}


}

class YearSelect extends Component{
constructor(props){
    super(props)
    this.state= {selectedYear:null}
    this.handleSelection = this.handleSelection.bind(this)
    
  }
handleSelection(event){  
    console.log("Selction: ", event.target.value)
    this.setState({selectedYear:event.target.value})
    this.props.onYearChange(event.target.value)
  }
	render(){
	return (<div class= "col-sm-12 col-md-12 col-lg-3 orng"> <div><h4 className="mb-0">Select</h4></div><div><h4 className="mt-0"> Year:</h4></div> <select onChange= {this.handleSelection}> <option value="unselected">Select a Year</option>
			<option value="2018"> 2018 </option> 
			<option value="2019"> 2019</option>
			
		    </select>
		 </div>)

}


}
class SemesterSelect extends Component{
constructor(props){
    super(props)
    this.state= {selectedSemester:null}
    this.handleSelection = this.handleSelection.bind(this)
    
  }
handleSelection(event){
    console.log("Selction: ", event.target.value)
    this.setState({selectedSemester:event.target.value})
    this.props.onSemesterChange(event.target.value)
  }
	render(){
	return (<div class= "col-sm-12 col-md-12 col-lg-3 orng"> <div><h4 className="mb-0">Select</h4></div><div><h4 className="mt-0"> Semester:</h4></div><select onChange= {this.handleSelection}> <option value="unselected">Select a Semester</option>
			<option value="Fall"> Fall </option> 
			<option value="Spring"> Spring</option>
			
		    </select>
		 </div>)

}


}
class CCCSelect extends Component{
constructor(props){
	super(props)
	this.state= {selectedCCC:null}
	this.handleSelection= this.handleSelection.bind(this)
}

handleSelection(event){
	this.setState({selectedCCC:event.target.value})
    this.props.onCCCChange(event.target.value)
}
	render(){
return (<div class= "col-sm-12 col-md-12 col-lg-3 orng"> <h4>Select CCC Requirement:</h4><select onChange= {this.handleSelection}> <option value="unselected">Select a CCC Requirement</option>
			<option value="W1"> W1 </option> 
			<option value="W2"> W2</option>
			<option value="ARHC"> ARHC</option>
			<option value="AHLG"> AHLG</option>
			<option value="FRST"> FRST</option>
			<option value="EGHU"> EGHU</option>
			<option value="FOUN"> FOUN</option>
			<option value="CCFL"> CCFL</option>
			<option value="GLSP"> GLSP</option>
			<option value="RESC"> RESC</option>
			<option value="DUSC"> DUSC</option>
			<option value="EVCN"> EVCN</option>
			<option value="GBCC"> GBCC</option>
			<option value="EGSS"> EGSS</option>
			<option value="SLSC"> SLSC</option>
			<option value="SSLG"> SSLG</option>
			<option value="CCIP"> CCIP</option>
			<option value="LBSC"> LBSC</option>
			<option value="NSMC"> NSMC</option>
			<option value="NMLG"> NMLG</option>
			<option value="CCQR"> CCQR</option>
		    </select>
		 </div>)

}

}

class TimeSelect extends Component{
constructor(props){
	super(props)
	this.state={selectedTime:null}
	this.handleTimeEntry= this.handleTimeEntry.bind(this)
	}
handleTimeEntry(event){
	event.preventDefault()
	console.log("TEST2",this.refs.in.value)
	this.setState({selectedTime:this.refs.in.value})
    this.props.onTimeSubmit(this.refs.in.value)
}
render(){

	return(<form className="orng col-6 mb-10" onSubmit={this.handleTimeEntry}><div><h4 className="mb-0">Enter Class Time:</h4></div><div><h5 className="mt-0 mb-10"> (Example: MWF 9:00-9:52am)</h5></div><input type="text" name="t" ref="in"></input></form>)

}

}

class RoomSelect extends Component{
constructor(props){
	super(props)
	this.state={selectedRoom:null}
	this.handleRoomEntry= this.handleRoomEntry.bind(this)
}
handleRoomEntry(event){
	event.preventDefault()
	this.setState({selectedRoom:this.refs.rm.value})
	this.props.onRoomSubmit(this.refs.rm.value)
}
render(){
	return(<form className="orng col-6 mb-10" onSubmit={this.handleRoomEntry}><div><h4 className="mb-0">Enter a Room:</h4></div><div><h5 className="mt-0 mb-10" > (Example: DANA 213)</h5></div><input type="text" name="r" ref="rm"></input></form>)

}

}

class CourseDisplay extends Component{
constructor(props){
    super(props)
    this.state={year:null, semester:null, department:null, ccc:null, time:null,room:null, list:[]}

    
    this.handleDepartmentChange = this.handleDepartmentChange.bind(this)
    this.handleYearChange= this.handleYearChange.bind(this)
    this.handleSemesterChange= this.handleSemesterChange.bind(this)
	this.handleCCCChange= this.handleCCCChange.bind(this)
    this.handleTimeSubmit= this.handleTimeSubmit.bind(this)
    this.handleRoomSubmit= this.handleRoomSubmit.bind(this)
    
  }
	handleDepartmentChange(event){
	var x= 'http://eg.bucknell.edu:48484/q?'
	this.setState({department:event},() => {
        if(this.state.semester!==null && this.state.semester!=="unselected"){ 
			if(x.slice(-1)==="?"){
				x= x+"Semester="+this.state.semester
			}else{
				x= x+"&Semester="+this.state.semester
			}
		}
		if(this.state.year!==null && this.state.year!=="unselected"){ 
			if(x.slice(-1)==="?"){
				x= x+"Year="+this.state.year
			}else{
				x= x+"&Year="+this.state.year
			}
		}
		if(this.state.department!==null && this.state.department!=="unselected"){ 
			if(x.slice(-1)==="?"){
				x= x+"Department="+this.state.department
			}else{
				x= x+"&Department="+this.state.department
			}
		}
		if(this.state.ccc!==null && this.state.ccc!=="unselected"){ 
			if(x.slice(-1)==="?"){
				x= x+"CCCReq="+this.state.ccc
			}else{
				x= x+"&CCCReq="+this.state.ccc
			}
		}
		if(this.state.room!==null && this.state.room!==""){ 
			if(x.slice(-1)==="?"){
				x= x+"text=%22"+encodeURIComponent(this.state.room)+"%22"
			}else{
				x= x+"&text=%22"+encodeURIComponent(this.state.room)+"%22"
			}
		}
		x=x+'&limit=100' 
		console.log(x)


	fetch(x)
		.then(result=>result.json())
		.then(result=>{
          if (result.message.length>0){
		if(this.state.time!==null && this.state.time!==""){
			var temp=[]
		var i
		for(i=0; i<result.message.length-1; i++){
			
			if(result.message[i]['Meeting Time'].includes(this.state.time)){ temp.push(result.message[i]); console.log("TEMP", temp)} 
			}
	    if(temp.length>0){
            this.setState({list:temp})}else{this.setState({list:result.message})}
		}else{this.setState({list:result.message})}
           
	   console.log(this.state.list)}
          else {
		if(this.state.year===null && this.state.semester===null && this.state.department===null && this.state.ccc===null){
		 this.setState({list:[{Course:"Select a Year, Semester, Department, CCC Requirement, Class Time or Room to browse Course Offerings!"}]})
		}else{
            this.setState({list:[{Course:"No available courses."}]})}
          }
        })	
		.catch(err=>console.log("Couldn't fetch ", err))
        }
    );

}
	handleYearChange(event){
	var x= 'http://eg.bucknell.edu:48484/q?'
this.setState({year:event},() => {
        if(this.state.semester!==null && this.state.semester!=="unselected"){ 
			if(x.slice(-1)==="?"){
				x= x+"Semester="+this.state.semester
			}else{
				x= x+"&Semester="+this.state.semester
			}
		}
		if(this.state.year!==null && this.state.year!=="unselected"){ 
			if(x.slice(-1)==="?"){
				x= x+"Year="+this.state.year
			}else{
				x= x+"&Year="+this.state.year
			}
		}
		if(this.state.department!==null && this.state.department!=="unselected"){ 
			if(x.slice(-1)==="?"){
				x= x+"Department="+this.state.department
			}else{
				x= x+"&Department="+this.state.department
			}
		}
		if(this.state.ccc!==null && this.state.ccc!=="unselected"){ 
			if(x.slice(-1)==="?"){
				x= x+"CCCReq="+this.state.ccc
			}else{
				x= x+"&CCCReq="+this.state.ccc
			}
		}
		if(this.state.room!==null && this.state.room!==""){ 
			if(x.slice(-1)==="?"){
				x= x+"text=%22"+encodeURIComponent(this.state.room)+"%22"
			}else{
				x= x+"&text=%22"+encodeURIComponent(this.state.room)+"%22"
			}
		}
		x=x+'&limit=100' 
		console.log(x)

	fetch(x)
		.then(result=>result.json())
		.then(result=>{
          if (result.message.length>0){
		if(this.state.time!==null && this.state.time!==""){
			var temp=[]
		var i
		for(i=0; i<result.message.length-1; i++){
			
			if(result.message[i]['Meeting Time'].includes(this.state.time)){ temp.push(result.message[i]); console.log("TEMP", temp)} 
			}
	    if(temp.length>0){
            this.setState({list:temp})}else{this.setState({list:result.message})}
		}else{this.setState({list:result.message})}
           
	   console.log(this.state.list)}
          else {
		if(this.state.year===null && this.state.semester===null && this.state.department===null && this.state.ccc===null){
		 this.setState({list:[{Course:"Select a Year, Semester, Department, CCC Requirement, Class Time or Room to browse Course Offerings!"}]})
		}else{
            this.setState({list:[{Course:"No available courses."}]})}
          }
        })	
		.catch(err=>console.log("Couldn't fetch dog breeds", err))
        }
    );

}
	



	handleSemesterChange(event){
	var x= 'http://eg.bucknell.edu:48484/q?'
	this.setState({semester:event},() => {
       if(this.state.semester!==null && this.state.semester!=="unselected"){ 
			if(x.slice(-1)==="?"){
				x= x+"Semester="+this.state.semester
			}else{
				x= x+"&Semester="+this.state.semester
			}
		}
		if(this.state.year!==null && this.state.year!=="unselected"){ 
			if(x.slice(-1)==="?"){
				x= x+"Year="+this.state.year
			}else{
				x= x+"&Year="+this.state.year
			}
		}
		if(this.state.department!==null && this.state.department!=="unselected"){ 
			if(x.slice(-1)==="?"){
				x= x+"Department="+this.state.department
			}else{
				x= x+"&Department="+this.state.department
			}
		}
		if(this.state.ccc!==null && this.state.ccc!=="unselected"){ 
			if(x.slice(-1)==="?"){
				x= x+"CCCReq="+this.state.ccc
			}else{
				x= x+"&CCCReq="+this.state.ccc
			}
		}
		if(this.state.room!==null && this.state.room!==""){ 
			if(x.slice(-1)==="?"){
				x= x+"text=%22"+encodeURIComponent(this.state.room)+"%22"
			}else{
				x= x+"&text=%22"+encodeURIComponent(this.state.room)+"%22"
			}
		}
		x=x+'&limit=100' 
		console.log(x)
		


	fetch(x)
		.then(result=>result.json())
		.then(result=>{
          if (result.message.length>0){
		if(this.state.time!==null && this.state.time!==""){
			var temp=[]
		var i
		for(i=0; i<result.message.length-1; i++){
			
			if(result.message[i]['Meeting Time'].includes(this.state.time)){ temp.push(result.message[i]); console.log("TEMP", temp)} 
			}
	    if(temp.length>0){
            this.setState({list:temp})}else{this.setState({list:result.message})}
		}else{this.setState({list:result.message})}
           
	   console.log(this.state.list)}
          else {
		if(this.state.year===null && this.state.semester===null && this.state.department===null && this.state.ccc===null){
		 this.setState({list:[{Course:"Select a Year, Semester, Department, CCC Requirement, Class Time or Room to browse Course Offerings!"}]})
		}else{
            this.setState({list:[{Course:"No available courses."}]})}
          }
        })	
		.catch(err=>console.log("Couldn't fetch", err))
        }
    );


}
handleCCCChange(event){
	var x= 'http://eg.bucknell.edu:48484/q?'
	this.setState({ccc:event},() => { 
		
		if(this.state.semester!==null && this.state.semester!=="unselected"){ 
			if(x.slice(-1)==="?"){
				x= x+"Semester="+this.state.semester
			}else{
				x= x+"&Semester="+this.state.semester
			}
		}
		if(this.state.year!==null && this.state.year!=="unselected"){ 
			if(x.slice(-1)==="?"){
				x= x+"Year="+this.state.year
			}else{
				x= x+"&Year="+this.state.year
			}
		}
		if(this.state.department!==null && this.state.department!=="unselected"){ 
			if(x.slice(-1)==="?"){
				x= x+"Department="+this.state.department
			}else{
				x= x+"&Department="+this.state.department
			}
		}
		if(this.state.ccc!==null && this.state.ccc!=="unselected"){ 
			if(x.slice(-1)==="?"){
				x= x+"CCCReq="+this.state.ccc
			}else{
				x= x+"&CCCReq="+this.state.ccc
			}
		}
		if(this.state.room!==null && this.state.room!==""){ 
			if(x.slice(-1)==="?"){
				x= x+"text=%22"+encodeURIComponent(this.state.room)+"%22"
			}else{
				x= x+"&text=%22"+encodeURIComponent(this.state.room)+"%22"
			}
		}
		
		x=x+'&limit=100' 

		console.log(x)
		fetch(x)
		.then(result=>result.json())
		.then(result=>{
          if (result.message.length>0){
		if(this.state.time!==null && this.state.time!==""){
			var temp=[]
		var i
		for(i=0; i<result.message.length-1; i++){
			
			if(result.message[i]['Meeting Time'].includes(this.state.time)){ temp.push(result.message[i]); console.log("TEMP", temp)} 
			}
	    if(temp.length>0){
            this.setState({list:temp})}else{this.setState({list:result.message})}
		}else{this.setState({list:result.message})}
           
	   console.log(this.state.list)}
          else {
		if(this.state.year===null && this.state.semester===null && this.state.department===null && this.state.ccc===null){
		 this.setState({list:[{Course:"Select a Year, Semester, Department, CCC Requirement, Class Time or Room to browse Course Offerings!"}]})
		}else{
            this.setState({list:[{Course:"No available courses."}]})}
          }
        })	
		.catch(err=>console.log("Couldn't fetch", err))

});
}

handleTimeSubmit(event){
	
	var x= 'http://eg.bucknell.edu:48484/q?'
	this.setState({time:event},() =>{ 
	if(this.state.semester!==null && this.state.semester!=="unselected"){ 
			if(x.slice(-1)==="?"){
				x= x+"Semester="+this.state.semester
			}else{
				x= x+"&Semester="+this.state.semester
			}
		}
		if(this.state.year!==null && this.state.year!=="unselected"){ 
			if(x.slice(-1)==="?"){
				x= x+"Year="+this.state.year
			}else{
				x= x+"&Year="+this.state.year
			}
		}
		if(this.state.department!==null && this.state.department!=="unselected"){ 
			if(x.slice(-1)==="?"){
				x= x+"Department="+this.state.department
			}else{
				x= x+"&Department="+this.state.department
			}
		}
		if(this.state.ccc!==null && this.state.ccc!=="unselected"){ 
			if(x.slice(-1)==="?"){
				x= x+"CCCReq="+this.state.ccc
			}else{
				x= x+"&CCCReq="+this.state.ccc
			}
		}
		if(this.state.room!==null && this.state.room!==""){ 
			if(x.slice(-1)==="?"){
				x= x+"text=%22"+encodeURIComponent(this.state.room)+"%22"
			}else{
				x= x+"&text=%22"+encodeURIComponent(this.state.room)+"%22"
			}
		}
		x=x+'&limit=100'  
	console.log(x)
	fetch(x)
		.then(result=>result.json())
		.then(result=>{
          if (result.message.length>0){
		var temp=[]
		var i
		console.log("who",result.message)
		for(i=0; i<result.message.length-1; i++){
			
			if(result.message[i]['Meeting Time'].includes(this.state.time)){ temp.push(result.message[i]); console.log("TEMP", temp)} 
			}
	    if(temp.length>0 ){
            this.setState({list:temp})}else{if(this.state.time===""){this.setState({list:result.message})}else{this.setState({list:[{Course:"No available courses."}]})}}}
          else {
             this.setState({list:[{Course:"Select a Year, Semester, Department, CCC Requirement, Class Time or Room to browse Course Offerings!"}]})
          }
        })	
		.catch(err=>console.log("Couldn't fetch", err))
});
}
handleRoomSubmit(event){
	var x= 'http://eg.bucknell.edu:48484/q?';
	this.setState({room:event},()=>{ 
if(this.state.semester!==null && this.state.semester!=="unselected"){ 
			if(x.slice(-1)==="?"){
				x= x+"Semester="+this.state.semester
			}else{
				x= x+"&Semester="+this.state.semester
			}
		}
		if(this.state.year!==null && this.state.year!=="unselected"){ 
			if(x.slice(-1)==="?"){
				x= x+"Year="+this.state.year
			}else{
				x= x+"&Year="+this.state.year
			}
		}
		if(this.state.department!==null && this.state.department!=="unselected"){ 
			if(x.slice(-1)==="?"){
				x= x+"Department="+this.state.department
			}else{
				x= x+"&Department="+this.state.department
			}
		}
		if(this.state.ccc!==null && this.state.ccc!=="unselected"){ 
			if(x.slice(-1)==="?"){
				x= x+"CCCReq="+this.state.ccc
			}else{
				x= x+"&CCCReq="+this.state.ccc
			}
		}
		if(this.state.room!==null && this.state.room!==""){ 
			if(x.slice(-1)==="?"){
				x= x+"text=%22"+encodeURIComponent(this.state.room)+"%22"
			}else{
				x= x+"&text=%22"+encodeURIComponent(this.state.room)+"%22"
			}
		}
		x=x+'&limit=100' 
		console.log(x)
		fetch(x)
		.then(result=>result.json())
		.then(result=>{
          if (result.message.length>0){
		if(this.state.time!==null && this.state.time!==""){
			var temp=[]
		var i
		for(i=0; i<result.message.length-1; i++){
			
			if(result.message[i]['Meeting Time'].includes(this.state.time)){ temp.push(result.message[i]); console.log("TEMP4", temp)} 
			}
	    if(temp.length>0){
            this.setState({list:temp})}else{this.setState({list:[{Course:"No available courses."}]})}
		}else{this.setState({list:result.message})}
           
	   console.log(this.state.list)}
          else {
		if(this.state.year===null && this.state.semester===null && this.state.department===null && this.state.ccc===null){
		 this.setState({list:[{Course:"Select a Year, Semester, Department, CCC Requirement, Class Time or Room to browse Course Offerings!"}]})
		}else{
            this.setState({list:[{Course:"No available courses."}]})}
          }
        })	
		.catch(err=>console.log("Couldn't fetch", err))});

}

componentDidMount(){

	var x= 'http://eg.bucknell.edu:48484/q?Semester=' + this.state.semester +'&Year=' +this.state.year+ '&Department=' + this.state.department+ '&limit=100' 
	console.log(x)


	fetch(x)
		.then(result=>result.json())
		.then(result=>{
          if (result.message.length>0)
            this.setState({list:result.message})
          else {
             this.setState({list:[{Course:"Select a Year, Semester, Department, CCC Requirement, Class Time or Room to browse Course Offerings!"}]})
          }
        })	
		.catch(err=>console.log("Couldn't fetch", err))
	

}

	render(){
	var options
	console.log("nice",this.state.list.length)
	if(this.state.list.length>1){
	  options = this.state.list.map(b=>{if(b.Room==""){return(<li className="orng fill  col-lg-3 col-sm-12 col-md-6  "><div className="bord"><div className="underl d">{b.Course}</div><div className="d2">{"'"+b.Title+"'"}</div><div>{b["Meeting Time"]}</div></div></li>)}else{ return(<li className="orng fill  col-lg-3 col-sm-12 col-md-6  "><div className="bord"><div className="underl d">{b.Course}</div><div>{"'"+b.Title+"'"}</div><div>{b["Meeting Time"]}</div><div>{"Room: "+b.Room}</div></div></li>)}})
	 
	}else{
	  options = this.state.list.map(b=><li className="orng col-12">{b.Course}</li>)
}
	
	console.log("OP",options)
	return (<Container ><Row><div className="col-12"><img src={"icon.png"} className="icon"></img><img src={"logo.png"} className="logo"></img></div></Row><Row className="head"> <h1 className="list b"> Bucknell Course Catalog</h1></Row><Row className="content"><YearSelect onYearChange={this.handleYearChange} className= "col-sm-12 col-md-12 col-lg-3" /> <SemesterSelect onSemesterChange= {this.handleSemesterChange} className= "col-sm-12 col-md-12 col-lg-3" /> <DepartmentSelect onDepartmentChange={this.handleDepartmentChange} className= "col-sm-12 col-md-12 col-lg-3" />
<CCCSelect onCCCChange={this.handleCCCChange} className= "col-sm-12 col-md-12 col-lg-3" /><TimeSelect onTimeSubmit={ this.handleTimeSubmit} className="col-6 "/> <RoomSelect onRoomSubmit={this.handleRoomSubmit} className="col-6 in"/> </Row><Row className="head av"><h1 className="list b" >Available Courses</h1></Row><Row className="content"><ul className="col-12 list-unstyled l" ><Row>{options}</Row></ul>
		 </Row> </Container>


)

}
}




export default CourseDisplay
