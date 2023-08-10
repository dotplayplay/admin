import React, { useState } from 'react'
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

export default function gamesSettings() {

  let [ crash, setCrash ] = useState(1)
  let [ diamond, setDiamond ] = useState(1)
  let [ tower, setTower ] = useState(1)
  let [ mines, setMines ] = useState(1)
  let [ plinko, setplinko ] = useState(1)
  let [ hilo, sethilo ] = useState(1)
  let [ dice, setdice ] = useState(1)

  const handleCrash = (event)=>{
    if(event === '-'){
      if( crash !== 1){
        crash = crash - 1
        setCrash(crash)
      }else{
        alert("House edge is too small")
        setCrash(crash)
      }
  }
   else if(event === '+'){
    if(crash >= 5){
      alert("House edge is too much")
      setCrash(crash)
    }else{
      crash = crash + 1
      setCrash(crash)
    }
    }
  }


  const handleMines = (event)=>{
    if(event === '-'){
      if( mines !== 1){
        mines = mines - 1
        setMines(mines)
      }else{
        alert("House edge is too small")
        setMines(mines)
      }
  }
   else if(event === '+'){
      if(mines >= 5){
        alert("House edge is too much")
        setMines(mines)
      }else{
        mines = mines + 1
        setMines(mines)
      }
    }
  }

  const handleDice = (event)=>{
    if(event === '-'){
      if( dice !== 1){
        dice = dice - 1
        setdice(dice)
      }else{
        alert("House edge is too small")
        setdice(dice)
      }
  }
   else if(event === '+'){
      if(dice >= 5){
        alert("House edge is too much")
        setdice(dice)
      }else{
        dice = dice + 1
        setdice(dice)
      }
    }
  }


  const handlehilo = (event)=>{
    if(event === '-'){
      if( hilo !== 1){
        hilo = hilo - 1
        sethilo(hilo)
      }else{
        alert("House edge is too small")
        sethilo(hilo)
      }
  }
   else if(event === '+'){
      if(hilo >= 5){
        alert("House edge is too much")
        sethilo(hilo)
      }else{
        hilo = hilo + 1
        sethilo(hilo)
      }
    }
  }

  const handlePlinko = (event)=>{
    if(event === '-'){
      if( plinko !== 1){
        plinko = plinko - 1
        setplinko(plinko)
      }else{
        alert("House edge is too small")
        setplinko(plinko)
      }
  }
   else if(event === '+'){
      if(plinko >= 5){
        alert("House edge is too much")
        setplinko(plinko)
      }else{
        plinko = plinko + 1
        setplinko(plinko)
      }
    }
  }


  const handleDiamnond = (event)=>{
    if(event === '-'){
      if( diamond !== 1){
        diamond = diamond - 1
        setDiamond(diamond)
      }else{
        alert("House edge is too small")
        setDiamond(diamond)
      }
    }
   else if(event === '+'){
      if(diamond >= 5){
        alert("House edge is too much")
        setDiamond(diamond)
      }else{
        diamond = diamond + 1
        setDiamond(diamond)
      }
    }
  }


  const handleTower = (event)=>{
    if(event === '-'){
      if( tower !== 1){
        tower = tower - 1
        setTower(tower)
      }else{
        alert("House edge is too small")
        setTower(tower)
      }
    }
   else if(event === '+'){
      if(tower >= 5){
        alert("House edge is too much")
        setTower(tower)
      }else{
        tower = tower + 1
        setTower(tower)
      }
    }
  }

  return (
    <Card>
        <SoftBox pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
            Games settings
        </SoftTypography>
        <div className="game-setting-input">
            <label htmlFor="min deposit"> Crash Game House Edge %</label>
            <div className="sellecting-container">
              <div className="sgveussa">
                <button onClick={()=> handleCrash('-')} >-</button>
              </div>
              <div className="sgveussa">
               <span>{crash}%</span>
              </div>
              <div className="sgveussa">
                <button  onClick={()=> handleCrash('+')}>+</button>
              </div>
            </div>
        </div>

        <div className="game-setting-input">
            <label htmlFor="min deposit"> Mines Game House Edge %</label>
            <div className="sellecting-container">
              <div className="sgveussa">
                <button onClick={()=> handleMines('-')} >-</button>
              </div>
              <div className="sgveussa">
               <span>{mines}%</span>
              </div>
              <div className="sgveussa">
                <button  onClick={()=> handleMines('+')}>+</button>
              </div>
            </div>
        </div>

        <div className="game-setting-input">
            <label htmlFor="min deposit"> Plinko Game House Edge %</label>
            <div className="sellecting-container">
              <div className="sgveussa">
                <button onClick={()=> handlePlinko('-')} >-</button>
              </div>
              <div className="sgveussa">
               <span>{plinko}%</span>
              </div>
              <div className="sgveussa">
                <button  onClick={()=> handlePlinko('+')}>+</button>
              </div>
            </div>
        </div>


        <div className="game-setting-input">
            <label htmlFor="min deposit"> Hilo Game House Edge %</label>
            <div className="sellecting-container">
              <div className="sgveussa">
                <button onClick={()=> handlehilo('-')} >-</button>
              </div>
              <div className="sgveussa">
               <span>{hilo}%</span>
              </div>
              <div className="sgveussa">
                <button  onClick={()=> handlehilo('+')}>+</button>
              </div>
            </div>
        </div>


        <div className="game-setting-input">
            <label htmlFor="min deposit"> Dice Game House Edge %</label>
            <div className="sellecting-container">
              <div className="sgveussa">
                <button onClick={()=> handleDice('-')} >-</button>
              </div>
              <div className="sgveussa">
               <span>{dice}%</span>
              </div>
              <div className="sgveussa">
                <button  onClick={()=> handleDice('+')}>+</button>
              </div>
            </div>
        </div>


        <div className="game-setting-input">
            <label htmlFor="min deposit"> Tower Game House Edge %</label>
            <div className="sellecting-container">
              <div className="sgveussa">
                <button onClick={()=> handleTower('-')} >-</button>
              </div>
              <div className="sgveussa">
               <span>{tower}%</span>
              </div>
              <div className="sgveussa">
                <button  onClick={()=> handleTower('+')}>+</button>
              </div>
            </div>
        </div>


        <div className="game-setting-input">
            <label htmlFor="min deposit"> Diamonds Game House Edge %</label>
            <div className="sellecting-container">
              <div className="sgveussa">
                <button onClick={()=> handleDiamnond('-')} >-</button>
              </div>
              <div className="sgveussa">
               <span>{diamond}%</span>
              </div>
              <div className="sgveussa">
                <button  onClick={()=> handleDiamnond('+')}>+</button>
              </div>
            </div>
        </div>
      </SoftBox>
    </Card>
  )
}
