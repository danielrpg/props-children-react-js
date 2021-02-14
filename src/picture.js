const Picture = (props) => {
    return (
        <div>
            <img src={props.src} alt={props.alt} />
            {props.children}
        </div>
    )
}

export default Picture;