const Picture = (props) => {
    console.log('----->picture render')
    return (
        <div>
            <img src={props.src} alt={props.alt} /> <br />
            {props.children}
        </div>
    )
}

export default Picture;