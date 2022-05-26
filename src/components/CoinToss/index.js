// Write your code here
import {Component} from 'react'

import './index.css'

const headsUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailsUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultImage: headsUrl, headsCount: 0, tailsCount: 0}

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount
    let tossImage = ''

    if (toss === 0) {
      tossImage = headsUrl
      latestHeadsCount += 1
    } else {
      tossImage = tailsUrl
      latestTailsCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (Or) Tails</p>
          <img src={tossResultImage} className="coin-image" alt="toss result" />
          <button className="button" type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
