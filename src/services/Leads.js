const submitToUrl = "https://sfapp-api.dreamstate-4-all.org/form_lead/create/"

export default {
    async save({name, phone, email, description}) {
        try {
            const response = await fetch(submitToUrl, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    phone,
                    email,
                    blub: description,
                }),
            });
            return await response.json();
        } catch (err) {

            return {error: true, message: err.message};
        }
    }
}