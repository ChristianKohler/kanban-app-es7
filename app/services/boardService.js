let dummyData = [
      { 'id': 0, 'title': 'Shoppinglist' },
      { 
        'id': 1, 
        'title': 'Todos',
        'lists': [
          { 'id': 1, 'title': 'new', tasks: ['clean house', 'buy nutella']},
          { 'id': 2, 'title': 'done', tasks: [
            'run 10 miles', 
            'find meaning of life',
            'sleep a lot',
            'start dishwasher',
            'plan vacation',
            'go fishing',
            'read a book',
            'watch a movie'
          ]}
        ]
      }
    ];

class BoardsService {
  all() {
    return dummyData;
  }
  
  board(id) {
    let result = dummyData.filter(board => board.id === id)
    
    if (result.length !== 1) {
      return undefined;
    }
    
    return result[0];
  }
  
  list(id) {
    let list = dummyData
      .map(board => board.lists)
      .filter(list => !!list)
      .reduce((p, n) => p.concat(n),[])
      .filter(list => list.id === id);
      
      return list.length > 0 ? list[0] : undefined;
  }
}


export default new BoardsService()