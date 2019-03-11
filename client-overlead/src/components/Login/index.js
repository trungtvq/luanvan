
import React, { Component } from 'react';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
const Login = () =>
        <div>
                <div className="p-inputgroup">
                        <span className="p-inputgroup-addon"><i className="pi pi-user" /></span>
                        <InputText placeholder="Username" />
                </div>
                <div className="p-inputgroup">
                        <span className="p-inputgroup-addon"><i className="pi pi-user" /></span>
                        <Password placeholder="Password" />
                </div>
        </div>

export default Login;