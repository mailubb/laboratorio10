
const movieContainer = document.getElementById("moviecontenedor")
const movieContainer2 = document.getElementById("moviecontenedor2")

const bannertitulo = document.getElementById("bannerTitulo")
const bannerrating = document.getElementById("rating")
const bannerdescripcion = document.getElementById("bannerdescription")
const banneredad = document.getElementById("edad")
const bannerfondo = document.getElementById("bannerFondo")



function Movieseleccionada(id) {
    var movie = listaMovies[id]
    movie.toBanner()
}


class Movie {
    constructor(name, image, description, rating, edad, imageBanner, stars) {
        this.name = name
        this.image = image
        this.description = description
        this.rating = rating
        this.edad = edad
        this.imageBanner = imageBanner
        this.stars = stars
    }

    toHtml(id) {
        return`
            <div class="mostrar2" id="${id}" onclick="Movieseleccionada(${id})">
                <img src="${this.image}" alt="" class="pic"  width="200px">
                <p class="texto">Rating</p>
                <div class="elementos">
                    <img src="yellow_fill_star.png" alt="" class="star">
                    <img src="yellow_fill_star.png" alt=""class="star">
                    <img src="yellow_fill_star.png" alt=""class="star">
                    <img src="yellow_fill_star.png" alt=""class="star">
                    <img src="yellow_outline_star.png" alt=""class="star">
                    <img class="mark" src="baseline_bookmark_border_white_48dp.png" alt="">
                </div>
            </div> `
    }

    toBanner() {
        bannertitulo.innerHTML = this.name
        banneredad.innerHTML = this.edad
        bannerdescripcion.innerHTML = this.description
        bannerfondo.style.backgroundImage = `url(${this.imageBanner})`
        bannerrating.innerHTML = this.rating
    }

}


const m1 = new Movie ("Los condenados", "https://www.lavanguardia.com/peliculas-series/images/movie/poster/2007/4/w1280/dqw4gBtdKPRiq4vnNgCfamkgIPx.jpg", "Un convicto condenado a muerte en una prisión de Centroamérica se entera de que un magnate de los medios lo compró para protagonizar su más nuevo reality show.", "(4.2 Ratings)", "+16", "https://occ-0-1348-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABf5GEh-FTdWWcIv1k_9PXk_UeRJyxsmuVa5--7z6nI9LumEx-TQdjsyn1JHVgVwH0tzFghvhxQpvl1q8qIEnQjvGUMJeWkZkNVYd.jpg?r=f16")
const m2 = new Movie ("Esta noche duermes conmigo", "https://images.justwatch.com/poster/303981869/s592/tonight-youre-sleeping-with-me", "Atrapada en un matrimonio que perdió la pasión, una periodista debe elegir entre su distante pero cariñoso esposo y un exnovio más joven que está de vuelta en su vida.", "(4.6 ratings)", "+18", "https://ocdn.eu/images/pulscms/MTg7MDA_/4875b282-f58d-46ce-aee1-239cb424558d.jpeg")
const m3 = new Movie ("Tenemos un fantasma", "https://lh3.googleusercontent.com/uIUhczLiCY3PfwRrSZOn_L5ys9lcPKeKmOFC0W4xy6rgCH1WyXFlesgq4PQwRHvIJYTGJWQiev0YNbiw54-Pk8CD87L91RUxSeOYctLPFu4Diz6QyFOLA0qyY4Ck8DzDMLcEFFlHj8E=w2400","Una familia se hace famosa instantáneamente (y atrae la atención de la CIA) tras descubrir que en su casa se aparece un amable fantasma.", "(4.2 ratings)", "+16", "https://occ-0-358-1001.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABWzwstmCrw7gNvTJBzP-FoniE8s-oXX9eIiHptqHCJWpfp53f_8F6QqkRM7q0XAlUWUzdted9y1lWrrHC1I1JeMbwc4mB97ch1z6.jpg?r=3f5")
const m4 = new Movie ("Bad Boys, para siempre", "https://pics.filmaffinity.com/Bad_Boys_for_Life-343590773-large.jpg", "El policía de Miami Marcus está listo para un bien merecido descanso..., hasta que su compañero Mike se convierte en blanco de un despiadado cártel.", "(4.2 ratings)", "+18", "https://occ-0-990-2774.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVmwk-qGK6sXpVcPVBYvzFjU6_9r3Ployj4apWI222jvws_arHHaV0FJIHUIoageuROC8URI_VcmctDBXS0BVTea7s2ErvMi0oLE.jpg?r=8ad" )
const m5 = new Movie ("El mundo mágico de Terabithia", "https://www.planetalector.com/usuaris/thumbnails/libros/fotos/50/360/un-puente-hacia-terabithia_9788427932678.jpg", "En esta aventura basada en la exitosa novela, Leslie, la nueva compañera de clase, le muestra a Jesse un fascinante mundo de fantasía e imaginación.", "(4.9 ratings)", "+12", "https://occ-0-988-33.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABdDbo9aAaq0oMQRn4SPjLik-FeRa675owOkfIhned8ljBNbc-gvdjyQyKp-pKfRAOzMmrJEgkzyrVeodljt9Ycpv-KLo1fdoZYGZ.jpg?r=5cb")
const m6 = new Movie ("Los extraños", "https://s3-eu-west-1.amazonaws.com/abandomedia/db/poster/db_posters_56035.jpg", "La vida privilegiada y meticulosamente construida de una mujer se desmorona cuando dos extraños llegan a su pintoresco pueblo.", "(3.9 ratings)", "+18", "https://bolavip.com/__export/1677332273126/sites/bolavip/img/2023/02/25/thestrays_crop1677332214184.jpg_242310155.jpg")
const m7 = new Movie ("Lágrimas del sol", "https://www.lavanguardia.com/peliculas-series/images/movie/poster/2003/3/w1280/h4r3AwNkYdrDYZeM8gG9zheiW7r.jpg", "Cuando la guerra asola Nigeria, un miembro del equipo&nbsp;SEAL de la Marina deberá rescatar a una médica refugiada en la jungla...&nbsp;y a toda la gente bajo su cuidado.", "(4.9 ratings)", "+18", "https://images.amcnetworks.com/amctv.es/wp-content/uploads/2020/02/LAGRIMAS-DEL-SOL-BANNER.jpg")
const m8 = new Movie ("La vida secreta de tus mascotas", "https://pics.filmaffinity.com/La_vida_secreta_de_tus_mascotas-130082782-large.jpg", "Dos perros enemigos atrapados en el mundo exterior se unen con un fin común: enfrentar a una pandilla de animales furiosos que quiere atacar a los humanos.", "(4.5 ratings)", "+9", "https://mx.web.img3.acsta.net/r_1280_720/newsv7/19/08/09/16/16/4051355.jpg")
const listaMovies = [m1,m2,m3,m4,m5,m6,m7,m8]


for (let i = 0; i < listaMovies.length; i++) {
    var movie = listaMovies[i]
    movieContainer.innerHTML += movie.toHtml(i)
    movieContainer2.innerHTML += movie.toHtml(i)
}   


