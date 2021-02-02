const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // inserir dados da tabela 
    await saveOrphanage(db, {
        lat: "-20.0380946", 
        lng: "-44.1747536",
        name: "Lar das meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "31975423329",
        images: [
            "http://127.0.0.1:5500/images/teste1.jpg",

            "http://127.0.0.1:5500/images/teste3.jpg"
        ].toString(),
        instructions: "Venha se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horários de visitas das 9h até 19h",
        open_on_weekends: "1"

    })

    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
    // consultar somente um orfanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    // deletar das da tabela

    //await db.run("DELETE FROM orphanages")
})