import React from 'react';
import '../../components/anonymous/anonymous.scss'
import './sign-up.scss'
import {Anonymous} from "../../components/anonymous/anonymous";
import {PersonalData} from "../../components/personal-data/personal-data";
import i18next from "i18next";
import {PrivateData} from "../../components/private-data/private-data";
import {AuthService} from "../../services/auth.service";

const step = 0;

export const SignUp = (props) => {

    const submitFirstStep = (data)=>{
        AuthService.signUp(data)
            .then((item)=>{
                debugger;
            })
            .catch((item)=>{
                console.log('error', item)
            })
    }
    const submitLastStep = (data)=>{
        debugger;
    }

    const firstStep = () => {
        return <div className="row step1-content">
            <div className="col-lg-12">
                <h1 className="title"
                    translate>{i18next.t('authSignUpHeader')}</h1>
                <PersonalData {...props} submit={submitFirstStep}></PersonalData>
            </div>
        </div>
    }

    const lastStep = () => {
        return <div className="row step2-content">
            <div className="col-lg-12">
                <h1 className="title"
                    translate>{i18next.t('authSignUpHeader')}</h1>
                <PrivateData {...props} submit={submitLastStep}></PrivateData>
            </div>
        </div>
    }

    return (<Anonymous>
            <div className="sign-up-content">
                <div className="container-fluid">
                    <div className="container">

                        <div className="content-body">
                            <div>
                                {step === 0 ? firstStep() : lastStep()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Anonymous>
    )
}
