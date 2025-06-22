
function AboutComponentBio(props){
    return(
        <div className="about_me_container_bio">
            <h1>{props.heading}</h1>
            <p>{props.bio}</p>
        </div>
    );    
}

function AboutComponentImg(props){
    return(
        <div className="about_me_container_img">
            <img src={props.myImage} height={300} width={300} className="myImage"/>
        </div>
    );
}
export {AboutComponentBio,AboutComponentImg};