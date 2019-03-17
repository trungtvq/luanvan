import axios from 'axios';

export class NodeService {

    getFiles(_this) {
        return axios.get('api/assets/demo/data/files.json')
            .then(res => res.data.data)
            .then(data => {
                _this.setState({ files: data });
                return data;
            });
    }

    getFilesystem(_this) {
        return axios.get('api/assets/demo/data/filesystem.json')
            .then(res => res.data.data)
            .then(data => {
                _this.setState({ files: data });
                return data;
            });

    }

    getTreeNodes() {
        return axios.get('api/assets/demo/data/treenodes.json')
            .then(res => res.data.root);
    }

	getTreeTableNodes() {
		return axios.get('api/assets/demo/data/treetablenodes.json')
			.then(res => res.data.root);
	}
}