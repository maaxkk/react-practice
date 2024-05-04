
function MenuItem({children, open, toggle}) {
    return (
        <div className={'menu-item'}>
            {children}
        </div>
    )
}

export {MenuItem}