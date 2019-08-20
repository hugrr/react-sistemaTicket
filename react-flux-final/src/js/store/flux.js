const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUrl: "",
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
			}
		}
	};
};

export default getState;
