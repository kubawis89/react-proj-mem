const memData = {
  memes: [
    {
      id: 1,
      title: "Mem 1",
      upvotes: 15,
      downvotes: 5,
      favorite: true,
      img: "/images/1.jpg",
    },
    {
      id: 2,
      title: "Mem 2",
      upvotes: 4,
      downvotes: 3,
      favorite: true,
      img: "/images/2.jpg",
    },
    {
      id: 3,
      title: "Mem 3",
      upvotes: 5,
      downvotes: 8,
      favorite: true,
      img: "/images/3.jpg",
    },
    {
      id: 4,
      title: "Mem 4",
      upvotes: 5,
      downvotes: 0,
      favorite: false,
      img: "/images/4.jpg",
    },
    {
      id: 5,
      title: "Mem 5",
      upvotes: 6,
      downvotes: 0,
      favorite: false,
      img: "/images/5.jpg",
    },
    {
      id: 6,
      title: "Mem 6",
      upvotes: 4,
      downvotes: 0,
      favorite: false,
      img: "/images/6.jpg",
    },
    {
      id: 7,
      title: "Mem 7",
      upvotes: 0,
      downvotes: 1,
      favorite: false,
      img: "/images/7.jpg",
    },
    {
      id: 8,
      title: "Mem 8",
      upvotes: 0,
      downvotes: 2,
      favorite: false,
      img: "/images/8.jpg",
    },
    {
      id: 9,
      title: "Mem 9",
      upvotes: 0,
      downvotes: 0,
      favorite: false,
      img: "/images/9.jpg",
    },
    {
      id: 10,
      title: "Mem 10",
      upvotes: 0,
      downvotes: 0,
      favorite: false,
      img: "/images/10.jpg",
    },
    {
      id: 11,
      title: "Mem 11",
      upvotes: 0,
      downvotes: 0,
      favorite: false,
      img: "/images/11.jpg",
    },
    {
      id: 12,
      title: "Mem 12",
      upvotes: 0,
      downvotes: 0,
      favorite: false,
      img: "/images/12.jpg",
    },
    {
      id: 13,
      title: "Mem 13",
      upvotes: 0,
      downvotes: 0,
      favorite: false,
      img: "/images/13.jpg",
    },
    {
      id: 14,
      title: "Mem 14",
      upvotes: 0,
      downvotes: 0,
      favorite: false,
      img: "/images/14.jpg",
    },
    {
      id: 15,
      title: "Mem 15",
      upvotes: 0,
      downvotes: 0,
      favorite: false,
      img: "/images/15.jpg",
    },
    {
      id: 16,
      title: "Mem 16",
      upvotes: 0,
      downvotes: 0,
      favorite: false,
      img: "/images/16.jpg",
    },
    {
      id: 17,
      title: "Mem 17",
      upvotes: 0,
      downvotes: 0,
      favorite: false,
      img: "/images/17.jpg",
    },
    {
      id: 18,
      title: "Mem 18",
      upvotes: 10,
      downvotes: 0,
      favorite: true,
      img: "/images/18.jpg",
    },
    {
      id: 19,
      title: "Mem 19",
      upvotes: 0,
      downvotes: 0,
      favorite: false,
      img: "/images/19.jpg",
    },
    {
      id: 20,
      title: "Mem 20",
      upvotes: 0,
      downvotes: 0,
      favorite: false,
      img: "/images/20.jpg",
    },
  ],
};

export const memReducer = (state = memData, action) => {
  switch (action.type) {
    case "ADD_UPVOTE": {
      const index = state.memes.findIndex((mem) => mem.id === action.payload);
      const newArr = [...state.memes];
      newArr[index].upvotes++;
      return {
        ...state,
        memes: newArr,
      };
    }
    case "ADD_DOWNVOTE": {
      const index = state.memes.findIndex((mem) => mem.id === action.payload);
      const newArr = [...state.memes];
      newArr[index].downvotes++;
      return {
        ...state,
        memes: newArr,
      };
    }
    case "ADD_REMOVE_FAVORITE": {
      const index = state.memes.findIndex((mem) => mem.id === action.payload);
      const newArr = [...state.memes];
      newArr[index].favorite = !newArr[index].favorite;
      return {
        ...state,
        memes: newArr,
      };
    }
    case "ADD_MEM": {
      return {
        ...state,
        memes: [...state.memes, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};
