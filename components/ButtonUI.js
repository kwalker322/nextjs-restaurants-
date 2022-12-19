import classnames from 'classnames/bind'

import Icon from './Icon'

import styles from './ButtonUI.module.scss'


let cx = classnames.bind(styles);


const ButtonUI = ({clickHandler, icon}) => {
    let buttonClasses = cx({
        ButtonUI:true,
        closeBtn: icon == "close",
    } );
    return <button 
    ClassName={buttonClasses}
    onClick={clickHandler}
    >
        <Icon slug={icon}/>
    </button>
}

export default ButtonUI