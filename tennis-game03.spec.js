function TennisGame(){
this.pressB =()=>{
}
this.echo = ()=>{
  return 'Fiften-Love'
}
}

test('Echo "Love-Fiften" when press B button',() => {
  //arrange
  let app = new TennisGame()
  //act
  app.pressB()
  let result = app.echo()
  //Assert
  expect(result).toBe('Fiften-Love')
})
