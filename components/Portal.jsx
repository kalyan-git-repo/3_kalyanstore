import ReactDom from 'react-dom'

export default function Portal(props){
    const { handClosePortal, children} = props


    return ReactDom.createPortal(
        <div className='portal-container'>
            <div onClick={handClosePortal} className='portal-underlay' />
            {children}
        </div>,
        document.getElementById('portal')
    )
}