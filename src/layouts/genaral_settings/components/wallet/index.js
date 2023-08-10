import React, { useState } from 'react'
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";


export default function wallet() {
  const [ minDeposit, setMinDeposit ] = useState(10)
  const [ isMinDeposit, setIsMinDeposit ] = useState(false)

  const [ maxDeposit, setMaxDeposit ] = useState(3000)
  const [ isMaxDeposit, setIsMaxDeposit ] = useState(false)

  const [ MaxWithdrawal, setMaxWithdrawal ] = useState(10)
  const [ isMaxWithdrawal, setIsMaxWithdrawal ] = useState(false)

  const [ MinWithdrawal, setMinWithdrawal ] = useState(100)
  const [ isMinWithdrawal, setIsMinWithdrawal ] = useState(false)

  const [ MinDaily, setMinDaily ] = useState(100)
  const [ isMinDaily, setIsMinDaily ] = useState(false)

  const [ MinWeekly, setMinWeekly ] = useState(100)
  const [ isMinWeekly, setIsMinWeekly ] = useState(false)

  const [ MinMonthly, setMonthly ] = useState(100)
  const [ isMonthly, setIsMonthly ] = useState(false)

  const handleEdit = (e)=>{
    if(e === 1){
        setIsMinDeposit(false)
    }
   else if(e === 2){
        setIsMaxDeposit(false)
    }
   else if(e === 3){
        setIsMaxWithdrawal(false)
    }
    else if(e === 4){
        setIsMinWithdrawal(false)
    }
    else if(e === 5){
      setIsMinDaily(false)
    }
    else if(e === 6){
      setIsMinWeekly(false)
    }
    else if(e === 7){
      setIsMonthly(false)
    }
  }

  return (
    <Card>
        <SoftBox pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
            Wallet settings
        </SoftTypography>
        <div className="wallet-setting-input">
            <label htmlFor="min deposit"> Min. Deposit</label>
            <div className="sbhuvwa">
              <div className="wallet-setting-input-content">
                { isMinDeposit ?  
                <input value={minDeposit} onChange={(e)=> setMinDeposit(e.target.value)} type="number" placeholder='min deposit' /> 
                : <p>{minDeposit}</p>}
              </div>
              { isMinDeposit ? 
                      <SoftBox mt={0} mb={0}>
                        <SoftButton onClick={()=> handleEdit(1)} variant="gradient" color="info" >
                          Set
                        </SoftButton>
                    </SoftBox>
              :  <span onClick={()=> isMinDeposit ? setIsMinDeposit(false) :  setIsMinDeposit(true) } >Edit</span> }
            </div>
        </div>
        <div className="wallet-setting-input">
            <label htmlFor="min deposit"> Max. Deposit</label>
            <div className="sbhuvwa">
              <div className="wallet-setting-input-content">
                { isMaxDeposit ?  <input value={maxDeposit} onChange={(e)=> setMaxDeposit(e.target.value)} type="number" placeholder='max deposit' /> : <p>{maxDeposit}</p>}
              </div>
              { isMaxDeposit ? 
                      <SoftBox mt={0} mb={0}>
                        <SoftButton onClick={()=> handleEdit(2)} variant="gradient" color="info" >
                          Set
                        </SoftButton>
                    </SoftBox>
              :  <span onClick={()=> isMaxDeposit ? setIsMaxDeposit(false) :  setIsMaxDeposit(true) } >Edit</span> }

            </div>
        </div>
        <div className="wallet-setting-input">
            <label htmlFor="min deposit"> Max. Withdrawal</label>
            <div className="sbhuvwa">
              <div className="wallet-setting-input-content">
                { isMaxWithdrawal ?  <input value={MaxWithdrawal} onChange={(e)=> setMaxWithdrawal(e.target.value)} type="number" placeholder='Max. Withdrawal' /> : <p>{MaxWithdrawal}</p>}
              </div>
              { isMaxWithdrawal ? 
                      <SoftBox mt={0} mb={0}>
                        <SoftButton onClick={()=> handleEdit(3)} variant="gradient" color="info" >
                          Set
                        </SoftButton>
                    </SoftBox>
              :  <span onClick={()=> isMaxWithdrawal ? setIsMaxWithdrawal(false) :  setIsMaxWithdrawal(true) } >Edit</span> }
            </div>
        </div>
        <div className="wallet-setting-input">
            <label htmlFor="min deposit"> Min. Withdrawal</label>
            <div className="sbhuvwa">
              <div className="wallet-setting-input-content">
                { isMinWithdrawal ?  <input value={MinWithdrawal} onChange={(e)=> setMinWithdrawal(e.target.value)} type="number" placeholder='Min. Withdrawal' /> : <p>{MinWithdrawal}</p>}
              </div>
              { isMinWithdrawal ? 
                      <SoftBox mt={0} mb={0}>
                        <SoftButton onClick={()=> handleEdit(4)} variant="gradient" color="info" >
                          Set
                        </SoftButton>
                    </SoftBox>
              :  <span onClick={()=> isMinWithdrawal ? setIsMinWithdrawal(false) :  setIsMinWithdrawal(true) } >Edit</span> }
            </div>
        </div>

        <div className="wallet-setting-input">
            <label htmlFor="min deposit"> Min. Daily Bet Amount</label>
            <div className="sbhuvwa">
              <div className="wallet-setting-input-content">
                { isMinDaily ?  <input value={MinDaily} onChange={(e)=> setMinDaily(e.target.value)} type="number" placeholder='Min. Daily Bet Amount' /> : <p>{MinDaily}</p>}
              </div>
              { isMinDaily ? 
                      <SoftBox mt={0} mb={0}>
                        <SoftButton onClick={()=> handleEdit(5)} variant="gradient" color="info" >
                          Set
                        </SoftButton>
                    </SoftBox>
                  :  <span onClick={()=> isMinDaily ? setIsMinDaily(false) :  setIsMinDaily(true) } >Edit</span> }
            </div>
        </div>
        <div className="wallet-setting-input">
            <label htmlFor="min deposit"> Min. Weekly Bet Amount</label>
            <div className="sbhuvwa">
              <div className="wallet-setting-input-content">
                { isMinWeekly ?  <input value={MinWeekly} onChange={(e)=> setMinWeekly(e.target.value)} type="number" placeholder='Min. Weekly Bet Amount' /> : <p>{MinWeekly}</p>}
              </div>
              { isMinWeekly ? 
                      <SoftBox mt={0} mb={0}>
                        <SoftButton onClick={()=> handleEdit(6)} variant="gradient" color="info" >
                          Set
                        </SoftButton>
                    </SoftBox>
              :  <span onClick={()=> isMinWeekly ? setIsMinWeekly(false) :  setIsMinWeekly(true) } >Edit</span> }
            </div>
        </div>
        <div className="wallet-setting-input">
            <label htmlFor="min deposit"> Min. Monthly Bet Amount </label>
            <div className="sbhuvwa">
              <div className="wallet-setting-input-content">
                { isMonthly ?  <input value={MinMonthly} onChange={(e)=> setMonthly(e.target.value)} type="number" placeholder='Min. Weekly Bet Amount' /> : <p>{MinMonthly}</p>}
              </div>
              { isMonthly ? 
                      <SoftBox mt={0} mb={0}>
                        <SoftButton onClick={()=> handleEdit(7)} variant="gradient" color="info" >
                          Set
                        </SoftButton>
                    </SoftBox>
              :  <span onClick={()=> isMonthly ? setIsMonthly(false) :  setIsMonthly(true) } >Edit</span> }
            </div>
        </div>
      </SoftBox>
    </Card>
  )
}
