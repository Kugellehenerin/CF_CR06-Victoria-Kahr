var all = [];

class Place {
    city: string;
    name: string;
    zip: number;
    address: string;
    img: string;
    : Date;

    constructor(city: string, name: string, zip: number, address: string, img: string,: Date) {
        this.city = city;
        this.name = name;
        this.zip = zip;
        this.address = address;
        this.img = img;
        all.push(this);
    }
    render() {
        return `
    <div class="card col-md-6 col-lg-6 col-xl-6 bg-light border-dark">
        <img class="card-img-top p-2" src="${this.img}">
        <div class="card-body">
        <div class="border p-2 text-left bg-secondary border-dark">
            <h5 class="card-title"> ${this.name}</h5>
            <p class="card-text"> ${this.city}</p>
            <p class="card-text"> ${this.address}, ${this.zip}</p>
            </div>
        `
    }
}

class Restaurant extends Place {
    type: string;
    telephone: string;
    web: string;
    constructor(city: string, name: string, zip: number, address: string, img: string,: Date, type: string, telephone: string, web: string) {
        super(city, name, zip, address, img,);
        this.type = type;
        this.telephone = telephone;
        this.web = web;
    }
    render() {
        return `
    <div class="card col-md-6 col-lg-6 col-xl-6 border bg-light border-dark">
        <img class="card-img-top p-2" src="${this.img}">
        <div class="card-body">
        <div class="border p-2 text-left bg-secondary border-dark">
            <h5 class="card-title"> ${this.name}</h5>
            <p class="card-text"> ${this.type}</p>
            <p class="card-text"> ${this.city}</p>
            <p class="card-text"> ${this.address}, ${this.zip}</p>
            </div>
            <br>
            <div class="border p-2 text-left bg-warning border-dark">
                <p>Telephone: ${this.telephone}</p>
                <p>Website: <a href="${this.web}">${this.web}</a></p>
              </div>
        `
    }
}

class Events extends Place {
    date: string;
    time: string;
    price: number;
    web: string;
  
    constructor(city: string, name: string, zip: number, address: string, img: string,: Date, date: string, time: string, price: number, web: string) {
        super(city, name, zip, address, img,);
        this.date = date;
        this.time = time;
        this.price = price;
        this.web = web;
    }
    render() {
        return `
    <div class="card col-md-6 col-lg-6 col-xl-6 border bg-light border-dark">
        <img class="card-img-top p-2" src="${this.img}">
        <div class="card-body">
        <div class="border p-2 text-left bg-secondary border-dark">
            <h5 class="card-title"> ${this.name}</h5>
            <p class="card-text">When? ${this.date}, ${this.time}</p>
            <p class="card-text"> ${this.city}</p>
            <p class="card-text"> ${this.city}, ${this.zip}</p>
            </div>
            <br>
            <div class="border p-2 text-left bg-warning border-dark">
                <p>Price: Eur ${this.price}</p>
                <p>Website: <a href="${this.web}">${this.web}</a></p>
            </div>
        `
    }
}

new Place('Vienna', 'St. Charles Church', 1010, 'Karlsplatz 1', 'img/Karlsplace.jpg', new Date(2019, 3, 24, 12, 45));
new Place('Vienna', 'Zoo Vienna', 1130, 'Maxingstraße 13b', 'img/Zoo.jpg', new Date(2010, 5, 20, 11, 5),);
new Restaurant('Vienna', 'Lemon Leaf Thai Restaurant', 1050, 'Kettenbrückengasse 19', 'img/Thai.png', new Date(2000, 8, 10, 15, 32), 'Thai', '+43(1)5812308', 'www.lemonleaf.at');
new Restaurant('Vienna', 'Sixta-Restaurant', 1050, 'Schönbrunner Straße 21', 'img/Sixta.png', new Date(2010, 4, 15, 0, 45), 'WhoKnows', '+4315852856l, +4315852856', 'http://www.sixta-restaurant.at/');
new Events('Vienna', 'Kris Kristofferson', 1150, '', 'img/Kris.jpg', new Date(2018, 11, 3, 17, 00), "October 15, 2021", "17:00", 58.50, 'http://kriskristofferson.com/');
new Events('Vienna', 'Lenny Kravitz', 1150, '', 'img/Lenny.jpg', new Date(2015, 8, 15, 10, 8), "December 9, 2029", "19:30", 48.80, 'www.lennykravitz.com/');

for (let x in all)

{$("#locations").append(all[x].render());}