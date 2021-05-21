import React from 'react'

function Memes () {
    const memData = [
        {
            id: 1,
            title: "Mem 1",
            upvotes: 0,
            downvotes: 0,
            favorite: false,
            img: "/images/1.jpg"
        },
        {
            id: 2,
            title: "Mem 2",
            upvotes: 0,
            downvotes: 0,
            favorite: false,
            img: "/images/2.jpg"
        },
        {
            id: 3,
            title: "Mem 3",
            upvotes: 0,
            downvotes: 0,
            favorite: false,
            img: "/images/3.jpg"
        },
        {
            id: 4,
            title: "Mem 4",
            upvotes: 0,
            downvotes: 0,
            favorite: false,
            img: "/images/4.jpg"
        },
        {
            id: 5,
            title: "Mem 5",
            upvotes: 0,
            downvotes: 0,
            favorite: false,
            img: "/images/5.jpg"
        },
        {
            id: 6,
            title: "Mem 6",
            upvotes: 0,
            downvotes: 0,
            favorite: false,
            img: "/images/6.jpg"
        },
        {
            id: 7,
            title: "Mem 7",
            upvotes: 0,
            downvotes: 0,
            favorite: false,
            img: "/images/7.jpg"
        },
        {
            id: 8,
            title: "Mem 8",
            upvotes: 0,
            downvotes: 0,
            favorite: false,
            img: "/images/8.jpg"
        },
        {
            id: 1,
            title: "Mem 9",
            upvotes: 0,
            downvotes: 0,
            favorite: false,
            img: "/images/9.jpg"
        },
        {
            id: 10,
            title: "Mem 10",
            upvotes: 0,
            downvotes: 0,
            favorite: false,
            img: "/images/10.jpg"
        },
        {
            id: 11,
            title: "Mem 11",
            upvotes: 0,
            downvotes: 0,
            favorite: false,
            img: "/images/11.jpg"
        },
        {
            id: 12,
            title: "Mem 12",
            upvotes: 0,
            downvotes: 0,
            favorite: false,
            img: "/images/12.jpg"
        },
        {
            id: 13,
            title: "Mem 13",
            upvotes: 0,
            downvotes: 0,
            favorite: false,
            img: "/images/13.jpg"
        },
        {
            id: 14,
            title: "Mem 14",
            upvotes: 0,
            downvotes: 0,
            favorite: false,
            img: "/images/14.jpg"
        },
        {
            id: 15,
            title: "Mem 15",
            upvotes: 0,
            downvotes: 0,
            favorite: false,
            img: "/images/15.jpg"
        },
        {
            id: 16,
            title: "Mem 16",
            upvotes: 0,
            downvotes: 0,
            favorite: false,
            img: "/images/16.jpg"
        },
        {
            id: 17,
            title: "Mem 17",
            upvotes: 0,
            downvotes: 0,
            favorite: false,
            img: "/images/17.jpg"
        },
        {
            id: 18,
            title: "Mem 18",
            upvotes: 0,
            downvotes: 0,
            favorite: false,
            img: "/images/18.jpg"
        },
        {
            id: 19,
            title: "Mem 19",
            upvotes: 0,
            downvotes: 0,
            favorite: false,
            img: "/images/19.jpg"
        },
        {
            id: 20,
            title: "Mem 20",
            upvotes: 0,
            downvotes: 0,
            favorite: false,
            img: "/images/20.jpg"
        }
    ]

    const memList = memData.map((mem) => 
    <div key={mem.id}>
        Tytuł: {mem.title}, upvotes: {mem.upvotes}, downvotes: {mem.downvotes}, bilans: {mem.upvotes-mem.downvotes}
        <br />
        <img src={mem.img} width="600" alt={mem.title}></img>
    </div>)

    return (
        <div>
            {memList}
        </div>
    )
}

export default Memes;

// render() {
//     const data =[{"name":"test1"},{"name":"test2"}];
//     const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);

//     return (
//       <div>
//       {listItems }
//       </div>
//     );
//   }

// 

