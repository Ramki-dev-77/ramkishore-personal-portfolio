function SocialMediaComponent(props){
    return (
        <div className="social-media">
            <a href={props.link} target="_blank" rel="noreferrer" title={props.name}><img src={props.source} height={30} width={30} alt={props.name}/></a>
        </div>
    );
}

export default SocialMediaComponent;