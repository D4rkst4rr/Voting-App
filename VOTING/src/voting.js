import React,{Component} from 'react';
import './App.css';
import fire from './fire';


const logoutHandler =()=> {
    fire.auth().signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  };

class Vote extends Component{
	constructor(props){
		super(props);
		this.state = {
			languages : [
				{name: "President: Jessa Mae E. Dabon", votes: 0},
				{name: "President: Andres Edman G. Olario", votes: 0},
				{name: "Vice President: Harlie Quin Marc C. Quipit", votes: 0},
				{name: "Vice President: Lord Emmanuel C. Figueras", votes: 0},
				{name: "Secretary: Edyr Ryle G. Ilisan", votes: 0},
				{name: "Secretary: Kissy Cyrine A. Garciano", votes: 0},
				{name: "InfoMedia: Cathylyn Shaine P. Olandre", votes: 0},
				{name: "InfoMedia: Lucy Mae Tan", votes: 0},
				{name: "Public Relations and Communications: Chris Heart E. Blanco", votes: 0},
				{name: "Public Relations and Communications: Wena Mae V. Mabasa", votes: 0},
				{name: "Public Relations and Communications: Ruel Dean Buray", votes: 0},
				{name: "Budget and Finance: Abby Kate V. Dela Peña", votes: 0},
				{name: "Budget and Finance: Ruffa Mae L. Arañez", votes: 0},
				{name: "Material Preparation and Services: John Piolo H. Mutia", votes: 0},
				{name: "Material Preparation and Services: Keith M. Ostia", votes: 0},
				{name: "Logistics: Mark Chezter M. Barcelo", votes: 0},
				{name: "Logistics: Aliza Nicole M. Gumapac", votes: 0}
				
				
			]
		}
	}

	vote (i) {
		let newLanguages = [...this.state.languages];
		newLanguages[i].votes++;
		function swap(array, i, j) {
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		this.setState({languages: newLanguages});
	}
	unvote (i) {
		let newLanguages = [...this.state.languages];
		newLanguages[i].votes--;
		function swap(array, i, j) {
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		this.setState({languages: newLanguages});
	}

	render(){
		return(
			
			<>
				
				<button className="logout" onClick={logoutHandler}>Logout</button>
				<h1 className="qoute">Always remember Vote Wisely</h1>
				<div className="languages">
					{
						this.state.languages.map((lang, i) => 
							<div key={i} className="language">
								<div className="languageName">
									{lang.name}
								</div>
								<div>:</div>
								<div className="voteCount">
									{lang.votes}
								</div>
								
								<button onClick={this.vote.bind(this, i)}>Vote</button>
								<button onClick={this.unvote.bind(this, i)}>Unvote</button>
								
							</div>
						)
					}
				</div>
			</>
		);
	}
}
export default Vote;