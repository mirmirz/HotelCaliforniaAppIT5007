import React, { Component } from 'react';
import { 
  TouchableHighlight,
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert 
} from 'react-native';
import { graphql } from 'react-apollo';
import gql from "graphql-tag";

export default class RNApp extends Component {
	constructor() {
		super();
		this.state = { custName: "", 
					   custNo:"" };
		this.updateName = this.updateName.bind(this);
		this.updateNumber = this.updateNumber.bind(this);
		this.handleAddCust = this.handleAddCust.bind(this);
		this.handleQuery = this.handleQuery.bind(this);
    }
	
	updateName(Name) {
       this.setState({ custName: Name })
	}
	
	updateNumber(Numbe) {
       this.setState({ custNo: Numbe })		
	}
	
	handleQuery(cust){
		const query = gql`mutation customerAdd($cust: CustomerInputs!) { 
			customerAdd(customer: $cust) {
				id
			  }
			}`;
			
		graphql(query, {
		  options: { variables: { cust } }
		})
	}
	
	handleAddCust(){
		const cust = {name: this.state.custName, number: this.state.custNo};
		this.handleQuery(cust);
		this.setState({ custName: "",custNo:""  });
		Alert.alert('Customer added');
		this.setState({custName: ''});
		this.setState({custNo: ''});
    };
	
	render() {
		const query = gql`mutation customerAdd($cust: CustomerInputs!) { 
			customerAdd(customer: $cust) {
				id
			  }
			}`;
		
		return (
			<View>
				<Text>Hotel California App</Text>
				<Text>Name</Text>
				<TextInput placeholder="Enter Name" required onChangeText={this.updateName}/>
				<Text>Phone No</Text>
				<TextInput placeholder="e.g. 94123674" required onChangeText={this.updateNumber}/>
				<Button title="Add Customer" onPress={this.handleAddCust}/>
			</View>
		);
	}
}
