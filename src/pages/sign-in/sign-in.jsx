import React, {useEffect, useState} from 'react';
import '../../components/anonymous/anonymous.scss'
import './sign-in.scss'
import {FormControlInput} from "../../components/form-controls/form-control-input/form-control-input";
import {Anonymous} from "../../components/anonymous/anonymous";
import {AuthService} from "../../services/auth.service";
import i18next from "i18next";
import {Validation} from "../../handlers/validators/validation";
import {StorageService} from "../../services/storage.service";

export const SignIn = (props) => {

    const [error, setError] = useState({})
    const [state, setState] = useState({
        username: "",
        password: "",
        touchedBtn: false,
        validate: {
            username: {
                required: Validation.required,
                email: Validation.email
            },
            password: {required: Validation.required}
        }
    });

    useEffect((event) => {
        console.log('useEffect', event);
    }, [state.username]);

    const onChangeEmail = (json) => {
        state.username = json.email;
        setState(state);
    }

    const onChangePassword = (json) => {
        state.password = json.password;
        setState(state);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        setState({
            ...state,
            touchedBtn: true
        })

        if (isValid()) {
            AuthService.signIn({
                username: state.username,
                password: state.password
            })
                .then(res => {
                    let auth = JSON.parse(StorageService.getAuth() || '{}');

                    auth.token = res["data"]['data']['token'];

                    StorageService.setAuth(JSON.stringify(auth));
                    StorageService.setToken(auth.token);
                    window.location.href = '/';

                    console.log(res);
                })
                .catch(err => console.log(err));
        }
    }

    const isValid = () => {
        let value = true;

        for (let key of Object.keys(state.validate)) {
            let error = Validation.run(state.validate[key], state[key]);
            if (error) {
                value = false;
                setError({
                    [key]: error
                })
            }
        }

        return value;
    }

    const getError = (field) => {
        {
            Object.keys(field || {}).map((item, index) => {
                console.log('error', field[item]);
                return <div className={'error'}>{field[item]}</div>
            })
        }
    }

    let formClass = '';

    if (state.touchedBtn) {
        formClass += ' submitted'
    }

    return (<Anonymous>
        <div className='sign-in-content'>
            <div className="container-fluid">
                <div className="container">
                    <h1 className="title">{i18next.t('authHeader')}</h1>

                    <form noValidate onSubmit={onSubmit}
                          className={formClass}>
                        <div className="row">
                            <div className="col-12">
                                <FormControlInput label={i18next.t('formTitleEmail')}
                                                  value={state.username}
                                                  name='email'
                                    //validateStatus={state.touchedBtn}
                                    //validateRules={state.validate.username}
                                                  onChange={onChangeEmail}></FormControlInput>
                                {getError(error.username)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <FormControlInput label='formTitlePassword'
                                                  type='password'
                                                  name='password'
                                    //validateStatus={state.touchedBtn}
                                                  onChange={onChangePassword}
                                                  value={state.password}></FormControlInput>
                                {getError(error.password)}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex justify-content-center">
                                    <button className={'btn-entry btn btn-primary btn-sm'}
                                            type="submit">{i18next.t('buttonEntry')}</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="sub-link">
                        <a href={'/sign-up'}>{i18next.t('authSignUpLink')}</a>
                        <a href={'/remind-password'}>{i18next.t('authRemindPasswordLink')}</a>
                    </div>
                </div>
            </div>
        </div>
    </Anonymous>)
}
