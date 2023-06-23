import React, { useContext, useState } from 'react';

import { IonApp } from '@ionic/react';
import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { LanguagesContext } from '../Store/LanguagesContext';

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
            <Input onChange={(e) => { setMail(e.target.value) }} placeholder={langs['mailPlaceHolder']} prefix={<UserOutlined/>}/>
            <Input.Password onChange={(e) => { setPassword(e.target.value) }} placeholder={langs['passwordPlaceHolder']}/>

            <Button onClick={loginClickedHandler} type='primary'>{langs['loginLabel']}</Button>
            <Button type='link'>{langs['forgotPasswordLabel']}</Button>
        </div>
    )

}


export default UserLogin;