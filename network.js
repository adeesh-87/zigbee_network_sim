class ZNet {
	constructor(D, C, R) {
		this.depth = D;
		this.max_children = C;
		this.max_routers = R;
	}

	network_size() {
		var size = 1;
		var i;
		for (i = 1; i <= this.depth; i++) {
			size += this.max_children * (Math.pow(this.max_routers, (i-1)));
		} 
		return size;
	}
}

module.exports = ZNet;