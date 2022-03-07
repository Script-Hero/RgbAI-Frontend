import logo from './logo.svg';
import './App.css';
import React from 'react';
import { HexColorPicker } from "react-colorful";


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      c1 : '#' + Math.floor(Math.random()*16777215).toString(16),
      c2 : '#FFFFFF',
      c3 : '#FFFFFF',
      c4 : '#FFFFFF',
      score:0,
      loading:false
    }

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.render = this.render.bind(this);
    this.calculateScore = this.calculateScore.bind(this);
    this.adjust = this.adjust.bind(this);
    this.reset = this.reset.bind(this);


  }

  handleChange1(color, event){
    this.setState({c2:color})
  }

  handleChange2(color, event){
    this.setState({c3:color})
  }

  handleChange3(color, event){
    this.setState({c4:color})
  }

  handleChange4(color, event){
    this.setState({c5:color})
  }


  calculateScore(){
    const request_options = {
      method:'POST',
      body:JSON.stringify({
        colorset : [this.state.c1.substring(1), this.state.c2.substring(1), this.state.c3.substring(1), this.state.c4.substring(1)]
      })
    }

    fetch('https://rgbai-backend.herokuapp.com/compute_set', request_options).then(resp => resp.json()).then(data => {
      this.setState({score:data})
    }).catch((err) => {
      this.reset();
    })
      
  }

  adjust(){
    this.setState({loading:true})
    const request_options = {
      method:'POST',
      body:JSON.stringify({
        colorset : [this.state.c1.substring(1), this.state.c2.substring(1), this.state.c3.substring(1), this.state.c4.substring(1)]
      })
    }

    fetch('https://rgbai-backend.herokuapp.com/autocomplete_set', request_options).then(resp => resp.json()).then(data => {
      this.setState({
        c1: data.colorset[0],
        c2: data.colorset[1],
        c3: data.colorset[2],
        c4: data.colorset[3],
        loading: false
      })

      this.calculateScore();
    })
  }

  reset(){
    this.setState( {
      c1 : '#' + Math.floor(Math.random()*16777215).toString(16),
      c2 : '#FFFFFF',
      c3 : '#FFFFFF',
      c4 : '#FFFFFF',
      score:0
    })
  }


  render(){
    let c = this.state.startColor;

    let cs = [
      <div class='colorpicker'><HexColorPicker  color={ this.state.c2 } onChange={ this.handleChange1 }/></div>,
      <div class='colorpicker'><HexColorPicker  color={ this.state.c3 } onChange={ this.handleChange2 }/></div>,
      <div class='colorpicker'><HexColorPicker  color={ this.state.c4 } onChange={ this.handleChange3 }/></div>,

      
    ]
    return (
      <div id="body">
        <div id="reset-button" onClick={this.reset}>
          <p>Reset</p>
        </div>
        <div id="color-display-box">
          <div class="color-box" style={{backgroundColor:this.state.c1}} /> 
          <div class="color-box" style={{backgroundColor:this.state.c2}} /> 
          <div class="color-box" style={{backgroundColor:this.state.c3}} /> 
          <div class="color-box" style={{backgroundColor:this.state.c4}} /> 

        </div>

        <div id="input-section">
          {cs}
        </div>


        <div id="solver-section">
          <div id='button-row'>

            <div id='hint-button' onClick={this.adjust}>
              <p>{this.state.loading ? "..." : "Hint"}</p>
            </div>
              

            <div id="calculate-button" onClick={this.calculateScore}>
              <p>Calculate</p> 
            </div>

          </div>

          <h1 id='score'>{(this.state.score*100).toFixed(2)}%</h1>
        </div>
        
      </div>
    )
  }
}

export default App;
