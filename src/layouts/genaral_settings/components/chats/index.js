import React, { useState } from 'react'
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";


<<<<<<< HEAD
const ChatData = () => {
  return (
    <div>
      <ol>
        <li>Don&apos;t spam, harass or be offensive to other users. Also, avoid using CAPS! No one likes to be screamed at!</li>
        <li>Don&apos;t beg or ask for loans, rains, tips and doubling coins.</li>
        <li>No suspicious behavior that can be seen as potential scams.</li>
        <li>Don&apos;t engage in any forms of advertising/ trading/ selling/ buying or offering services.</li>
        <li>Don&apos;t use URL shortener. Always submit the original link.</li>
        <li>Use the designated language chatrooms accordingly.</li>
      </ol>
      List of our full rules can be found on our forum.
    </div>
  )
}

export default function Chat() {
  const [chatRules, setchatRules] = useState(<ChatData />)
=======
const initialChatRules = `1. Don't spam, harass or be offensive to other users. Also, avoid using CAPS! No one likes to be screamed atDon't spam, harass or be offensive to other users. Also, avoid using CAPS! No one likes to be screamed at!
2. Don't beg or ask for loans, rains, tips and doubling coins.
3. No suspicious behavior that can be seen as potential scams.
4. Don't engage in any forms of advertising/ trading/ selling/ buying or offering services.
5. Don't use URL shortener. Always submit the original link.
6. Use the designated language chatrooms accordingly.`

export default function Chat() {
  const [ chatRules, setchatRules ] = useState(initialChatRules)
>>>>>>> d1d2487f80f75524a141b5ebfc1ef5f580208fce

  const [ischatRules, setIschatRules] = useState(false)

  const handleEdit = () => {
    setIschatRules(false)
  }

  return (
    <Card>
      <SoftBox pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
<<<<<<< HEAD
          Wallet settings
        </SoftTypography>
        <div className="chat-setting-input">
          <label htmlFor="min deposit"> Chat Room Rules </label>
          <div className="sbhuvwa">
            <div className="chat-setting-input-content">
              {ischatRules ?
                <textarea value={chatRules} onChange={(e) => setchatRules(e.target.value)} type="text" placeholder='e.g 1. .....................' />
                : <p>{chatRules}</p>}
=======
            Chat Room Settings
        </SoftTypography>
        <div className="chat-rules-input">
            <label htmlFor="min deposit"><b>Chat Room Rules </b></label>
            <div className="sbhuvwa">
              <div className="chat-rules-input-content">
                { ischatRules ?  
                <textarea value={chatRules} onChange={(e)=> setchatRules(e.target.value)} type="text" placeholder='e.g 1. .....................' /> 
                : <p className="chat-rules-list">{chatRules}</p>}
              </div>
              { ischatRules ? 
              <SoftBox mt={0} mb={0}>
                <SoftButton onClick={handleEdit} variant="gradient" color="info" >
                  Set
                </SoftButton>
              </SoftBox>
              : <span onClick={()=> ischatRules ? setIschatRules(false) :  setIschatRules(true) } >Edit</span> }
>>>>>>> d1d2487f80f75524a141b5ebfc1ef5f580208fce
            </div>
            {ischatRules ?
              <SoftBox mt={0} mb={0}>
                <SoftButton onClick={handleEdit} variant="gradient" color="info" >
                  Set
                </SoftButton>
              </SoftBox>
              : <span onClick={() => ischatRules ? setIschatRules(false) : setIschatRules(true)} >Edit</span>}
          </div>
        </div>
        <div>
          Chat Settings
        </div>
      </SoftBox>
    </Card>
    )
}
