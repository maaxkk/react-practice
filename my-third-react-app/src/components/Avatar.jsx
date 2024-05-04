import {IoPersonSharp} from "react-icons/io5";
import styles from '../styles/Avatar.module.css'
import classNames from "classnames";

const COLORS = ['navy', 'pink', 'red', 'blue', 'green']

function Avatar({src, alt, children, ...otherProps}) {
    const avatarInitials = children ? styles['avatar-letters'] : ''
    const randInt = Math.floor(Math.random() * COLORS.length)
    const randColor = COLORS[randInt]
    const allClasses = classNames(avatarInitials, styles['avatar'], styles[randColor])
    return (
        <div className={allClasses}>
            {(!children && src)
                ? <img src={src} alt={alt}/>
                : (!children && !src)
                ? <IoPersonSharp/>
                    : children}
        </div>
    )
}

export {Avatar}