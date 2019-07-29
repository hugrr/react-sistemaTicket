const getState = ({ getStore, setStore }) => {
	return {
		store: {
			demo: [
				{
					description: ""
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			SaveText: peo => {
				if (peo != "") {
				} else {
					alert("INGRESA DATOS");
				}
				console.log(peo);

				fetch("https://3000-ae01abd0-a04f-4f7c-8d59-7f62e413e6fb.ws-us0.gitpod.io/api/anuncio/", {
					method: "Post",
					body: JSON.stringify({
						id: 2,
						anuncioName: "hola",
						descripton: peo,
						media: "fotoo01",
						date_anuncio: "2019-07-07",
						anuncio_nameID: 1,
						ubication: "hola hola"
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(resp => {});

				//reset the global store
				//setStore({ demo: demo });
			}
		}
	};
};

export default getState;
