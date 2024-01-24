import codePic from './assets/code_funny.png'

function Card(){
    
    return(
        <div className="card">
            <img classname="card-image" src="https://preview.redd.it/qy3fid1l70x61.jpg?width=640&crop=smart&auto=webp&s=7e77db39432599cab3252b404a501e9bfa798021" alt="profile picture"></img>
            <img classname="card-image" src={codePic}></img>
            <h2 className="card-title">Brian Duong</h2>
            <p className="card-text">3rd Year Software Engineering Technology Student</p>
        </div>
    );
}

export default Card