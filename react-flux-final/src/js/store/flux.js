const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUrl: "https://3000-ae181a3c-8a6a-4525-b8c5-d32b2883f34f.ws-us0.gitpod.io/",
			token: {
				refresh: "",
				access: ""
			},
			avisos: [],
			grupos: [],
			eventos: [],
			miembros: [],
			miembro: {},
			username: "",
			password: "",
			password2: "",
			error: {}
		},
		actions: {
			handleChange: e => {
				const { name, value } = e.target;
				setStore({
					[name]: value
				});
			},
			handleLogin: e => {
				e.preventDefault();
				const store = getStore();
				getActions().login(store.username, store.password);
			},
			handleRegister: e => {
				e.preventDefault();
			},
			login: (username, password) => {
				const store = getStore();
				const data = {
					username: username,
					password: password
				};
				fetch(store.apiUrl + "/api/token", {
					method: "GET",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => setStore({ data }));
			},
			register: (username, password) => {
				console.log(username);
				console.log(password);
			},
			getAvisos: () => {
				const store = getStore();
				fetch(store.apiUrl + "/api/avisos", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token.access
					}
				})
					.then(resp => resp.json())
					.then(data => setStore({ avisos: data }))
					.catch(error => setStore({ error }));
			},
			getEvento: () => {
				const store = getStore();
				fetch(store.apiUrl + "/api/evento", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token.access
					}
				})
					.then(resp => resp.json())
					.then(data => setStore({ evento: data }))
					.catch(error => setStore({ error }));
			},
			getMiembros: () => {
				const store = getStore();
				fetch(store.apiUrl + "/api/miembros", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token.access
					}
				})
					.then(resp => resp.json())
					.then(data => setStore({ miembros: data }));
			},
			getMiembro: () => {
				const store = getStore();
				fetch(store.apiUrl + "/api/miembro", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token.access
					}
				})
					.then(resp => resp.json())
					.then(data => setStore({ miembro: data }));
			},
			getGrupos: () => {
				const store = getStore();
				fetch(store.apiUrl + "/api/grupos", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token.access
					}
				})
					.then(resp => resp.json())
					.then(data => setStore({ grupos: data }));
			},
			SaveAviso: data => {
				const store = getStore();
				if (data != "") {
				} else {
					alert("INGRESA DATOS");
				}
				console.log(data);

				fetch(store.apiUrl + "/api/anuncio", {
					method: "Post",
					body: JSON.stringify(data),
					headers: {
						Authorization: "Bearer " + getStore().token.access,
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						getActions().GetAviso();
					});

				//reset the global store
				//setStore({ demo: demo });
			},
			SaveEvento: data => {
				const store = getStore();
				if (data != "") {
				} else {
					alert("INGRESA DATOS");
				}
				console.log(data);
				let url = store.apiUrl + "/api/anuncio";

				fetch(url, {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						Authorization: "Bearer " + getStore().token.access,
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						getActions().GetEvento();
					});

				//reset the global store
				//setStore({ demo: demo });
			}
		}
	};
};

export default getState;
