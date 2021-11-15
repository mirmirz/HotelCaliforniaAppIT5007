import React, { Component } from 'react';
import { 
  ActivityIndicator,
  TextInput, 
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { ApolloProvider, Query} from "react-apollo";
import RNApp from "./RNApp"
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({ uri: 'http://192.168.86.32:3000/graphql' });

export default class App extends Component {
	
	render() {
		return (
			<ApolloProvider client={client}>
			<RNApp />
			</ApolloProvider>
		);
	}
}
