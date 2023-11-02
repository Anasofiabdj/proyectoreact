const productos = [
    {id: '1', name: 'Ateez Treasure Ep.fin all to action', category: 'Álbumes', price: 35000, stock: 10, description:'Álbum importado, sellado', imageUrl: 'https://akamai.sscdn.co/uploadfile/letras/albuns/3/8/4/2/796351570559170-tb_180.jpg'},
    {id: '2', name: 'Ateez The World Ep. 2 outlaw', category: 'Álbumes', price: 40000, stock: 6, description:'Álbum importado, sellado', imageUrl: 'https://lastfm.freetls.fastly.net/i/u/300x300/cbb4b745cffd3f3f655b1bd7a01cea9f.jpg'},
    {id: '3', name: 'Official Lightiny Version 1', category: 'Lighstick', price: 28000, stock: 3, description:'Álbum importado, sellado', imageUrl: 'https://kpopomo.shop/cdn/shop/articles/Ateez_Lightstick_Lightiny_1400x.progressive.jpg?v=1596394538'},
    {id: '4', name: 'Ateez Treasure Ep. 3 One to all', category: 'Álbumes', price: 18000, stock: 4, description:'Álbum importado, sellado', imageUrl: 'https://images.squarespace-cdn.com/content/v1/5cbbf68dd7819e26d44e7e27/1560284686556-UZA5IXSC9I8W4OAC6F1I/ATEEZ+Tresure+EP3_Wave+Ver+CD+%282%29.jpg'},
]

export const mFetch= (id)=> {
    return new Promise ((res,rej)=>{
      setTimeout(()=> {
        res(id ? productos.find(prod =>prod.id===id) :productos)
      }, 1000)
    }
    )
  }