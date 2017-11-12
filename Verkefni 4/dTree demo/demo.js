(function() {

	function main(argument) {
		let options = {
			target: '#graph',
			debug: false,
			width: 600,
			height: 600,
			callbacks: {
			  /*
			    Callbacks should only be overwritten on a need to basis.
			    See the section about callbacks below.
			  */
			},
			margin: {
			  top: 0,
			  right: 0,
			  bottom: 0,
			  left: 0
			},
			nodeWidth: 100,
			styles: {
			  node: 'node',
			  linage: 'linage',
			  marriage: 'marriage',
			  text: 'nodeText'
			}
		};

		let treeJson = d3.json("data.json", function(error, treeData) {
			dTree.init(treeData, options);
			console.log(treeData);
			console.log(error);
		});
	}

	window.addEventListener("load", main, true);
})();