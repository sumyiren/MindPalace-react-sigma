// @flow

import React from 'react'
import '../sigma/parsers.json.js'
import '../sigma/neo4j.cypher2'
import NeoGraphItemsProducers from './NeoGraphItemsProducers'
import { embedProps } from './tools'

type State = {
	loaded: boolean
};
interface ProducersInterface {
	node(node: Neo4j$Node): Sigma$Node,
	edge(node: Neo4j$Edge): Sigma$Edge,
};
type Props = {
	url: string,
	user: string,
	password: string,
	// query: string,
	book: string,
	removeOldGraph: Boolean,
	producers?: ProducersInterface,
	onGraphLoaded?: () => void,
	children?: mixed,
	sigma?: sigma
};
type DefaultProps = {
	producers: ProducersInterface,
	removeOldGraph: true
};


/**

NeoCypher component, interface for neo4j.cypher sigma plugin. Can be used within Sigma component.
Can be composed with other plugins: on load it mounts all child components (e.g. other sigma plugins).
Child's componentWillMount should be used to enable plugins on loaded graph.

 @param {string} url    Neo4j instance REST API URL
 @param {string} user    Neo4j instance REST API user
 @param {string} password    Neo4j instance REST API password
//  @param {string} query    Neo4j cypher query
 @param {string} book    Book to be queried from neo4j
 @param {NeoGraphItemsProducers} producers   Optional transformer for creating Sigma nodes and edges,
									instance compatible with NeoGraphItemsProducers
 @param {Function} onGraphLoaded        Optional callback for graph update
 @param {boolean} removeOldGraph        Optional check if old graph should be removed, defaulted to true


[see sigma plugin page for more details](https://github.com/jacomyal/sigma.js/tree/master/plugins/sigma.neo4j.cypher)

**/


class NeoCypher extends React.Component<Props, State> {
	constructor(props: Props) {
		if(!props.producers) {
			props.producers = new NeoGraphItemsProducers();
		}
		super(props);
		this.state = {loaded:false};
	}

	componentDidMount() {
		this._runQuery(this.props.book)
	}

	componentWillUpdate(props: Props) {
		// suppose url, user or password won't change for sigma instance, as well as sigma instance itself
		if(this.props.book !== props.book) {
			this.setState({loaded:false})
			this._runQuery(props.book)
		}
	}

	render() {
		if(!this.state.loaded)
			return null
		return <div>{ embedProps(this.props.children, {sigma: this.props.sigma}) }</div>
	}

	onLoad = () => {
		this.setState({loaded:true})
		if(this.props.sigma)
			this.props.sigma.refresh()
		if(this.props.onGraphLoaded)
			return this.props.onGraphLoaded()
	}

	_runQuery(book: string) {
		// TODO: add exception handling capability to Sigma Neo4j plugin
		if (this.props.removeOldGraph) {
			sigma.neo4j.cypher(
					{ url: this.props.url, user: this.props.user, password: this.props.password } ,
					query ,
					this.props.sigma ,
					this.onLoad,
					this.props.producers
			)
		} else {
			sigma.neo4j.cypher2(
				{ url: this.props.url, user: this.props.user, password: this.props.password } ,
				book ,
				this.props.sigma ,
				this.onLoad,
				this.props.producers
			)
		}
	}
}

export default NeoCypher;
