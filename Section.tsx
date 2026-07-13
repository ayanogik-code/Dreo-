import AnimeCard from "./AnimeCard";

const anime = [

{
title:"Solo Leveling",
image:"https://picsum.photos/400/600?1",
rating:"9.8",
episodes:12
},

{
title:"Jujutsu Kaisen",
image:"https://picsum.photos/400/600?2",
rating:"9.6",
episodes:24
},

{
title:"Demon Slayer",
image:"https://picsum.photos/400/600?3",
rating:"9.7",
episodes:44
},

{
title:"One Piece",
image:"https://picsum.photos/400/600?4",
rating:"9.9",
episodes:1100
},

{
title:"Blue Lock",
image:"https://picsum.photos/400/600?5",
rating:"8.9",
episodes:24
},

{
title:"Attack on Titan",
image:"https://picsum.photos/400/600?6",
rating:"9.9",
episodes:89
},

];

export default function Section({
title,
}:{
title:string;
}){

return(

<section className="max-w-7xl mx-auto px-6 mt-16">

<div className="flex justify-between items-center mb-8">

<h2 className="text-3xl font-black">

{title}

</h2>

<button className="text-violet-400">

عرض الكل

</button>

</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">

{anime.map((item)=>(

<AnimeCard

key={item.title}

{...item}

/>

))}

</div>

</section>

)

}