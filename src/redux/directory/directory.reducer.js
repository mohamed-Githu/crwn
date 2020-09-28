const initialState = {
  sections: [
    {
      title: 'hats',
      imgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
    },
    {
      title: 'jackets',
      imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
    },
    {
      title: 'sneakers',
      imgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
    },
    {
      title: 'womens',
      imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
    },
    {
      title: 'mens',
      imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
    }
  ]
}

const directoryReducer = (state = initialState, action) => {
  switch (action.type) {  
    default:
        return state;
  }
}

export default directoryReducer;