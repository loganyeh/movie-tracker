
export function genreIDSwitch(genreID : number){

    switch(genreID){
        case 28:
            return "Action";
        case 12: 
            return "Adventure"; 
        case 16: 
            return "Animation";
        case 35:
            return "Comedy";
        case 80:
            return "Crime";
        case 99:
            return "Doumentary";
        case 18:
            return "Drama";
        case 10751: 
            return "Family";
        case 14:
            return "Fantasy";
        case 36: 
            return "History"; 
        case 27: 
            return "Horror";
        case 10402:
            return "Music";
        case 9648:
            return "Mystery";
        case 10749:
            return "Romance";
        case 878:
            return "Science-Fiction";
        case 10770: 
            return "TV Movie";
        case 53:
            return "Thriller";
        case 10752:
            return "War";
        case 37: 
            return "Western";
        
        
    }


}

export function movieRatingColor(dataRating: number){
    
    switch(dataRating){
        case 0:
        case 0.5:
        case 1: 
        case 1.5: 
        case 2: 
        case 2.5: 
        case 3: 
        case 3.5: 
            return "text-red-600 bg-red-600";
        case 4:
        case 4.5:
        case 5: 
        case 5.5: 
        case 6: 
        case 6.5: 
            return "text-yellow-400 bg-yellow-400";
        case 7: 
        case 7.5: 
        case 8: 
        case 8.5: 
        case 9.5: 
        case 10: 
            return "text-green-600 bg-green-600"
    }


}

