import React from 'react';
import {useSelector} from 'react-redux';
import './scss/Memes.scss';

function Memes () {

    const memDataFromState = useSelector((state) => state);

    const memList = memDataFromState.map((mem) => 
    <div key={mem.id} className="memSection">
        <h2>{mem.title}</h2>
        <img className="memImg" src={mem.img} width="600" alt={mem.title}></img>
        <div className="assesment">
            <div className="vote">
                <section className="thumbs"><button><img src="/images/up.png" width="30" alt="Upvotes" /></button>{mem.upvotes}</section>
                <section className="thumbs"><button><img src="/images/down.png" width="30" alt="Downvotes" /></button>{mem.downvotes}</section>
                <section> Hot/Regular/Poor {mem.upvotes-mem.downvotes}</section>
            </div>
            <div className="favorite">
                <button><img src="/images/addToFavorite.png" width="30" alt="addToFavorite" /></button>
            </div>
        </div>
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

