import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './personal-data.scss'
import {FormControlInput} from "../form-controls/form-control-input/form-control-input";
import i18next from "i18next";
import {Validation} from "../../handlers/validators/validation";

export const PersonalData = (props) => {

    const [state, setState] = useState({
        fio: '',
        email: '',
        password: '',
        touchedBtn: false,
        validate: {
            fio: {
                required: Validation.required
            },
            email: {
                email: Validation.email
            }
        }
    })

    const [error, setError] = useState({})


    const onChangeFio = (json) => {
        setState({
            ...state,
            fio: json.fio
        });
    }
    const onChangeEmail = (json) => {
        setState({
            ...state,
            email: json.email
        });
    }
    const onChangePassword = (json) => {
        setState({
            ...state,
            password: json.password
        });
    }

    const submit = (event) => {
        event.preventDefault();

        if (!isValid()) {
            console.log('validation is not correct!')
            return;
        }
        props.submit(state);
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

    const getError = (field)=>{
        {Object.keys(field || {}).map((item, index)=>{
            console.log('error', field[item]);
            return <div className={'error'}>{field[item]}</div>
        })}
    }

    let formClass = state.touchedBtn ? ' submitted' : '';

    return (<form noValidate onSubmit={submit}
                  className={formClass}>
        <div className="row">
            <div className="col-12">
                <FormControlInput label='fio'
                                  text={'text'}
                                  value={state.fio}
                                  name='fio'
                                  onChange={onChangeFio}></FormControlInput>
                { getError(error.fio)}
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <FormControlInput label='Email'
                                  name='email'
                                  onChange={onChangeEmail}
                                  value={state.email}></FormControlInput>
                { getError(error.email)}
            </div>
        </div>

        <div className="row">
            <div className="col-12">
                <FormControlInput label='PasswordLabel'
                                  type='password'
                                  name='password'
                                  onChange={onChangePassword}
                                  value={state.password}></FormControlInput>
            </div>
        </div>

        <div className="row">
            <div className="col-12">
                <div className="d-flex justify-content-center">
                    <button className={'btn-entry btn btn-primary btn-sm'}
                            type="submit">{i18next.t('btnSave')}
                    </button>
                </div>
            </div>
        </div>
    </form>)
}

PersonalData.propTypes = {
    submit: PropTypes.func
};