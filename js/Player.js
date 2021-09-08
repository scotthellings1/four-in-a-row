class Player {
  constructor(name, id, color,  active = false) {
    this.id = id
    this.name = name
    this.color = color
    this.active = active
    this.tokens = this.createTokens(21)
  }
  
  /**
   * get an array of a players unused tokens
   * @returns {[]} Array of unused tokens
   */
  get unusedTokens() {
    return this.tokens.filter(token => !token.played)
    }
    
  /**
   * Gets the active token by returning the first token in the array of unused tokens.
   * @return {Object} First token object in the array of unused tokens.
   */
  get activeToken() {
    return this.unusedTokens[0]
  }
  
  
  checkTokens() {
    return this.unusedTokens.length == 0 ? false : true;
  }
  
  
  /**
   * creates tokens for player
   * @param num - Number of tokens to create
   * @returns {[]} - Array of Tokens
   */
  createTokens(num) {
  const tokens = []
    for (let i = 0; i < num; i++) {
      let token = new Token(i, this)
      tokens.push(token)
    }
    return tokens
  }
}