const getState = ({ getStore, setStore }) => {
	return {
		store: {
			aviso: {}
		},
		actions: {
			SaveText: data => {
				if (data != "") {
				} else {
					alert("INGRESA DATOS");
				}
				console.log(data);

				fetch("https://3000-d3fb5b3d-a077-40c3-8690-5eb8d6548d50.ws-us0.gitpod.io/api/anuncio/", {
					method: "Post",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(resp => {});

				//reset the global store
				//setStore({ demo: demo });
			},
			SaveText: data => {
				fetch("https://3000-d3fb5b3d-a077-40c3-8690-5eb8d6548d50.ws-us0.gitpod.io/api/anuncio/")
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						this.setStore({ aviso: data });
					});
			},
			SaveTextEvento: data => {
				if (data != "") {
				} else {
					alert("INGRESA DATOS");
				}
				console.log(data);

				//reset the global store
				//setStore({ demo: demo });
			}
		}
	};
};

export default getState;
