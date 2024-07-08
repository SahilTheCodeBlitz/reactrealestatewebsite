// here we are writting slider setting which we will pass to slider Component 
// as props

export const sliderSettings = {
    slidesPerView:1,
    spaceBetween:50,
    breakpoints:{
        480:{
            slidesPerView:1
        },
        600:{
            slidesPerView:2
        },
        750:{
            slidesPerView:3
        },
        1100:{
            slidesPerView:4
        }
    }
}