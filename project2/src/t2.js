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
    // event.target is the html element that caused this event
    // we set the dog breed in the attribute value of the select element
    // we could get the innerHTML of the select element with
    // event.target.selectedOptions[0].innerHTML
    console.log("Selction: ", event.target.value)
    //console.dir(event.target)
    // set this selection into the state, which triggers render()
    this.setState({selectedDepartment:event.target.value})
    // now also trigger the state update in the parent
    this.props.onDepartmentChange(event.target.value)
  }
	render(){
	return (<div class= "col-sm-12 col-md-12 col-lg-4 orng mb-10"> <h4>Select Department:</h4><select onChange={this.handleSelection}> <option value="unselected">Select a Department</option>
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
    // event.target is the html element that caused this event
    // we set the dog breed in the attribute value of the select element
    // we could get the innerHTML of the select element with
    // event.target.selectedOptions[0].innerHTML
    console.log("Selction: ", event.target.value)
    //console.dir(event.target)
    // set this selection into the state, which triggers render()
    this.setState({selectedYear:event.target.value})
    // now also trigger the state update in the parent
    this.props.onYearChange(event.target.value)
  }
	render(){
	return (<div class= "col-sm-12 col-md-12 col-lg-4 orng"> <h4>Select Year:</h4> <select onChange= {this.handleSelection}> <option value="unselected">Select a Year</option>
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
    // event.target is the html element that caused this event
    // we set the dog breed in the attribute value of the select element
    // we could get the innerHTML of the select element with
    // event.target.selectedOptions[0].innerHTML
    console.log("Selction: ", event.target.value)
    //console.dir(event.target)
    // set this selection into the state, which triggers render()
    this.setState({selectedSemester:event.target.value})
    // now also trigger the state update in the parent
    this.props.onSemesterChange(event.target.value)
  }
	render(){
	return (<div class= "col-sm-12 col-md-12 col-lg-4 orng"> <h4>Select Semester:</h4><select onChange= {this.handleSelection}> <option value="unselected">Select a Semester</option>
			<option value="Fall"> Fall </option> 
			<option value="Spring"> Spring</option>
			
		    </select>
		 </div>)

}


}

class CourseDisplay extends Component{
constructor(props){
    super(props)
    this.state={year:null, semester:null, department:null, list:[]}

    
    this.handleDepartmentChange = this.handleDepartmentChange.bind(this)
    this.handleYearChange= this.handleYearChange.bind(this)
    this.handleSemesterChange= this.handleSemesterChange.bind(this)
    
  }
	handleDepartmentChange(event){
	this.setState({department:event},() => {
                var x= 'http://eg.bucknell.edu:48484/q?Semester=' + this.state.semester +'&Year=' +this.state.year+ '&Department=' + this.state.department+ '&limit=100' 
	console.log(x)


	fetch(x)
		.then(result=>result.json())
		.then(result=>{
          if (result.message.length>0){
            this.setState({list:result.message})
	   console.log(this.state.list)}
          else {
           if(this.state.year===null || this.state.semester===null || this.state.department===null){
		 this.setState({list:[{Course:"Select a Year, Semester and Department to browse Course Offerings!"}]})
		}else{
            this.setState({list:[{Course:"No available courses."}]})}
          }
        })	
		.catch(err=>console.log("Couldn't fetch ", err))
        }
    );

}
	handleYearChange(event){
this.setState({year:event},() => {
                var x= 'http://eg.bucknell.edu:48484/q?Semester=' + this.state.semester +'&Year=' +this.state.year+ '&Department=' + this.state.department+ '&limit=100' 
	console.log(x)


	fetch(x)
		.then(result=>result.json())
		.then(result=>{
          if (result.message.length>0){
            this.setState({list:result.message})
	   console.log(this.state.list)}
          else {
           if(this.state.year===null || this.state.semester===null || this.state.department===null){
		 this.setState({list:[{Course:"Select a Year, Semester and Department to browse Course Offerings!"}]})
		}else{
            this.setState({list:[{Course:"No available courses."}]})}
          }
        })	
		.catch(err=>console.log("Couldn't fetch dog breeds", err))
        }
    );

}
	



	handleSemesterChange(event){
	this.setState({semester:event},() => {
                var x= 'http://eg.bucknell.edu:48484/q?Semester=' + this.state.semester +'&Year=' +this.state.year+ '&Department=' + this.state.department+ '&limit=100' 
	console.log(x)


	fetch(x)
		.then(result=>result.json())
		.then(result=>{
          if (result.message.length>0){
            this.setState({list:result.message})
	   console.log(this.state.list)}
          else {
		if(this.state.year===null || this.state.semester===null || this.state.department===null){
		 this.setState({list:[{Course:"Select a Year, Semester and Department to browse Course Offerings!"}]})
		}else{
            this.setState({list:[{Course:"No available courses."}]})}
          }
        })	
		.catch(err=>console.log("Couldn't fetch", err))
        }
    );


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
             this.setState({list:[{Course:"Select a Year, Semester and Department to browse Course Offerings!"}]})
          }
        })	
		.catch(err=>console.log("Couldn't fetch", err))
	

}

	render(){
	var options
	console.log("nice",this.state.list.length)
	if(this.state.list.length>1){
	  options = this.state.list.map(b=><li className="orng fill  col-lg-3 col-sm-12 col-md-6  "><div className="bord"><div className="underl">{b.Course}</div><div>{"'"+b.Title+"'"}</div></div></li>)
	}else{
	  options = this.state.list.map(b=><li className="orng col-12">{b.Course}</li>)
}
	
	console.log("OP",options)
	return (<Container ><Row><div className="col-12"><img src={"icon.png"} className="icon"></img><img src={"logo.png"} className="logo"></img></div></Row><Row className="head"> <h1 className="list b"> Bucknell Course Catalog</h1></Row><Row className="content"><YearSelect onYearChange={this.handleYearChange} className= "col-sm-12 col-md-12 col-lg-4" /> <SemesterSelect onSemesterChange= {this.handleSemesterChange} className= "col-sm-12 col-md-12 col-lg-4" /> <DepartmentSelect onDepartmentChange={this.handleDepartmentChange} className= "col-sm-12 col-md-12 col-lg-4" /> </Row><Row className="head av"><h1 className="list b" >Available Courses</h1></Row><Row className="content"><ul className="col-12 list-unstyled l" ><Row>{options}</Row></ul>
		 </Row> </Container>


)

}
}




export default CourseDisplay
