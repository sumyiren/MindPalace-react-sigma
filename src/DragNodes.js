// @flow

import React from 'react'
import '../sigma/sigma.plugins.dragNodes'

type Props = {
	initialSize: number,
	sigma?: sigma
};

/**

RelativeSize component, interface for RelativeSize sigma plugin.
It supposes that sigma graph is already in place, therefore component should not be
mounted until graph is available. It can be used within Sigma component if graph is
preloaded, or within loader component, like NeoCypher.

Sets nodes sizes corresponding its degree.

 @param {number} initialSize  start size for every node, will be multiplied by Math.sqrt(node.degree)

**/

class DragNodes extends React.Component<Props> {
	constructor(props: Props) {
		super(props)
		sigma.plugins.dragNodes(this.props.sigma, this.props.sigma.renderers[0])
	}

	render = () => null
}

export default DragNodes;
