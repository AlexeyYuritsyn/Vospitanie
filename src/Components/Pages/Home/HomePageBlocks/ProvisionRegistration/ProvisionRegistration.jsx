import './_provision-registration.scss';
import React from "react";
import Button from "../../../../Button/Button";


const ProvisionRegistration = () => {

    return (
        <div className="provision-registration container">
            <div className="provision">
                <Button
                    link={'/files/Положение_Городской_конкурс_лучших_воспитательных_практик.pdf'}
                    value={'Положение'}
                    internal={false}
                />
            </div>
            <div className="registration">
                <Button
                    link={'/site/registration'}
                    value={'Регистрация'}
                    internal={false}
                />
            </div>
        </div>
    )
}

export default ProvisionRegistration;