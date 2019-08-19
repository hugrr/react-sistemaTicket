const getState = ({ getStore, setStore }) => {
	return {
		store: {
			token: {
				refresh: "",
				access: ""
			},
			login: false,
			grupo: [],
			miembro: []
		},
		actions: {
			SaveText: data => {
				if (data != "") {
				} else {
					alert("INGRESA DATOS");
				}
				console.log(data);

				fetch(
					"https://3000-d1e49d54-45d0-450d-ac1b-f04c3c707f9d.ws-us0.gitpod.io/http://127.0.0.1:8000/api/anuncio/",
					{
						method: "Post",
						body: JSON.stringify(data),
						headers: {
							"Content-Type": "application/json"
						}
					}
				)
					.then(resp => resp.json())
					.then(resp => {});

				//reset the global store
				//setStore({ demo: demo });
			},

			saveUser: data => {
				if (data != "") {
				} else {
					alert("INGRESA DATOS");
				}
				console.log(data);

				fetch("https://3000-d1e49d54-45d0-450d-ac1b-f04c3c707f9d.ws-us0.gitpod.io/api/miembro/", {
					method: "Post",
					body: JSON.stringify(data),
					headers: {
						Authorization: "Bearer " + getStore().token.access,
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(resp => {});

				//reset the global store
				//setStore({ demo: demo });
			},
			SendToken: (data, route) => {
				if (data != "") {
				} else {
					alert("debes ingresar datos");
				}
				const store = getStore();
				fetch("https://3000-d1e49d54-45d0-450d-ac1b-f04c3c707f9d.ws-us0.gitpod.io/api/token/", {
					method: "Post",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => {
						setStore({ token: data, login: true });
						localStorage.setItem("token", data.access);
						console.log(data);
						route.push("/usuarios");
					});
			},
			setToken: newToken => {
				setStore({ token: { access: newToken, refresh: "" }, login: true });
			},
			SaveTextEvento: data => {
				if (data != "") {
				} else {
					alert("INGRESA DATOS");
				}
				console.log(data);
				fetch("https://3000-d1e49d54-45d0-450d-ac1b-f04c3c707f9d.ws-us0.gitpod.io/api/evento/", {
					method: "Post",
					body: JSON.stringify(data),
					headers: {
						Authorization: "Bearer " + getStore().token.access,

						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(resp => {});

				//reset the global store
				//setStore({ demo: demo });
			},
			saveGrupo: data => {
				if (data != "") {
				} else {
					alert("INGRESA DATOS");
				}
				console.log(data);

				fetch("https://3000-d1e49d54-45d0-450d-ac1b-f04c3c707f9d.ws-us0.gitpod.io/api/grupo/", {
					method: "Post",
					body: JSON.stringify(data),
					headers: {
						Authorization: "Bearer " + getStore().token.access,
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(resp => {});

				//reset the global store
				//setStore({ demo: demo });
			},
			GetGroup: data => {
				fetch("https://3000-d1e49d54-45d0-450d-ac1b-f04c3c707f9d.ws-us0.gitpod.io/api/grupo/", {
					method: "Get",
					headers: {
						Authorization: "Bearer " + getStore().token.access
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						if (resp && typeof resp === "object" && resp.constructor === Array) {
							setStore({ grupo: resp });
							console.log(resp);
						}
					});
			},
			GetUser: data => {
				fetch("https://3000-d1e49d54-45d0-450d-ac1b-f04c3c707f9d.ws-us0.gitpod.io/api/miembro/", {
					method: "Get",
					headers: {
						Authorization: "Bearer " + getStore().token.access
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						if (resp && typeof resp === "object" && resp.constructor === Array) {
							setStore({ miembro: resp });
						}
					});
			}
		}
	};
};

export default getState;
