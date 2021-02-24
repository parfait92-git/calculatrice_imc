const baseURL = "https://calculatrice-iimc.vercel.app/formulaire";

export const postData = async (url, payload, token) => {
    const res = await fetch(`${baseURL}/api/${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(payload)
    }).catch(err => {
        console.error('erreur coté serveur:',err)
    });
    const data = await res.json();
    console.log('mes donneees',data.imc);
    return data;
}
