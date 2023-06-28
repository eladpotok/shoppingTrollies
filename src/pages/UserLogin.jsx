import React, { useContext, useState } from 'react';

import { IonApp } from '@ionic/react';
import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { LanguagesContext } from '../Store/LanguagesContext';
import { AppName } from '../Globals/Themes';

function UserLogin(props){ 

    const langs = props.langs

    const [mail, setMail] = useState(null)
    const [password, setPassword] = useState(null)

    function loginClickedHandler() {
        if (!mail || !password) {
            console.log('one of the values is missing')
            return
        }

        props.onLogin(mail, password)
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '50%', marginLeft: '10%', marginRight: '10%'}}>
                <div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>{AppName}</div>
                    <Input style={{marginTop: '5px'}} onChange={(e) => { setMail(e.target.value) }} placeholder={langs['mailPlaceHolder']} prefix={<UserOutlined/>}/>
                    <Input.Password style={{marginTop: '5px'}} onChange={(e) => { setPassword(e.target.value) }} placeholder={langs['passwordPlaceHolder']}/>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '5px'}}>
                        <div>
                            <Button onClick={loginClickedHandler} type='primary'>{langs['loginLabel']}</Button>
                            <Button type='link'>{langs['forgotPasswordLabel']}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default UserLogin;