export default function ({Prevslider, Nextslider}){
    return(
        <div>
        <i onClick={Prevslider} className="fa-solid fa-chevron-left"></i>
        <i onClick={Nextslider} className="fa-solid fa-chevron-right"></i>
    </div>
    )
}