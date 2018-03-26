import React, { Component } from 'react';

class DogBreedsSelect extends Component{
  constructor(props){
    super(props)
    // MUST initalize state manually!
    // ADDed selectedBreed
    this.state = {breeds: [], selectedBreed:null}
    // bind additional member functions explicitly to this object!
    this.handleSelection = this.handleSelection.bind(this)
  }
  componentDidMount(){
    // begin fetching dog breeds
    // do not assign to state, use setState so react knows tehre
    // was a state change and needs to re-render the view.
    fetch('http://eg.bucknell.edu:48484/q?Semester=Fall&Year=2018&Department=CSCI')
      .then(result=>result.json())
      .then(result=>{console.log(result.message);
		this.setState(
		{breeds: result.message}
		);
		console.log(this.state.breeds)})
      .catch(err=>console.log("Couldn't fetch dog breeds", err))
  }
  // added to handle the selection box change event
  // note react passes an event proxy object to the browser's
  // event object
  handleSelection(event){
    // event.target is the html element that caused this event
    // we set the dog breed in the attribute value of the select element
    // we could get the innerHTML of the select element with
    // event.target.selectedOptions[0].innerHTML
    console.log("Selction: ", event.target.value)
    //console.dir(event.target)
    // set this selection into the state, which triggers render()
    this.setState({selectedBreed:event.target.value})
    // now also trigger the state update in the parent
    this.props.onBreedChange(event.target.value)
  }
  render(){
    var options
    if (this.state.breeds.length === 0){
      console.log("wat")
      options = <option value="loading">loading...</option>
	}
    else {
console.log(this.state.breeds.map(b=> b.Title));
      options = ['--select breed--'].concat(this.state.breeds)
        .map(b=>
            <option value={b.CRN}>{b.Course}</option>
          );
	
    }
    return (
      <div>
        <select onChange={this.handleSelection}>{options}</select>
        { // if breed is selected, show it, else show a friendly message
          (this.state.selectedBreed === null ||
           this.state.selectedBreed === "--select breed--") ?
            <p>Select something!</p> :
            <p>Selected breed is <em>{this.state.selectedBreed}</em></p>
        }
      </div>
    )
  }
}
class DogBreedDisplay extends Component {
  constructor(props){
    super(props)
    // load a default placeholder when there is no do breed selected
    this.placeholderurl = 'http://via.placeholder.com/350x350'
    this.state = {imgurl: this.placeholderurl}
  }
  componentWillReceiveProps(newProps){
    if (newProps.breed !== this.props.breed){
      console.log("new breed recieved", newProps.breed)
      //update the image.
      fetch('https://dog.ceo/api/breed/' + newProps.breed + '/images/random')
        .then(resp => resp.json())
        .then(jresp => {
          if (jresp.status === "success")
            this.setState({imgurl:jresp.message})
          else {
            this.setState({imgurl:this.placeholderurl})
          }
        })
        .catch(err => console.log("ERR:", err))
    }
  }
  render(){
    return <img src={this.state.imgurl}/>
  }
}
class DogBreedImgSelect extends Component{
  constructor(props){
    super(props)
    // bind this to our event handler!
    this.state = {breed:null}
    this.handleBreedChange = this.handleBreedChange.bind(this)
  }
  handleBreedChange(event){
    console.log("breed changed!", event)
    // this will trigger a render and pass the new breed into the props
    // of DogBreedDisplay
    this.setState({breed:event})
  }
  render(){
    return (
      <div>
        {
          // note-- onBreedChange is a prop to DogBreedsSelect!
          // also this is how you comment in JSX
        }
        <DogBreedsSelect onBreedChange={this.handleBreedChange}/>
        <DogBreedDisplay breed={this.state.breed}/>
      </div>
    )
  }
}

export default DogBreedImgSelect
