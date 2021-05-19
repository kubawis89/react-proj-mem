import React from 'react'

function Memes () {
    const memData = [
        {
            title: "Mem1",
            upvotes: 6,
            downvotes: 0,
            img: "obraz pierwszego mema"
        },
        {
            title: "Mem2",
            upvotes: 5,
            downvotes: 3,
            img: "obraz 2 mema"
        },
        {
            title: "Mem3",
            upvotes: 6,
            downvotes: 20,
            img: "obraz 3 mema"
        },
        {
            title: "Mem4",
            upvotes: 1,
            downvotes: 2,
            img: "obraz 4 mema"
        }
    ]

    const memList = memData.map((mem) => 
    <li key={mem.title}>
        Tytuł: {mem.title}, upvotes: {mem.upvotes}, downvotes: {mem.downvotes}, bilans: {mem.upvotes-mem.downvotes}
        <img src="img_girl.jpg" alt={mem.img} width="500" height="600"></img>
    </li>)

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

