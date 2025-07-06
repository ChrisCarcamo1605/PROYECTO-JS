let articles = [
    {
        title: "Messi the most best player ever at the history",
        date: "12/06/2004",
        description: "messsi messi messi mesii messi messi messsi messi messi mesii messi messi messsi messi messi mesii messi messi"
    },
    {
        title: "Pelé: The King of Football",
        date: "23/10/1940",
        description: "Pelé is widely regarded as one of the greatest footballers of all time, winning three World Cups with Brazil and scoring over 1,000 career goals."
    },
    {
        title: "Diego Maradona: The Golden Boy",
        date: "30/10/1960",
        description: "Maradona's skill, vision, and legendary 'Hand of God' goal made him a football icon, especially for his performances with Argentina and Napoli."
    },
    {
        title: "Cristiano Ronaldo: The Goal Machine",
        date: "05/02/1985",
        description: "Cristiano Ronaldo is known for his incredible athleticism, goal-scoring records, and success with clubs like Manchester United, Real Madrid, and Juventus."
    },
    {
        title: "Johan Cruyff: The Total Footballer",
        date: "25/04/1947",
        description: "Cruyff revolutionized football with his intelligence and technique, leading Ajax and Barcelona to glory and inspiring generations."
    },
    {
        title: "Zinedine Zidane: The Maestro",
        date: "23/06/1972",
        description: "Zidane's elegance, vision, and leadership helped France win the 1998 World Cup and Real Madrid achieve European success."
    },
    {
        title: "Ronaldinho: The Magician",
        date: "21/03/1980",
        description: "Ronaldinho dazzled fans with his creativity, dribbling, and joyful style, winning the Ballon d'Or and the World Cup with Brazil."
    }
];

let main = document.querySelector(".layout__articles")
articles.forEach(x => {
    let article = document.createElement("article")

    article.innerHTML = `<article class="articles__article">
        <h3 class= "article__title" >${x.title}</h3 >
                <span class="article__date">${x.date}</span>

                <p class="article__body">${x.description}</p>

                <button class="article__btn">Leer mas</button>
            </article > `

    main.appendChild(article)
})