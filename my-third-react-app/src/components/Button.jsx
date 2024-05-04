import classNames from "classnames";
import styles from '../styles/Button.module.css'

function Button({children, size, variant, className, ...restProps}) {
    let btnVariant = variant ? styles[`button-${variant}`] : '';
    let btnSize = size ? `button-${size}` : '';
    const allClasses = classNames(btnSize, btnVariant, className);
    return (
        <button className={allClasses} {...restProps}>{children}</button>
    )
}

export {Button}